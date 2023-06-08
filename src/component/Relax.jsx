import React from 'react'
import Footer from './Footer'
import SongComp from './SongComp';
import { Box, Button, Typography } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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
                <Box sx={{ py: 3 }}>
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

const Relax = () => {
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
                        <Typography variant='h6' sx={{ fontWeight: 'bolder' }}>Relax</Typography>
                        <AccessAlarmOutlinedIcon />
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Box>
                            <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example" >
                                <Tab label="All" {...a11yProps(0)} sx={{ mx: { xs: '0px', sm: '0px', md: '50px' }, fontWeight: 'bold' }} />
                                <Tab label="Favorite" {...a11yProps(1)} sx={{ mx: { xs: '0px', sm: '0px', md: '50px' }, fontWeight: 'bold' }} />
                                <Tab label="Beginners" {...a11yProps(2)} sx={{ mx: { xs: '0px', sm: '0px', md: '50px' }, fontWeight: 'bold' }} />
                                <Tab label="Self-Calm" {...a11yProps(3)} sx={{ mx: { xs: '0px', sm: '0px', md: '50px' }, fontWeight: 'bold' }} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Button variant="contained" sx={{ m: 'auto', width: '50%', mb: '20px', display: 'flex' }} onClick={() => navTo('/melodies')}>MELODIES</Button>
                            <SongComp />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Favorite
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Beginners
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            Self-Calm
                        </TabPanel>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Relax;
