import { SxProps, Theme } from '@mui/material';

import StyledBtn from './styles';

type Props = {
  text: string;
  loading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  width?: string;
  type?: 'button' | 'submit' | 'reset';
  secondary?: boolean;
  sx?: SxProps<Theme> | undefined;
};

export default function PrimaryBtn({
  text,
  onClick,
  loading = false,
  disabled = false,
  secondary = false,
  width = '150px',
  type = 'button',
  sx
}: Props): JSX.Element {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledBtn
      loading={loading}
      variant="contained"
      secondary={secondary}
      onClick={handleClick}
      disabled={loading || disabled}
      type={type}
      sx={{
        width,
        ...sx
      }}
    >
      {text}
    </StyledBtn>
  );
}
