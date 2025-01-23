import React, { useState, useRef } from "react";
import { ChevronDown, FileSpreadsheet } from "lucide-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  exportOrdersExcel,
  importOrdersExcel,
} from "../../utils/slice/userSlice";

const FileUploader = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const allowedTypes = [
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/sql",
    ".sql",
    ".xls",
    ".xlsx",
  ];

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

    const files = Array.from(e.dataTransfer.files);
    console.log(files);
    handleFiles(files);
  };

  const handleChange = (e) => {
    const files = Array.from(e.target.files || []);
    console.log(files);
    handleFiles(files);
  };

  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFiles = async (files) => {
    const validFiles = files.filter((file) => {
      const fileType = file.type || `.${file.name.split(".").pop()}`;
      return allowedTypes.includes(fileType.toLowerCase());
    });

    if (validFiles.length) {
      setUploading(true);
      setError("");

      for (const file of validFiles) {
        try {
          await dispatch(importOrdersExcel(file));
          setUploadedFiles((prev) => [...prev, file]);
        } catch (err) {
          setError(
            `Failed to upload ${file.name}: ${
              err.response?.data?.message || err.message
            }`
          );
        }
      }

      setUploading(false);
    }
  };

  const removeFile = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-2xl mx-auto p-4 w-[600px]">
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 ${
          dragActive ? "border-blue-500 bg-blue-50" : "border-blue-300"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <FileSpreadsheet className="w-16 h-16 text-blue-500" />

          <div className="relative">
            <button
              onClick={() => inputRef.current?.click()}
              className="flex-center  px-6 py-2.5  bg-white text-gray-700 rounded shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span>ВЫБЕРИТЕ ФАЙЛЫ</span>
              <ChevronDown className={"ml-2"} />
            </button>
            <input
              ref={inputRef}
              type="file"
              multiple
              accept=".sql,.xls,.xlsx"
              onChange={handleChange}
              className="hidden"
            />
          </div>

          <p className="text-gray-500">или перетащите файл сюда</p>
        </div>
      </div>

      {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}

      {uploading ? (
        <div className="mt-4 text-center">
          <p className="text-blue-500">Загрузка...</p>
        </div>
      ) : (
        uploadedFiles.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Загруженные файлы:</h3>
            <ul className="space-y-2">
              {uploadedFiles.map((file, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-2 bg-gray-50 rounded"
                >
                  <span className="text-sm text-gray-600">
                    {file.name} ({(file.size / 1024).toFixed(1)} KB)
                  </span>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default FileUploader;
