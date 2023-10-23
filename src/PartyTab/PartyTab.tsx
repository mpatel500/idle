import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const PartyTab = () => {
  return (
    <Box>
			<Grid container justifyContent={'center'}>
				<Grid item xs={4}>
					<Box>
						<Typography variant='h6'>Equipped</Typography>
					</Box>
					<Grid container justifyContent='center'>
						<Grid item spacing={2} sx={{width:200}}>
							<Grid item xs={12} sx={{py:1}}>
								<Box component='img' sx={{width: 50, height: 50}}/>
							</Grid>
							<Grid item xs={12} sx={{py:1}}>
								<Box component='img' sx={{width: 50, height: 50}} />
								<Box component='img' sx={{width: 50, height: 50, px:2}} />
								<Box component='img' sx={{width: 50, height: 50}} />
							</Grid>
							<Grid item sx={{py:1}}>
								<Box component='img' sx={{width: 50, height: 50, px:1}} />
								<Box component='img' sx={{width: 50, height: 50, px:1}} />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={8}>
					<Typography variant='h6'>Stats</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='h6'>Inventory</Typography>
				</Grid>
			</Grid>
    </Box>
  )
}

export default PartyTab;
