import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import data from './data';
import { Box, Typography } from '@mui/material';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MusicComp = () => {
    const { songId } = useParams();
    const [song, setSong] = useState();

    useEffect(() => {
        setSong(data.find((elem) => elem.id == songId))
    }, [songId]);

    return (
        song && <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' padding='20px' sx={{ background: 'linear-gradient(64.3deg,rgba(254,122,152,.81) 17.7%,rgba(255,206,134,1) 64.7%,rgba(172,253,163,.64) 112.1%);' }}>
            <Typography variant='h6' display='flex' alignItems='center' marginBottom='20px' color='#00008b' fontWeight='bolder' fontSize='24px'><SelfImprovementIcon sx={{ fontSize: '35px' }} />{song.title}</Typography>
            <img src={song.img} alt={`img${songId}`} className='songImg' style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '20px' }} />
            <Typography variant='h5' color='#000'>Live From Space</Typography>
            <Typography variant='h6' fontSize='14px' mb='20px'>Mr XYZ</Typography>
            <audio src={song.audio[0]} controls style={{ marginBottom: '20px' }}></audio>
            <audio src={song.audio[1]} controls style={{ marginBottom: '20px' }}></audio>
            <audio src={song.audio[2]} controls style={{ marginBottom: '20px' }}></audio>
            <Box width='300px' display='flex' justifyContent='space-evenly'>
                <FavoriteBorderIcon /><PlaylistAddIcon /><AccessAlarmIcon /><MoreVertIcon />
            </Box>
        </Box>
    )
}

export default MusicComp;