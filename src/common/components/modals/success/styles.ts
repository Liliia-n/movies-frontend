import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material';

import { Colors } from 'src/common/theme';

type ModalProps = {
  width?: string;
  height?: string;
};

export const Container = styled('div')<ModalProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 30px;
  transform: translate(-50%, -50%);
  width: ${({ width }) => width || '35%'};
  height: ${({ height }) => height || '80%'};
  background-color: ${Colors.SECONDARY};
  border: 1px solid ${Colors.SECONDARY};
  border-radius: 50px;
  box-shadow: 24;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Image = styled('img')`
  width: 100%;
  height: 70%;
  object-fit: contain;
`;

export const CrossIcon = styled(CloseIcon)`
  position: absolute;
  top: 30px;
  right: 30px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  color: ${Colors.WHITE};

  &:hover {
    color: ${Colors.PRIMARY};
  }
`;
