import React, { useState, useRef } from "react";
import { data } from "../../utils/data";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ImageUploader = ({ onFileSelect }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const { equipmentId, newsId, addNewItemPopup, news } = useSelector(
    ({ user }) => user
  );
  const { pathname } = useLocation();
  const pathnameId = pathname.split("/").at(-1);
  const isNews = +pathnameId === +4;
  const { itemsList } = {
    itemsList: !isNews
      ? [...data.equipment.items, ...data.solutions.items]
      : [...news],
  };
  const findProduct = itemsList.find((item) =>
    !isNews ? +item.id === +equipmentId : +item.id === +newsId
  );

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      console.log(e.dataTransfer.files[0], "drop");
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log("загрузили файл:", e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFile = async (file) => {
    if (["image/svg+xml", "image/png", "image/jpeg"].includes(file.type)) {
      try {
        const base64String = await convertToBase64(file);
        setUploadedImage({ url: base64String, file: file });
        console.log("file----", file);
        console.log("formating to base64", base64String);
        // Pass the base64 string to parent component
        if (onFileSelect) {
          onFileSelect(file);
        }
      } catch (err) {
        setError("Ошибка при обработке изображения.");
      }
    } else {
      setError("Пожалуйста, загрузите SVG, PNG, или JPEG файл.");
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const removeImage = () => {
    setUploadedImage(null);
    setError("");
    if (onFileSelect) {
      onFileSelect(null);
    }
  };

  return (
    <div className="w-full mx-auto">
      <span className="text-sm text-gray-300">Изображение</span>
      {!uploadedImage && (
        <div
          className={`p-8 mt-2 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors
            ${
              dragActive
                ? "border-blue-400 bg-blue-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={onButtonClick}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".svg,.png,.jpg,.jpeg"
            onChange={handleChange}
            className="hidden"
          />
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Нажмите, чтобы загрузить</span> или
            перетащите.
          </p>
          <p className="text-xs text-gray-500">
            SVG, PNG, JPG или JPEG (макс. 800x400px)
          </p>
        </div>
      )}

      {uploadedImage ? (
        <div className="mt-4 w-full flex justify-between">
          <img
            src={uploadedImage.url || "/placeholder.svg"}
            alt="Загруженное изображение"
            className="rounded-lg shadow-md max-w-[200px]"
          />
          <div className="flex flex-col justify-end">
            <button
              onClick={removeImage}
              className="mt-2 h-[60px] px-4 py-2 bg-red-500 bg-gray-400 text-white rounded hover:bg-gray-900 transition-colors"
            >
              Удалить изображение
            </button>
          </div>
        </div>
      ) : !addNewItemPopup && findProduct ? (
        <div className="mt-4 w-full flex justify-between">
          <img
            src={findProduct.img || "/placeholder.svg"}
            alt="Текущее изображение"
            className="rounded-lg shadow-md max-w-[200px]"
          />
          <div className="flex flex-col justify-end">
            <button
              onClick={removeImage}
              className="mt-2 h-[60px] px-4 py-2 bg-red-500 bg-gray-400 text-white rounded hover:bg-gray-900 transition-colors"
            >
              Удалить изображение
            </button>
          </div>
        </div>
      ) : null}

      {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default ImageUploader;
