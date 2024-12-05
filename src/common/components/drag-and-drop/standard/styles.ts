import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { styled } from '@mui/material';

import { Colors, FontSize } from 'src/common/theme';

interface DroppedPhotoProps {
  backgroundImage: string;
}

export const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 10px;
  cursor: pointer;
  background: ${Colors.INPUT};
  height: 500px;
  width: 470px;
  border: 2px dashed ${Colors.WHITE};
`;

export const DroppedPhoto = styled('div')<DroppedPhotoProps>`
  background-color: lightgray;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

export const PhotoIcon = styled(AddAPhotoIcon)`
  width: 40px;
  height: 40px;
  color: ${Colors.WHITE};
`;

export const Title = styled('p')`
  font-size: ${FontSize.SMALL};
  color: ${Colors.WHITE};
  opacity: 0.8;
  width: 100%;
  line-height: 1.2;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled('input')`
  display: none;
`;
