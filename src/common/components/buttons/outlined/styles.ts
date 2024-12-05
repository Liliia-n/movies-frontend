import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material';

import { Colors } from 'src/common/theme';
import { FontWeight, TextTransform } from 'src/common/theme/fonts';

type Props = {
  noborderradius?: boolean;
  size?: 'small';
};

const StyledBtn = styled(LoadingButton)<Props>`
  border-radius: 10px !important;
  letter-spacing: 2px;
  font-weight: ${FontWeight.BOLD};
  text-transform: ${TextTransform.CAPITALIZE};
  flex-shrink: 0;
  border-radius: 3px;
  color: ${Colors.WHITE};
  border: 1px solid ${Colors.WHITE};
  padding: 15px 20px !important;
  width: 150px;
`;

export default StyledBtn;
