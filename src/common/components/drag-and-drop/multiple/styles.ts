import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material';

import { Colors, FontSize, FontWeight, TextTransform } from 'src/common/theme';

interface DroppedPhotoProps {
  backgroundImage: string;
}

export const Container = styled('div')`
  background-color: ${Colors.WHITE};
  border: 2px dashed lightgray;
  width: 100%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;
  border-radius: 10px;
  cursor: pointer;
`;

export const IconContainer = styled('div')`
  border: 2px dashed lightgray;
  border-radius: 50%;
  padding: 10px;

  svg {
    color: lightgray;
  }
`;

export const PhotoContainer = styled('div')`
  display: flex;
  row-gap: 20px;
  flex-wrap: wrap;
  min-width: 700px;
`;

export const PreviewPhotoContainer = styled('div')`
  background-color: ${Colors.WHITE};
  padding: 20px;
  position: relative;
`;

export const DroppedPhoto = styled('div')<DroppedPhotoProps>`
  width: 180px;
  height: 150px;
  background-color: lightgray;
  border-radius: 12px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
`;

export const RemoveIcon = styled(CloseIcon)`
  width: 25px;
  height: 25px;
  color: ${Colors.WHITE};
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 5px;
  cursor: pointer;
`;

export const Title = styled('p')`
  font-size: ${FontSize.MEDIUM};
  color: lightgray;
  line-height: 1.2;
`;

export const Subtitle = styled('p')`
  font-size: ${FontSize.DEFAULT};
  color: ${Colors.ERROR};
  font-weight: ${FontWeight.SEMI_BOLD};
  text-transform: ${TextTransform.CAPITALIZE};
  opacity: 0.9;
  line-height: 1.2;
`;

export const Input = styled('input')`
  display: none;
`;
