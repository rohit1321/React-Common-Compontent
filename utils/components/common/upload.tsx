"use client";

import { useCallback, useRef, useState } from "react";

interface FileUploadProps {
  onFileSelect?: (file: File) => void;
  buttonText?: string;
  dropZoneText?: string;
  acceptedFileTypes?: string;
  customClass?: string;
}

export default function FileUpload({
  onFileSelect,
  buttonText,
  dropZoneText,
  acceptedFileTypes,
  customClass,
}: FileUploadProps) {
  const [fileName, setFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const dropHandler = useCallback(
    (ev: React.DragEvent<HTMLDivElement>) => {
      ev.preventDefault();

      if (ev.dataTransfer.items) {
        [...ev.dataTransfer.items].forEach((item) => {
          if (item.kind === "file") {
            const file = item.getAsFile();
            if (file) {
              setFileName(file.name);
              onFileSelect?.(file);
            }
          }
        });
      } else {
        [...ev.dataTransfer.files].forEach((file) => {
          setFileName(file.name);
          onFileSelect?.(file);
        });
      }
    },
    [onFileSelect]
  );

  const dragOverHandler = useCallback((ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  }, []);

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  const fileInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setFileName(file.name);
      onFileSelect?.(file);
    }
  };

  return (
    <div className={`d-block justify-content-center ${customClass}`}>
      <div className="container d-flex justify-content-center">
        <div
          id="drop_zone"
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
          className="d-flex  align-items-center m-5 card w-50 p-5 "
        >
          <p>{dropZoneText}</p>
          <button className="btn btn-primary mt-3" onClick={handleChooseFile}>
            {buttonText}
          </button>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={fileInputHandler}
          style={{ display: "none" }}
          accept={acceptedFileTypes}
        />
      </div>
      <div className="mt-5 text-black fw-bold d-flex justify-content-center">
        Selected File:p {fileName || "None"}
      </div>
    </div>
  );
}
