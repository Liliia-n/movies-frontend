import AddIcon from '@mui/icons-material/Add';
import { t } from 'i18next';

import useMultipleDragAndDrop from './hooks';
import {
  Container,
  DroppedPhoto,
  IconContainer,
  Input,
  PhotoContainer,
  PreviewPhotoContainer,
  RemoveIcon,
  Subtitle,
  Title
} from './styles';

type Props = {
  subtitle: string;
  setFiles: (files: File[]) => void;
  accept?: string;
};

export default function MultipleDragAndDropZone({
  subtitle,
  setFiles,
  accept = 'image/*'
}: Props): JSX.Element {
  const {
    inputRef,
    openFileInput,
    handleDragOver,
    handleDrop,
    handleFileChange,
    removeFile,
    filesWithPreviews
  } = useMultipleDragAndDrop(setFiles);

  return (
    <>
      <Container onClick={openFileInput} onDragOver={handleDragOver} onDrop={handleDrop}>
        <IconContainer>
          <AddIcon />
        </IconContainer>

        <Title>{t('common.dragAndDrop')}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Input type="file" ref={inputRef} onChange={handleFileChange} accept={accept} />
      </Container>
      <PhotoContainer>
        {filesWithPreviews.map((file, index) => (
          <PreviewPhotoContainer key={file.file.name}>
            <DroppedPhoto backgroundImage={file.previewUrl as string}>
              <RemoveIcon onClick={() => removeFile(index)} />
            </DroppedPhoto>
          </PreviewPhotoContainer>
        ))}
      </PhotoContainer>
    </>
  );
}
