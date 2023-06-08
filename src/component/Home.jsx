import React from 'react'
import Footer from './Footer'
import Welcome from './Welcome'
import SongComp from './SongComp'
import { Box, Typography } from '@mui/material';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';

const Home = () => {
    return (
        <>
            <Welcome />
            <Box variant='main' mx='10px'>
                <Box display='flex' color='#00008B' borderBottom='1px solid #aaa' pb='10px' mb='20px' >
                    <SpaOutlinedIcon sx={{ marginRight: '5px' }} />
                    <Typography variant='h6' sx={{ fontWeight: 'bolder' }}>Meditation</Typography>
                </Box>
                <SongComp />
            </Box>
            <Footer />
        </>
    )
}

export default Home
