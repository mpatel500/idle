import React, { useEffect, useState } from 'react';
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
  const [value, setValue] = useState(0);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
    }
  }, [isInitialRender])
  
  return (
    <Box sx={{ display: 'flex' }}>
      <Box>
        <Typography variant='h6' sx={{ p: 2, pt: 1 }}>Final Fantasy Idle</Typography>
        <Tabs
          orientation='vertical'
          value={value}
          onChange={(e: React.SyntheticEvent, index: number) => setValue(index)}
        >
          <Tab label='Party' />
          <Tab label='Combat' />
          <Tab label='Placeholder' />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {!isInitialRender && value === 0 && <PartyTab />}
      </TabPanel>
    </Box>
  );
};

export default Sidebar;
