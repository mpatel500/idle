import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const EquippedArmour = () => (
	<Grid container justifyContent='center'>
		<Grid item sx={{ width: 200 }}>
			<Grid item xs={12} sx={{ py: 1 }}>
				<Box component='img' sx={{ width: 50, height: 50 }} />
			</Grid>
			<Grid item xs={12} sx={{ py: 1 }}>
				<Box component='img' sx={{ width: 50, height: 50 }} />
				<Box component='img' sx={{ width: 50, height: 50, px: 2 }} />
				<Box component='img' sx={{ width: 50, height: 50 }} />
			</Grid>
			<Grid item sx={{ py: 1 }}>
				<Box component='img' sx={{ width: 50, height: 50, px: 1 }} />
				<Box component='img' sx={{ width: 50, height: 50, px: 1 }} />
			</Grid>
		</Grid>
	</Grid>
);

export default EquippedArmour;