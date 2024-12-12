import React from 'react';
import { Box } from '@mui/material';

import { Colors } from 'src/common/theme';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Box
      sx={{
        background: Colors.BACKGROUND,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '80px 0 150px',
        position: 'relative'
      }}
    >
      {children}
      <img
        src="/waves.png"
        alt="footer ui"
        width="100%"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          zIndex: 1,
          objectFit: 'contain'
        }}
      />
    </Box>
  );
}
