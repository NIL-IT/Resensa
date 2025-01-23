import React, { useState, useRef } from "react";
import { data } from "../../utils/data";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ImageUploader = ({ onFileSelect, findProduct }) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const { itemId, addNewItemPopup, news, solutions, equipment } = useSelector(({ user }) => user);
  const { pathname } = useLocation();
  const pathnameId = pathname.split("/").at(-1);
  let product = findProduct;
  if (!findProduct) {
    const isNews = +pathnameId === 4;
    const isSolutions = +pathnameId === 3;
    const itemsList = isNews ? news : isSolutions ? solutions : equipment;
    product = itemsList.find((item) => +item.id === +itemId);
  }
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleFile = (file) => {
    if (["image/svg+xml", "image/png", "image/jpeg"].includes(file.type)) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      if (onFileSelect) {
        onFileSelect(file);
      }
      setError("");
    } else {
      setError("Пожалуйста, загрузите SVG, PNG, или JPEG файл.");
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

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const removeImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setError("");
    if (onFileSelect) {
      onFileSelect(null);
    }
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className='w-full mx-auto'>
      <span className='text-sm text-gray-300'>Изображение</span>
      {previewUrl != null && !addNewItemPopup && product ? (
        <div className='relative p-8 mt-2 border-2 border-dashed rounded-lg text-center'>
          <img
            src={previewUrl}
            alt='Текущее изображение'
            className='max-h-[200px] mx-auto rounded-lg'
          />
          <button
            type='button'
            onClick={() => removeImage()}
            className='absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-900'>
            ×
          </button>
        </div>
      ) : (
        <div
          className={`relative p-8 mt-2 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors
            ${dragActive ? "border-blue-400 bg-blue-50" : "border-gray-300 hover:border-gray-400"}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={onButtonClick}>
          <input
            ref={inputRef}
            type='file'
            accept='.svg,.png,.jpg,.jpeg'
            onChange={handleChange}
            className='hidden'
          />

          {previewUrl ? (
            <>
              <img
                src={previewUrl}
                alt='Предпросмотр'
                className='max-h-[200px] mx-auto rounded-lg'
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeImage();
                }}
                className='absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-900'>
                ×
              </button>
            </>
          ) : (
            <>
              <p className='mb-2 text-sm text-gray-500'>
                <span className='font-semibold'>Нажмите, чтобы загрузить</span> или перетащите
              </p>
              <p className='text-xs text-gray-500'>SVG, PNG, JPG или JPEG (макс. 800x400px)</p>
            </>
          )}
        </div>
      )}

      {error && <p className='mt-2 text-red-500 text-sm'>{error}</p>}
    </div>
  );
};

export default ImageUploader;
