import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

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

const Melodies = () => {
    const [value, setValue] = React.useState(0);
    const [data, setData] = React.useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const navTo = useNavigate();

    const [volume, setVolume] = React.useState({ value1: 50, value2: 50 });
    const [musicPlay, setMusicPlay] = React.useState(0);

    const handleVolume = (id, value) => {
        if (id === 'value1') {
            setVolume({ ...volume, value1: value });
        }
        if (id === 'value2') {
            setVolume({ ...volume, value2: value });
        }
    };

    const melodies = ["Birds", "Wind", "Rain", "Tornado", "Lake", "Ocean", "Snow", "Hazzard", "Waterfall", "Forest", "Night", "Sand", "Nature", "Relax"];

    useEffect(() => {
        handleVolume();
        setData(melodies.map((ele, index) => {
            return {
                id: index,
                title: ele,
                audio: new Audio(`https://breathlly.netlify.app/assets/Melodies/${ele}.mp3`),
                isPlaying: false
            };
        }))
    }, [volume])

    const playMelodies = (id) => {
        let music = data.find(ele => ele.id === id);
        if (musicPlay < 2 && music.isPlaying === false) {
            setMusicPlay(musicPlay + 1);
            setData([...data], data[id].isPlaying = true);
            return music.audio.play();
        }

        if (musicPlay > 0 && music.isPlaying === true) {
            setMusicPlay(musicPlay - 1);
            setData([...data], data[id].isPlaying = false);
            return music.audio.pause();
        }
    }

    return (
        <>
            <Box variant='main' mt='-30px'>
                <Box mt='40px'>
                    <Box display='flex' alignItems='center' justifyContent='space-between' color='#00008B' mb='10px'>
                        <ArrowBackIosNewOutlinedIcon sx={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => navTo('/')} />
                        <Typography variant='h6' sx={{ fontWeight: 'bolder' }}>Melodies</Typography>
                        <AccessAlarmOutlinedIcon />
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Box>
                            <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example" >
                                <Tab label="All" {...a11yProps(0)} sx={{ mx: { xs: '0px', sm: '0px', md: '50px' }, fontWeight: 'bold' }} />
                                <Tab label="Natural" {...a11yProps(1)} sx={{ mx: { xs: '0px', sm: '0px', md: '50px' }, fontWeight: 'bold' }} />
                                <Tab label="Musical" {...a11yProps(2)} sx={{ mx: { xs: '0px', sm: '0px', md: '50px' }, fontWeight: 'bold' }} />
                                <Tab label="Category" {...a11yProps(3)} sx={{ mx: { xs: '0px', sm: '0px', md: '50px' }, fontWeight: 'bold' }} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', background: 'linear-gradient(1.8deg,rgba(0,116,117,1) 50.2%,rgba(232,232,232,1) 100%)', p: '20px', mb: '-23px' }}>
                                {
                                    data.map((item) => {
                                        return (
                                            <Box key={item.id} border='1px solid #fff' borderRadius='50%' m='20px' width='110px' height='110px' display='flex' alignItems='center' justifyContent='center' sx={{ cursor: 'pointer', fontWeight: 'bold' }} className={item.isPlaying ? 'isPlaying' : ''} onClick={() => playMelodies(item.id)}>
                                                <Typography>{item.title}</Typography>
                                            </Box>
                                        )
                                    })
                                }
                                <br />
                                <div style={{ marginTop: '100px', width: '100%', display: 'block' }}>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            style={{ fontWeight: "bold", fontSize: '10px', borderBottom: '1px solid' }}
                                        >
                                            <Typography margin='auto' fontWeight='bolder' fontSize='20px'>Mixer</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Box display={{ xs: '', sm: 'flex' }} justifyContent='space-evenly' paddingTop='15px'>
                                                <Box sx={{ width: 300 }}>
                                                    <Typography textAlign={{ xs: '', sm: 'center' }}>Sound 1</Typography>
                                                    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                                                        <VolumeDown />
                                                        <Slider aria-label="Volume" value={volume.value1} onChange={(e) => handleVolume('value1', e.target.value)} />
                                                        <VolumeUp />
                                                    </Stack>
                                                </Box>
                                                <Box sx={{ width: 300 }}>
                                                    <Typography textAlign={{ xs: '', sm: 'center' }}>Sound 2</Typography>
                                                    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                                                        <VolumeDown />
                                                        <Slider aria-label="Volume" min={0} max={100} value={volume.value2} onChange={(e) => handleVolume('value2', e.target.value)} />
                                                        <VolumeUp />
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Natural
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
        </>
    )
}

export default Melodies
