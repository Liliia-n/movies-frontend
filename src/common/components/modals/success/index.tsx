import { Modal } from '@mui/material';
import { t } from 'i18next';

import SuccessImg from 'src/assets/success.png';

import { Container, CrossIcon as CloseIcon, Image } from './styles';

type Props = {
  open: boolean;
  handleClose: () => void;
  content: React.ReactNode;
  ariaLabelledBy: string;
  ariaDescribedBy: string;
};

export default function SuccessModal({
  open,
  handleClose,
  content,
  ariaLabelledBy,
  ariaDescribedBy
}: Props): JSX.Element {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    >
      <Container>
        <CloseIcon onClick={handleClose} />
        <Image src={SuccessImg} alt={t('common.successModalAlt')} />
        {content}
      </Container>
    </Modal>
  );
}
