import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const PartyTab = () => {
  return (
    <Box>
      <Box>
      <Typography variant='h6'>Inventory</Typography>
      </Box>
      <Grid container justifyContent='center' spacing={2} sx={{width:200}}>
        <Grid item>
          <Box component='img' sx={{width: 50, height: 50}}/>
        </Grid>
        <Grid item>
          <Box component='img' sx={{width: 50, height: 50}} />
        </Grid>
        <Grid item> 
          <Box component='img' sx={{width: 50, height: 50}} />
        </Grid>
        <Grid item>
          <Box component='img' sx={{width: 50, height: 50}} />
        </Grid>
        <Grid item>
          <Box component='img' sx={{width: 50, height: 50}} />
        </Grid>
        <Grid item>
          <Box component='img' sx={{width: 50, height: 50}} />
        </Grid>
        <Grid item>
          <Box component='img' sx={{width: 50, height: 50}} />
        </Grid>
        <Grid item>
          <Box component='img' sx={{width: 50, height: 50}} />
        </Grid>
        <Grid item>
          <Box component='img' sx={{width: 50, height: 50}} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default PartyTab;
