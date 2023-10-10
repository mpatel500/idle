import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
  >
    {value === index && (
      <Box sx={{p: 3}}>
        {children}
      </Box>
    )}
  </div>
)

const Sidebar = () => {
  // starting at 1 because technically the heading is index 0
  const [value, setValue] = useState(1)

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', p:2}}
    >
      <Tabs
        orientation='vertical'
        value={value}
        onChange={(e: React.SyntheticEvent, index: number) => setValue(index)}
      >
        <Typography variant='h6' sx={{p: 2, pt: 1}}>Final Fantasy Idle</Typography>
        <Tab label='Party' />
        <Tab label='Combat' />
        <Tab label='Placeholder' />
      </Tabs>
      <TabPanel value={value} index={1}>
        <PartyTab />
      </TabPanel>
    </Box>
  )
}

export default Sidebar;
