import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const PartyTab = () => {
  return (
    <Box>
      <Box>
        Party Party!
      </Box>
      <Grid container spacing={0} justifyContent='center' direction='row'>
        <Grid item xs={4} sx={{p:0}}>
          <Box component='img' sx={{width: 50, height: 50}}/>
        </Grid>
        <Grid item xs={4} sx={{p:0}}>
          <Box component='img' sx={{width: 50, height: 50}} />
        </Grid>
        <Grid item xs={4} sx={{p:0}}>
          <Box component='img' sx={{width: 50, height: 50}} />
        </Grid>
        <Grid item xs={4} sx={{p:0, px:0}}>
          <Box component='img' sx={{px:0, width: 50, height: 50}} />
        </Grid>
        <Grid item xs={4}>
          <Box component='img' sx={{width: 50, height: 50}} />
        </Grid>
        <Grid item xs={4}>
          <Box component='img' sx={{width: 50, height: 50}} />
        </Grid>
        <Grid item xs={4}>
          <Box component='img' sx={{width: 50, height: 50}} />
        </Grid>
        <Grid item xs={4}>
          <Box component='img' sx={{width: 50, height: 50}} />
        </Grid>
        <Grid item xs={4}>
          <Box component='img' sx={{width: 50, height: 50}} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default PartyTab;
