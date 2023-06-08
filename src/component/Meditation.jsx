import React from 'react'
import Footer from './Footer'
import SongComp from './SongComp';
import { Box, Typography } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { unstable_HistoryRouter, useNavigate } from 'react-router-dom';

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
                <Box>
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

const Meditation = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navTo = useNavigate();

    return (
        <>
            <Box variant='main' mx='10px'>
                <Box borderBottom='1px solid #aaa' pb='10px' mb='20px' mt='10px'  >
                    <Box display='flex' alignItems='center' justifyContent='space-between' color='#00008B' mb='10px'>
                        <ArrowBackIosNewOutlinedIcon sx={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => navTo('/')} />
                        <Typography variant='h6' sx={{ fontWeight: 'bolder' }}>Meditation</Typography>
                        <AccessAlarmOutlinedIcon />
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Box>
                            <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example" >
                                <Tab label="All" {...a11yProps(0)} sx={{ mx: { xs: '0px', sm: '0px', md: '50px' }, fontWeight: 'bold' }} />
                                <Tab label="Nature" {...a11yProps(1)} sx={{ mx: { xs: '0px', sm: '0px', md: '50px' }, fontWeight: 'bold' }} />
                                <Tab label="Musical" {...a11yProps(2)} sx={{ mx: { xs: '0px', sm: '0px', md: '50px' }, fontWeight: 'bold' }} />
                                <Tab label="Category" {...a11yProps(3)} sx={{ mx: { xs: '0px', sm: '0px', md: '50px' }, fontWeight: 'bold' }} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Box mt='20px'><SongComp /></Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Nature
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Musical
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            Category
                        </TabPanel>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Meditation;
