import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';

import EquippedArmour from '../EquippedArmour';

const PartyTab = ({ items }: { items: number[] }) => {
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
					<InventoryRow id={1} items={items}/>
        </Grid>
      </Grid>
    </Box>
  );
};

const InventoryRow = ({ id, items }: { id: number, items: number[] }) => {
	return (
		<Droppable droppableId={`grid-${id}`} direction="horizontal">
			{(provided) => (
				<Grid
					container
					spacing={2}
					ref={provided.innerRef}
					{...provided.droppableProps}
					justifyContent='center'
				>
					{items.map((item, index) => (
						<Draggable
							key={item.toString()}
							draggableId={item.toString()}
							index={index}
						>
							{(provided, snapshot) => (
								<Grid
									item
									xs={1}
									ref={provided.innerRef}
									{...provided.draggableProps}
									{...provided.dragHandleProps}
									style={{
										background: snapshot.isDragging ? 'grey' : 'lightgrey',
										...provided.draggableProps.style,
									}}
								>
									<Box
										component='img'
										src={`https://placekitten.com/50/50?image=${item}`} 
										alt={`item-${item.toString()}`}
									/>
								</Grid>
							)}
						</Draggable>
					))}
					{provided.placeholder}
				</Grid>
			)}
		</Droppable>
	)
};

export default PartyTab;
