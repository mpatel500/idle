import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DragDropContext } from 'react-beautiful-dnd';

import PartyTab from '../PartyTab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({children, index, value}: TabPanelProps) => (
  <div
  role='tabpanel'
  id={`tabpanel-${index}`}
  style={{width: '100%'}}
  >
    {value === index && (
      <Box sx={{p: 3}}>
        {children}
      </Box>
    )}
  </div>
)

const Sidebar = () => {
  // starting at 1 because the heading is index 0
  const [value, setValue] = useState(1);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [partyMemberItems, setPartyMemberItems] = useState(
    [0, 1, 2, 3, 4, 5, 6, 7, 8]
  );

  function onDragEnd(result: any) {
    console.log('onDragEnd');
    if (!result.destination) {
      return;
    }
  
    const newItems = Array.from(partyMemberItems);
    const [movedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, movedItem);
  
    setPartyMemberItems(newItems);
  }

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
    }
  }, [isInitialRender])
  
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', p: 2 }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Tabs
          orientation='vertical'
          value={value}
          onChange={(e: React.SyntheticEvent, index: number) => setValue(index)}
        >
          <Typography variant='h6' sx={{ p: 2, pt: 1 }}>Final Fantasy Idle</Typography>
          <Tab label='Party' />
          <Tab label='Combat' />
          <Tab label='Placeholder' />
        </Tabs>
        <TabPanel value={value} index={1}>
          {!isInitialRender && value === 1 && <PartyTab items={partyMemberItems}/>}
        </TabPanel>
      </DragDropContext>
    </Box>
  );
};

export default Sidebar;
