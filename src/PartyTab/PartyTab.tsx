import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import EquippedArmour from '../EquippedArmour';

const PartyTab = () => {
  return (
    <Box>
			<Grid container justifyContent={'center'}>
				<Grid item xs={4}>
					<Box>
						<Typography variant='h6'>Equipped</Typography>
					</Box>
					<EquippedArmour />
				</Grid>
				<Grid item xs={8}>
					<Typography variant='h6'>Stats</Typography>
					<List dense={false}>
						<ListItem>
							Bigstat: Very big stat
						</ListItem>
					</List>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='h6'>Inventory</Typography>
					<InventoryRow />
					<InventoryRow />
					<InventoryRow />
				</Grid>
			</Grid>
    </Box>
  )
}

const InventoryRow = () => (
	<Box sx={{py: 0.5}}>
		<Box component='img' sx={{ width: 50, height: 50, px: 1 }} />
		<Box component='img' sx={{ width: 50, height: 50, px: 1 }} />
		<Box component='img' sx={{ width: 50, height: 50, px: 1 }} />
		<Box component='img' sx={{ width: 50, height: 50, px: 1 }} />
		<Box component='img' sx={{ width: 50, height: 50, px: 1 }} />
		<Box component='img' sx={{ width: 50, height: 50, px: 1 }} />
		<Box component='img' sx={{ width: 50, height: 50, px: 1 }} />
		<Box component='img' sx={{ width: 50, height: 50, px: 1 }} />
		<Box component='img' sx={{ width: 50, height: 50, px: 1 }} />
		<Box component='img' sx={{ width: 50, height: 50, px: 1 }} />
		<Box component='img' sx={{ width: 50, height: 50, px: 1 }} />
		<Box component='img' sx={{ width: 50, height: 50, px: 1 }} />
	</Box>
)


export default PartyTab;
