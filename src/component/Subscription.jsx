import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Subscription() {
    const navTo = useNavigate();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    <Tab label="Community" {...a11yProps(0)} />
                    <Tab label="Pro" {...a11yProps(1)} />
                    <Tab label="Premium" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                    <Typography variant='h6' mb='10px' fontSize='12px'>Get started with community. Enjoy free meditation at zero cost.</Typography>
                    <Typography variant='h5' color='green' mb='20px' fontWeight='bold'>$0 - <span style={{ fontSize: '12px' }}>Free forever</span></Typography>
                    <Button variant='contained' onClick={() => navTo('/')}>EXPLORE NOW</Button>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                    <Typography variant='h6' mb='10px' fontSize='12px'>Get started with breathly pro and enjoy lots of more features of meditation.</Typography>
                    <Typography variant='h5' color='blue' mb='20px' fontWeight='bold'>$15 <span style={{ fontSize: '12px' }}>/ month</span></Typography>
                    <Button variant='contained'>BUY PRO</Button>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                    <Typography variant='h6' mb='10px' fontSize='12px' textAlign='center'>Get started with breathly premium & enjoy the most advanced features of meditation, as well as the highest priority for support.</Typography>
                    <Typography variant='h5' color='blue' mb='20px' fontWeight='bold'>$25 <span style={{ fontSize: '12px' }}>/ month</span></Typography>
                    <Button variant='contained'>BUY PREMIUM</Button>
                </Box>
            </TabPanel>
        </Box>
    );
}