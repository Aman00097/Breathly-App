import React from 'react'
import { Box, Typography } from '@mui/material';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LoginIcon from '@mui/icons-material/Login';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const navTo = useNavigate();
    const label = { inputProps: { 'aria-label': 'Size switch demo' } };
    return (
        <Box px='40px' py='20px'>
            <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='20px' marginLeft='-20px'>
                <ChevronLeftOutlinedIcon sx={{ cursor: 'pointer', color: '#666666', fontWeight: 'bold' }} onClick={() => navTo('/setting')} />
                <Typography sx={{ cursor: 'pointer', color: '#666666', fontWeight: 'bold', width: '92%' }}>Account</Typography>
            </Box>

            <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='20px'>
                <PersonOutlineOutlinedIcon sx={{ boxShadow: '0 0 10px #ccc', borderRadius: '50%', width: '30px', height: '30px', padding: '3px', cursor: 'pointer', color: '#0288d1', marginRight: '10px' }} />
                <Typography sx={{ width: { xs: '73%', sm: '86%' }, cursor: 'pointer' }}>Your Name</Typography>
                <Typography sx={{ width: { xs: '5%', sm: '2%' }, color: 'gray', fontSize: '12px' }}>XYZ</Typography>
                <ChevronRightOutlinedIcon sx={{ cursor: 'pointer', color: '#666666', fontWeight: 'bold' }} />
            </Box>

            <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='20px'>
                <LoginIcon sx={{ boxShadow: '0 0 10px #ccc', borderRadius: '50%', width: '30px', height: '30px', padding: '3px', cursor: 'pointer', color: '#0288d1', marginRight: '10px' }} />
                <Typography sx={{ width: { xs: '58%', sm: '80%' }, cursor: 'pointer' }}>You'r signed in as</Typography>
                <Typography sx={{ width: { xs: '20%', sm: '8%' }, cursor: 'pointer', fontSize: '12px', bgcolor: 'red', color: '#fff', borderRadius: '10px', textAlign: 'center' }}>Unvarified</Typography>
                <ChevronRightOutlinedIcon sx={{ cursor: 'pointer', color: '#666666', fontWeight: 'bold' }} />
            </Box>

            <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='20px'>
                <LockOpenOutlinedIcon sx={{ boxShadow: '0 0 10px #ccc', borderRadius: '50%', width: '30px', height: '30px', padding: '3px', cursor: 'pointer', color: '#0288d1', marginRight: '10px' }} />
                <Typography sx={{ width: { xs: '80%', sm: '90%' }, cursor: 'pointer' }}>Change your password</Typography>
                <ChevronRightOutlinedIcon sx={{ cursor: 'pointer', color: '#666666', fontWeight: 'bold' }} />
            </Box>

            <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='20px'>
                <SyncOutlinedIcon sx={{ boxShadow: '0 0 10px #ccc', borderRadius: '50%', width: '30px', height: '30px', padding: '3px', cursor: 'pointer', color: '#0288d1', marginRight: '10px' }} />
                <Typography sx={{ width: { xs: '80%', sm: '90%' }, cursor: 'pointer', marginLeft: { xs: '1.50%' } }}>Sync with Google Fit</Typography>
                <Switch {...label} defaultChecked size="small" />
            </Box>
        </Box>
    )
}

export default Account;
