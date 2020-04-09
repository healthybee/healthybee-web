import { Box, Typography } from '@material-ui/core';

import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Fastfood from '@material-ui/icons/Fastfood';
import React from 'react';

export default function JustifyContent() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        display="flex"
        alignItems="center"
        m={0}
        p={0}
        bgcolor="background.paper"
      >
        <Box p={10} m={0} textAlign="center">
          <BeachAccessIcon style={{ fontSize: 80 }} />
          <Typography variant="h4" component="h4" gutterBottom justify="center">
            Always fresh
          </Typography>
          <Typography variant="h6" component="h6">
            Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.
          </Typography>
        </Box>
        <Box p={10} m={0} textAlign="center">
          <Fastfood style={{ fontSize: 80 }} />
          <Typography variant="h4" component="h4" gutterBottom>
            Best Quality
          </Typography>
          <Typography variant="h6" component="h6">
            Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.
          </Typography>
        </Box>
        <Box p={10} m={0} textAlign="center">
          <BeachAccessIcon style={{ fontSize: 80 }} />
          <Typography variant="h4" component="h4" gutterBottom>
            Best Quality
          </Typography>
          <Typography variant="h6" component="h6">
            Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
