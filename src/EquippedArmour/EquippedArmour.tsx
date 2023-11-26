import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

type EquippedArmourProps = {
	items: number[],
	handleItemChange: (itemIndex: number, listIndex: number) => void
}

const EquippedArmour = ({ items, handleItemChange }: EquippedArmourProps) => (
	<Grid container justifyContent='center'>
		<Grid item sx={{ width: 200 }}>
			<Grid item xs={12} sx={{ py: 1 }}>
				<Button key={`equipped-item-head`} onClick={() => handleItemChange(0, 1)}>
          <Box
            component='img'
            src={`https://placekitten.com/50/50?image=${items[0]}`} 
            alt={`item-0`}
          />
        </Button>
			</Grid>
			<Grid item xs={12} sx={{ py: 1 }}>
				<Button key={`equipped-item-left-arm`} onClick={() => handleItemChange(1, 1)}>
          <Box
            component='img'
            src={`https://placekitten.com/50/50?image=${items[1]}`} 
            alt={`item-0`}
          />
        </Button>
				<Button key={`equipped-item-chest`} onClick={() => handleItemChange(2, 1)}>
          <Box
            component='img'
            src={`https://placekitten.com/50/50?image=${items[2]}`} 
            alt={`item-0`}
          />
        </Button>
				<Button key={`equipped-item-right-arm`} onClick={() => handleItemChange(3, 1)}>
          <Box
            component='img'
            src={`https://placekitten.com/50/50?image=${items[3]}`} 
            alt={`item-0`}
          />
        </Button>
			</Grid>
			<Grid item sx={{ py: 1 }}>
				<Button key={`equipped-item-left-leg`} onClick={() => handleItemChange(4, 1)}>
          <Box
            component='img'
            src={`https://placekitten.com/50/50?image=${items[4]}`} 
            alt={`item-0`}
          />
        </Button>
				<Button key={`equipped-item-right-leg`} onClick={() => handleItemChange(5, 1)}>
          <Box
            component='img'
            src={`https://placekitten.com/50/50?image=${items[5]}`} 
            alt={`item-0`}
          />
        </Button>
			</Grid>
		</Grid>
	</Grid>
);

export default EquippedArmour;