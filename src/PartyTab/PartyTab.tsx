import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import EquippedArmour from '../EquippedArmour';

const PartyTab = () => {
	const [partyMemberItems, setPartyMemberItems] = useState(
    [0, 1, 2, 3, 4, 5, 6, 7, 8]
  );
	const [selectedIndex, setSelectedIndex] = useState(-1);

	const handleItemChange = (value: number, index: number) => {
    console.log(index, value, selectedIndex);
		if (selectedIndex === -1) {
			setSelectedIndex(index)
		} 
		else {
			const newItems = [...partyMemberItems];
			const temp = partyMemberItems[index];
			newItems[index] = partyMemberItems[selectedIndex];
			newItems[selectedIndex] = temp;
			setPartyMemberItems(newItems);
			setSelectedIndex(-1);
		}
  }

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
        <Grid item xs={12} justifyContent='center'>
          <Typography variant='h6' sx={{py: 3}}>Inventory</Typography>
					<InventoryRow
						id={1}
						items={partyMemberItems}
						handleItemChange={handleItemChange}
					/>
        </Grid>
      </Grid>
    </Box>
  );
};

type InventoryRowProps = {
	id: number,
	items: number[],
	handleItemChange: (value: number, index: number) => void
}

const InventoryRow = ({ id, items, handleItemChange }: InventoryRowProps ) => {
	return (
		<Grid container spacing={2} justifyContent='center'>
			{items.map((item, index) => (
				<Grid item xs={1} key={`grid-row-${id}-col-${index}`}>
					<Button onClick={() => handleItemChange(item, index)}>
						<Box
							component='img'
							src={`https://placekitten.com/50/50?image=${index}`} 
							alt={`item-${item.toString()}`}
						/>
						{item}
					</Button>
				</Grid>
				)
			)}
		</Grid>
	);
}

export default PartyTab;
