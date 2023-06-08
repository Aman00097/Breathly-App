import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box variant='footer' className='footer' padding='20px' mx='10px' mb='10px'>
            <Box display='flex' flexWrap='wrap' justifyContent='space-evenly' width='100%' pb='15px' borderBottom='1px solid #aaa'>
                <Feature />
            </Box>
            <Box pt='20px'>
                <Typography variant='h6' mb='15px' fontSize='16px'>© 2023 Breathings. All Rights Reserved!</Typography>
                <Typography variant='h6' fontSize='12px' align='center' >
                    <span>Privacy Policy</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>Cookie Policy</span>
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer

const Feature = () => {
    const feature = [
        {
            title: 'Daily Meditation',
            data: ['Sleep', 'Relax', 'Calm', 'Mental Health']
        },
        {
            title: 'Sleep Meditation',
            data: ['Peaceful Sleep', 'Gratitude sleep', 'Night Gratitude', 'Deep Sleep']
        },
        {
            title: 'Relax Meditation',
            data: ['Sleep Relaxation', 'Mental Relax', 'Nature Relax', 'Sky Walk']
        },
        {
            title: 'Calm Meditation',
            data: ['Mental Health', 'Mind Therapy', 'Heaven', 'Mentally Relax']
        }
    ];
    return (
        <>
            {
                feature.map((element, index) => {
                    return <Box key={index} sx={{ width: { xs: '200px', sm: '250px' },mb:{xs:'20px'} }}>
                        <Typography mb='10px' pb='10px' borderBottom='1px solid #aaa'> <strong>{element.title}</strong></Typography>
                        {
                            element.data.map((item, index) => {
                                return <Typography key={index} display='flex' flexDirection='column' mb='10px' >{item}</Typography>
                            })
                        }
                    </Box>
                })
            }
        </>
    );
}