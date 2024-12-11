import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { Colors } from 'src/common/theme';
import { Path } from 'src/routing';

type Props = {
  id: string;
  title: string;
  year: string;
  imgSrc: string;
};

export function MovieCard({ id, title, year, imgSrc }: Props): JSX.Element {
  const navigate = useRouter();

  const viewMovieCard = (): void => {
    navigate.push(`${Path.EDIT_MOVIE}/${id}`);
  };

  return (
    <Box
      onClick={viewMovieCard}
      sx={{
        padding: '8px',
        borderRadius: '12px',
        background: Colors.CARD,
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.05)',
          transition: 'transform 0.2s'
        }
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
