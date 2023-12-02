import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import useInventoryStore from '../hooks/useInventoryStore';
import useEquippedItems from '../hooks/useEquippedItems';

import EquippedArmour from '../EquippedArmour';
import Inventory from './Inventory';
import { Button } from '@mui/material';

const swapWithinListAndUpdateState = (
	listOne: any[],
	indexOne: number,
	indexTwo: number,
	setState: (newItems: number[]) => void,
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
	setState1: (newItems: number[]) => void,
	setState2: (newItems: number[]) => void,
): void => {
	const temp = listTwo[indexTwo];
	listTwo[indexTwo] = listOne[indexOne];
	listOne[indexOne] = temp;
	setState1(listOne);
	setState2(listTwo);
}

const PartyTab = () => {
	const [selectedItem, setSelectedItem] = useState({
		itemIndex: -1,
		listIndex: -1
	});

  const { items: inventoryItems, add, setNew: setNewInventory } = useInventoryStore((state) => state);
  const { items: equippedItems, setNew: setNewEquippedItems } = useEquippedItems((state) => state);

	const handleItemChange = (itemIndex: number, listIndex: number) => {
		if (selectedItem.itemIndex === -1) {
			setSelectedItem({ itemIndex, listIndex })
		}
		else {
			if (selectedItem.listIndex === listIndex) {
				if (listIndex === 1) {
					swapWithinListAndUpdateState(equippedItems, itemIndex, selectedItem.itemIndex, setNewEquippedItems);
				} else if (listIndex === 2) {
					swapWithinListAndUpdateState(inventoryItems, itemIndex, selectedItem.itemIndex, setNewInventory);
				}
			} else {
        if (listIndex === 1) {
					swapBetweenListsAndUpdateState(equippedItems, itemIndex, inventoryItems, selectedItem.itemIndex, setNewEquippedItems, setNewInventory);
        } else if (listIndex === 2) {
					swapBetweenListsAndUpdateState(equippedItems, selectedItem.itemIndex, inventoryItems, itemIndex, setNewEquippedItems, setNewInventory);
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
						<Button onClick={() => add(2)}>Add 2</Button>
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
						items={inventoryItems}
					/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PartyTab;
