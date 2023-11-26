import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import EquippedArmour from '../EquippedArmour';
import Inventory from './Inventory';

const swapWithinListAndUpdateState = (
	listOne: any[],
	indexOne: number,
	indexTwo: number,
	setState: React.Dispatch<React.SetStateAction<number[]>>,
): void => {
	const newList = [...listOne];
	const temp = newList[indexOne];
	newList[indexOne] = newList[indexTwo];
	newList[indexTwo] = temp;
	setState(newList);
}

const swapBetweenListsAndUpdateState = (
	listOne: any[],
	indexOne: number,
	listTwo: any[],
	indexTwo: number,
	setState1: React.Dispatch<React.SetStateAction<number[]>>,
	setState2: React.Dispatch<React.SetStateAction<number[]>>,
): void => {
	const temp = listTwo[indexTwo];
	listTwo[indexTwo] = listOne[indexOne];
	listOne[indexOne] = temp;
	setState1(listOne);
	setState2(listTwo);
}

const PartyTab = () => {
	const initialEquippedItems = [0, 1, 2, 3, 4, 5];
	const initialPartyMemberItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

	const [equippedItems, setEquippedItems] = useState(initialEquippedItems)
	const [partyMemberItems, setPartyMemberItems] = useState(initialPartyMemberItems);

	const [selectedItem, setSelectedItem] = useState({
		itemIndex: -1,
		listIndex: -1
	});

	const handleItemChange = (itemIndex: number, listIndex: number) => {
		if (selectedItem.itemIndex === -1) {
			setSelectedItem({ itemIndex, listIndex })
		}
		else {
			if (selectedItem.listIndex === listIndex) {
				if (listIndex === 1) {
					swapWithinListAndUpdateState(equippedItems, itemIndex, selectedItem.itemIndex, setEquippedItems);
				} else if (listIndex === 2) {
					swapWithinListAndUpdateState(partyMemberItems, itemIndex, selectedItem.itemIndex, setPartyMemberItems);
				}
			} else {
        if (listIndex === 1) {
					swapBetweenListsAndUpdateState(equippedItems, itemIndex, partyMemberItems, selectedItem.itemIndex, setEquippedItems, setPartyMemberItems);
        } else if (listIndex === 2) {
					swapBetweenListsAndUpdateState(equippedItems, selectedItem.itemIndex, partyMemberItems, itemIndex, setEquippedItems, setPartyMemberItems);
				}
			}
			setSelectedItem({itemIndex: -1, listIndex: -1})
		}
  }

  return (
    <Box>
      <Grid container justifyContent={'center'}>
        <Grid item xs={4}>
          <Box>
            <Typography variant='h6'>Equipped</Typography>
          </Box>
          <EquippedArmour
						items={equippedItems}
						handleItemChange={handleItemChange}
					/>
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
					<Inventory
						handleItemChange={handleItemChange}
						items={partyMemberItems}
					/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PartyTab;
