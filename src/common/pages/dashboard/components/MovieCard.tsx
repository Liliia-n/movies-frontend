import { Box, Typography } from '@mui/material';

import { Colors } from 'src/common/theme';

type Props = {
  title: string;
  year: string;
  imgSrc: string;
};

export function MovieCard({ title, year, imgSrc }: Props): JSX.Element {
  return (
    <Box
      sx={{
        padding: '8px',
        borderRadius: '12px',
        background: Colors.CARD
      }}
    >
      <Box
        sx={{
          padding: '8px',
          borderRadius: '12px',
          background: Colors.CARD
        }}
      >
        <Box
          sx={{
            width: '266px',
            height: '400px',
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <img
            src={imgSrc}
            alt={title}
            style={{
              borderRadius: '12px',
              width: '266px',
              height: '400px',
              objectFit: 'cover',
              background: Colors.INPUT
            }}
          />
        </Box>
        <Typography variant="h3" marginTop="10px" color={Colors.WHITE}>
          {title}
        </Typography>
        <Typography variant="body1" marginTop="12px" color={Colors.WHITE}>
          {year}
        </Typography>
      </Box>
    </Box>
  );
}
