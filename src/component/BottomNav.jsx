import * as React from 'react';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useNavigate } from 'react-router-dom';

export default function BottomNav() {
    const [value, setValue] = React.useState(0);
    const navTo = useNavigate();

    return (
        <Box sx={{ pb: 7 }}>
            <CssBaseline />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    // showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction sx={{ fontWeight: 'bold' }} label="Home" icon={<HomeOutlinedIcon />} onClick={() => navTo('/')} />
                    <BottomNavigationAction sx={{ fontWeight: 'bold' }} label="Sleep" icon={<BedtimeOutlinedIcon />} onClick={() => navTo('/sleep')} />
                    <BottomNavigationAction sx={{ fontWeight: 'bold' }} label="Meditation" icon={<SpaOutlinedIcon />} onClick={() => navTo('/meditation')} />
                    <BottomNavigationAction sx={{ fontWeight: 'bold' }} label="Relax" icon={<MusicNoteOutlinedIcon />} onClick={() => navTo('/relax')} />
                    <BottomNavigationAction sx={{ fontWeight: 'bold' }} label="Setting" icon={<SettingsOutlinedIcon />} onClick={() => navTo('/setting')} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
