import StyledBtn from './styles';

type Props = {
  text: string;
  loading?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  type?: 'button' | 'submit' | 'reset';
  noBorderRadius?: boolean;
  size?: 'small';
};

export default function OutlinedBtn({
  text,
  icon,
  loading = false,
  color = 'primary',
  onClick,
  type = 'button',
  disabled = false,
  noBorderRadius = false,
  size
}: Props): JSX.Element {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledBtn
      noborderradius={noBorderRadius}
      loading={loading}
      variant="outlined"
      onClick={handleClick}
      disabled={disabled}
      endIcon={icon}
      color={color}
      type={type}
      size={size}
    >
      {text}
    </StyledBtn>
  );
}
