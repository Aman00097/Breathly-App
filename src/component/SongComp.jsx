import React from 'react'
import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import data from './data';
import { useNavigate } from 'react-router-dom';

const SongComp = () => {
    return (
        <Box display='flex' alignItems='center' justifyContent='space-evenly' flexWrap='wrap'>
            {
                data.map((item) => <SongCard key={item.id} item={item} />)
            }
        </Box>
    )
}

export default SongComp;

export function SongCard({ item }) {
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
