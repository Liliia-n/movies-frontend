import React, { useRef, useState } from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';

import { uploadValidation } from 'src/common/constants';
import { validateFile } from 'src/common/handlers';

import { Container, DroppedPhoto, Input, Title } from './styles';

type Props = {
  setFile: (file: File) => void;
  accept?: string;
};

export default function DragAndDropZone({ setFile, accept = 'image/*' }: Props): JSX.Element {
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const openFileInput = (): void => {
    inputRef.current?.click();
  };

  const updatePreview = (uploadedFile: File): void => {
    const reader = new FileReader();

    reader.onloadend = (): void => {
      setPreviewUrl(reader.result);
    };

    reader.readAsDataURL(uploadedFile);
  };

  const processFile = (files: FileList | null): void => {
    if (files && files[0]) {
      const uploadedFile = files[0];

      setFile(uploadedFile);
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

  return (
    <Container onClick={openFileInput} onDragOver={handleDragOver} onDrop={handleDrop}>
      {previewUrl ? (
        <DroppedPhoto backgroundImage={previewUrl as string} />
      ) : (
        <Title>
          <GetAppIcon />
          Drop an image here
        </Title>
      )}
      <Input type="file" ref={inputRef} onChange={handleFileChange} accept={accept} />
    </Container>
  );
}
