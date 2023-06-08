import React from 'react'
import Logo from '../images/logo.png';
import Relax from '../images/relax5.webp';
import { Box, Link, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navTo = useNavigate();
    return (
        <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' bgcolor='#b4cde6' padding='30px' height='100vh'>
            <Box border='2px solid blue' width='60px' height='60px' borderRadius='50%' display='flex' alignItems='center' justifyContent='center' mb='20px'>
                <img src={Logo} alt="logo" style={{ width: '45px', height: '45px', borderRadius: '50%' }} />
            </Box>
            <img src={Relax} alt="" style={{ width: '200px', borderRadius: '50%', marginBottom: '10px' }} />
            <Typography variant='h4' fontWeight='bold' mb='10px'>Breathings</Typography>
            <Typography variant='h6' mb='15px' fontSize='16px'>Mindful Breathing app</Typography>
            <Button variant='contained' sx={{ borderRadius: '50px', width: '250px', fontSize: '18px', fontWeight: 'bold' }} onClick={() => navTo('/signup')}><Link color='#fff' underline='none'>SIGN UP</Link></Button>
            <Box display='flex' alignItems='center' justifyContent='space-between' width='250px' mt='20px'>
                <Typography variant='h6' fontSize='16px'>Already have an account?</Typography>
                <Link sx={{ cursor: 'pointer', fontWeight: 'bolder' }} onClick={() => navTo('/login')}>LOG IN</Link>
            </Box>
        </Box>
    )
}

export default Logout;
