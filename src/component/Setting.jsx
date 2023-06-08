import React from 'react'
import { Box, Typography } from '@mui/material';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import DoNotDisturbOutlinedIcon from '@mui/icons-material/DoNotDisturbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';

const Setting = () => {
    const navTo = useNavigate();
    const label = { inputProps: { 'aria-label': 'Size switch demo' } };
    return (
        <Box px='40px' py='20px'>
            <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='20px' marginLeft='-20px'>
                <ChevronLeftOutlinedIcon sx={{ cursor: 'pointer', color: '#666666', fontWeight: 'bold' }} onClick={() => navTo('/')} />
                <Typography sx={{ cursor: 'pointer', color: '#666666', fontWeight: 'bold', width: '92%' }}>Settings</Typography>
            </Box>

            <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='20px' onClick={() => navTo('/account')}>
                <PersonOutlineOutlinedIcon sx={{ boxShadow: '0 0 10px #ccc', borderRadius: '50%', width: '30px', height: '30px', padding: '3px', cursor: 'pointer', color: '#0288d1', marginRight: '10px' }} />
                <Typography sx={{ width: { xs: '80%', sm: '90%' }, cursor: 'pointer' }}>Account</Typography>
                <ChevronRightOutlinedIcon sx={{ cursor: 'pointer', color: '#666666', fontWeight: 'bold' }} />
            </Box>

            <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='20px' onClick={() => navTo('/subscription')}>
                <SubscriptionsOutlinedIcon sx={{ boxShadow: '0 0 10px #ccc', borderRadius: '50%', width: '30px', height: '30px', padding: '3px', cursor: 'pointer', color: '#0288d1', marginRight: '10px' }} />
                <Typography sx={{ width: { xs: '80%', sm: '90%' }, cursor: 'pointer' }}>Manage Subscription</Typography>
                <ChevronRightOutlinedIcon sx={{ cursor: 'pointer', color: '#666666', fontWeight: 'bold' }} />
            </Box>

            <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='20px'>
                <DateRangeOutlinedIcon sx={{ boxShadow: '0 0 10px #ccc', borderRadius: '50%', width: '30px', height: '30px', padding: '3px', cursor: 'pointer', color: '#0288d1', marginRight: '10px' }} />
                <Typography sx={{ width: { xs: '80%', sm: '90%' }, cursor: 'pointer' }}>Reminders</Typography>
                <ChevronRightOutlinedIcon sx={{ cursor: 'pointer', color: '#666666', fontWeight: 'bold' }} />
            </Box>

            <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='20px'>
                <DownloadOutlinedIcon sx={{ boxShadow: '0 0 10px #ccc', borderRadius: '50%', width: '30px', height: '30px', padding: '3px', cursor: 'pointer', color: '#0288d1', marginRight: '10px' }} />
                <Typography sx={{ width: { xs: '80%', sm: '90%' }, cursor: 'pointer', marginLeft: { xs: '1.50%' } }}>Download over cellular</Typography>
                <Switch {...label} defaultChecked size="small" />
            </Box>

            <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='20px'>
                <BedtimeOutlinedIcon sx={{ boxShadow: '0 0 10px #ccc', borderRadius: '50%', width: '30px', height: '30px', padding: '3px', cursor: 'pointer', color: '#0288d1', marginRight: '10px' }} />
                <Typography sx={{ width: { xs: '80%', sm: '90%' }, cursor: 'pointer', marginLeft: { xs: '1.50%' } }}>Enable Dark Mode</Typography>
                <Switch {...label} size="small" />
            </Box>

            <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='20px'>
                <DoNotDisturbOutlinedIcon sx={{ boxShadow: '0 0 10px #ccc', borderRadius: '50%', width: '30px', height: '30px', padding: '3px', cursor: 'pointer', color: '#0288d1', marginRight: '10px' }} />
                <Typography sx={{ width: { xs: '80%', sm: '90%' }, cursor: 'pointer', marginLeft: { xs: '1.50%' } }}>Do not disturb</Typography>
                <Switch {...label} size="small" />
            </Box>

            <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='20px'>
                <NotificationsNoneOutlinedIcon sx={{ boxShadow: '0 0 10px #ccc', borderRadius: '50%', width: '30px', height: '30px', padding: '3px', cursor: 'pointer', color: '#0288d1', marginRight: '10px' }} />
                <Typography sx={{ width: { xs: '80%', sm: '90%' }, cursor: 'pointer', marginLeft: { xs: '1.50%' } }}>Push Notification</Typography>
                <Switch {...label} size="small" />
            </Box>

            <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='20px'>
                <SupportAgentOutlinedIcon sx={{ boxShadow: '0 0 10px #ccc', borderRadius: '50%', width: '30px', height: '30px', padding: '3px', cursor: 'pointer', color: '#0288d1', marginRight: '10px' }} />
                <Typography sx={{ width: { xs: '80%', sm: '90%' }, cursor: 'pointer' }}>Support</Typography>
                <ChevronRightOutlinedIcon sx={{ cursor: 'pointer', color: '#666666', fontWeight: 'bold' }} />
            </Box>

            <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='20px'>
                <InfoOutlinedIcon sx={{ boxShadow: '0 0 10px #ccc', borderRadius: '50%', width: '30px', height: '30px', padding: '3px', cursor: 'pointer', color: '#0288d1', marginRight: '10px' }} />
                <Typography sx={{ width: { xs: '80%', sm: '90%' }, cursor: 'pointer' }}>About</Typography>
                <ChevronRightOutlinedIcon sx={{ cursor: 'pointer', color: '#666666', fontWeight: 'bold' }} />
            </Box>

            <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='20px'>
                <LockOpenOutlinedIcon sx={{ boxShadow: '0 0 10px #ccc', borderRadius: '50%', width: '30px', height: '30px', padding: '3px', cursor: 'pointer', color: '#0288d1', marginRight: '10px' }} />
                <Typography sx={{ width: { xs: '80%', sm: '90%' }, cursor: 'pointer' }}>Privacy Policy</Typography>
                <ChevronRightOutlinedIcon sx={{ cursor: 'pointer', color: '#666666', fontWeight: 'bold' }} />
            </Box>

            <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom='20px'>
                <GavelOutlinedIcon sx={{ boxShadow: '0 0 10px #ccc', borderRadius: '50%', width: '30px', height: '30px', padding: '3px', cursor: 'pointer', color: '#0288d1', marginRight: '10px' }} />
                <Typography sx={{ width: { xs: '80%', sm: '90%' }, cursor: 'pointer' }}>Terms & Conditions</Typography>
                <ChevronRightOutlinedIcon sx={{ cursor: 'pointer', color: '#666666', fontWeight: 'bold' }} />
            </Box>

            <Box display='flex' alignItems='center' justifyContent='center'>
                <Typography color='#0288d1' fontSize='12px'>Version 1.0</Typography>
            </Box>
        </Box>
    )
}

export default Setting;
