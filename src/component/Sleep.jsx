import React from 'react'
import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import sleepData from './sleepData';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';

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

const Sleep = () => {
    const navTo = useNavigate();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <Box variant='main' mt='-30px'>
            <Box mt='40px' >
                <Box display='flex' alignItems='center' justifyContent='space-between' color='#00008B' mb='10px' mx='10px'>
                    <ArrowBackIosNewOutlinedIcon sx={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => navTo('/')} />
                    <Typography variant='h6' sx={{ fontWeight: 'bolder' }}>Sleep</Typography>
                    <AccessAlarmOutlinedIcon />
                </Box>
                <Box>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab label="All" {...a11yProps(0)} />
                        <Tab label="MyFavorite" {...a11yProps(1)} />
                        <Tab label="Stories" {...a11yProps(2)} />
                        <Tab label="Music" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Box display='flex' alignItems='center' sx={{ justifyContent: { xs: 'center', sm: 'center' } }} flexWrap='wrap' mb='10px' m='-15px'>
                        {
                            sleepData.map((item) => <SleepCard key={item.id} item={item} />)
                        }
                    </Box>
                    <Footer />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Myfav works!
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Stories Works!
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Music Works!
                </TabPanel>
            </Box>
        </Box>
    )
}

export default Sleep;

export function SleepCard({ item }) {
    const navTo = useNavigate();

    return <Card sx={{ maxWidth: 400, width: { xs: 400, sm: 300 }, m: '5px', cursor: 'pointer' }} onClick={() => navTo(`/song/${item.id}`)} >
        <CardMedia
            sx={{ height: 140 }}
            image={item.img}
        />
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">{item.title}</Typography>
            <Typography variant="body2" color="text.secondary">William Parker</Typography>
        </CardContent>
    </Card>
}
