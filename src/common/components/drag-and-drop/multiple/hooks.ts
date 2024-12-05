import React, { useRef, useState } from 'react';

import { uploadValidation } from 'src/common/constants';
import { validateFile } from 'src/common/handlers';

import { FileWithPreview } from './types';

type ReturnType = {
  inputRef: React.RefObject<HTMLInputElement>;
  openFileInput: () => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: (index: number) => void;
  filesWithPreviews: FileWithPreview[];
};

export default function useMultipleDragAndDrop(setFiles: (files: File[]) => void): ReturnType {
  const [filesWithPreviews, setFilesWithPreviews] = useState<FileWithPreview[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const openFileInput = (): void => {
    inputRef.current?.click();
  };

  const updatePreview = (uploadedFile: File): void => {
    const reader = new FileReader();

    reader.onloadend = (): void => {
      setFilesWithPreviews((prevState) => [
        ...prevState,
        { file: uploadedFile, previewUrl: reader.result }
      ]);

      setFiles([...filesWithPreviews.map((fp) => fp.file), uploadedFile]);
    };

    reader.readAsDataURL(uploadedFile);
  };

  const processFile = (files: FileList | null): void => {
    if (files && files[0]) {
      const uploadedFile = files[0];

      updatePreview(uploadedFile);
    }
  };

  const handleFileUpload = (files: FileList): void => {
    const validationPassed = validateFile(
      uploadValidation.imgFileTypes,
      uploadValidation.maxSize,
      files[0]
    );

    if (!validationPassed) {
      return;
    }

    processFile(files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    const { files } = e.dataTransfer;

    handleFileUpload(files);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { files } = e.target;

    if (!files) return;

    handleFileUpload(files);
  };

  const removeFile = (index: number): void => {
    setFilesWithPreviews((prevState) => prevState.filter((_, i) => i !== index));
    setFiles(filesWithPreviews.filter((_, i) => i !== index).map((fp) => fp.file));
  };

  return {
    inputRef,
    openFileInput,
    handleDragOver,
    handleDrop,
    handleFileChange,
    removeFile,
    filesWithPreviews
  };
}
