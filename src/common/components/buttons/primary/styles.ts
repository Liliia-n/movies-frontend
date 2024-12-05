import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material';

import { Colors, FontSize, FontWeight } from 'src/common/theme';

type Props = {
  secondary?: boolean;
};

const StyledBtn = styled(LoadingButton)<Props>`
  background-color: ${({ secondary }) => (secondary ? Colors.SECONDARY : Colors.PRIMARY)};
  color: ${Colors.WHITE};
  font-size: ${FontSize.DEFAULT};
  font-weight: ${FontWeight.BOLD};
  text-transform: capitalize;
  letter-spacing: 1.25px;
  border-radius: 10px;
  padding: 15px 20px;
  min-width: 150px;
  white-space: nowrap;

  svg {
    color: ${Colors.PRIMARY};
  }

  &.MuiCircularProgress {
    color: ${Colors.PRIMARY};

    svg {
      color: ${Colors.PRIMARY};
    }
  }

  &:hover {
    background-color: ${({ secondary }) => (secondary ? Colors.SECONDARY : Colors.PRIMARY)};
  }

  &:disabled {
    background-color: ${({ secondary }) => (secondary ? Colors.SECONDARY : Colors.PRIMARY)};
    opacity: 0.8;

    .MuiLoadingButton-loadingIndicator {
      color: ${Colors.WHITE};
    }
  }
`;

export default StyledBtn;
