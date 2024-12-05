import { FormHelperText, styled } from '@mui/material';

import { Colors, FontSize, FontWeight } from 'src/common/theme';

const StyledFormHelperText = styled(FormHelperText)`
  color: ${Colors.ERROR};
  font-size: ${FontSize.SMALL};
  font-weight: ${FontWeight.SEMI_BOLD};
  margin-top: 3px;
`;

export default StyledFormHelperText;
