import React, { useState, useRef } from "react";
import { data } from "../../utils/data";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ImageUploader = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const { equipmentId, newsId, addNewItemPopup } = useSelector(
    ({ user }) => user
  );
  // проверка на новость
  const { pathname } = useLocation();
  const pathnameId = pathname.split("/").at(-1);
  const isNews = +pathnameId === +5;
  const { itemsList } = {
    itemsList: !isNews
      ? [...data.equipment.items, ...data.solutions.items]
      : [...data.news.items],
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
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    if (["image/svg+xml", "image/png", "image/jpeg"].includes(file.type)) {
      uploadImage(file);
    } else {
      setError("Invalid file type. Please upload SVG, PNG, or JPEG.");
    }
  };

  const uploadImage = async (file) => {
    setUploading(true);
    setError("");
    try {
      // Simulating server upload
      const result = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            url: URL.createObjectURL(file),
            message: "Image uploaded successfully",
          });
        }, 1500);
      });
      setUploadedImage(result);
    } catch (err) {
      setError(err.message || "Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const removeImage = () => {
    setUploadedImage(null);
    setError("");
  };

  return (
    <div className="w-full mx-auto ">
      <span className="text-sm text-gray-300">Изображение</span>
      {!uploadedImage && (
        <div
          className={`p-8 mt-2 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors
            ${
              dragActive
                ? "border-blue-400 bg-blue-50"
                : "border-gray-300 hover:border-gray-400"
            }
            ${uploading ? "opacity-50 cursor-not-allowed" : ""}`}
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
            disabled={uploading}
          />
          {uploading ? (
            <p className="text-sm text-gray-500">Загрузка...</p>
          ) : (
            <>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Нажмите, чтобы загрузить</span>{" "}
                или перетащите.
              </p>
              <p className="text-xs text-gray-500">
                SVG, PNG, JPG or JPEG (MAX. 800x400px)
              </p>
            </>
          )}
        </div>
      )}

      {uploadedImage ? (
        <div className="mt-4 w-full flex justify-between">
          <img
            src={uploadedImage.url || "/placeholder.svg"}
            alt="Uploaded"
            className="rounded-lg shadow-md max-w-[300px]"
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
      ) : !addNewItemPopup ? (
        <div className="mt-4 w-full flex justify-between">
          <img
            src={findProduct.img}
            alt="Uploaded"
            className="rounded-lg shadow-md max-w-[300px]"
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
      ) : (
        <></>
      )}

      {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default ImageUploader;
