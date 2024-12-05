import { Button } from '@mui/material';
import { Colors, FontWeight } from 'src/common/theme';

type Props = {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  type?: 'button' | 'submit' | 'reset';
  whiteSpace?: 'nowrap' | 'pre-line' | 'pre-wrap';
  dataTestId?: string;
};

export default function TextBtn({
  text,
  color = 'primary',
  onClick,
  type = 'button',
  disabled = false,
  whiteSpace = 'nowrap',
  dataTestId
}: Props): JSX.Element {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button
      variant="text"
      color={color}
      type={type}
      onClick={handleClick}
      disabled={disabled}
      data-testid={dataTestId}
      sx={{
        whiteSpace,
        textTransform: 'none',
        color: Colors.WHITE,
        fontWeight: FontWeight.BOLD
      }}
    >
      {text}
    </Button>
  );
}
