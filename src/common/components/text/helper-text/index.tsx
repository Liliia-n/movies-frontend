import StyledFormHelperText from './styles';

type Props = {
  helperText: string;
};

export default function FormHelperText({ helperText }: Props): JSX.Element {
  return <StyledFormHelperText>{helperText}</StyledFormHelperText>;
}
