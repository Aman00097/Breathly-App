import { Button, Typography, Box } from '@mui/material';
import React from 'react'

const Welcome = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date();
    const day = days[d.getDay()].toUpperCase();
    const date = d.getDate();
    const month = d.toString().slice(4, 7);
    const hour = d.toTimeString().slice(0, 2) > 12 ? d.toTimeString().slice(0, 2) - 12 : d.toTimeString().slice(0, 2);
    const time = `${hour}:${d.toTimeString().slice(3, 5)} ${d.getHours() > 11 ? 'PM' : 'AM'}`;

    let great;
    if (d.getHours() > 11 && d.getHours() < 16) great = 'Afternoon';
    else if (d.getHours() > 15 && d.getHours() < 20) great = 'Evening';
    else if (d.getHours() >= 20 && d.getHours() < 4) great = 'Night';
    else great = 'Morning';

    return (
        <Box variant='section' id="welcome">
            <Box variant='div' className='dateInfo'>
                <Typography variant='h1'>Good {great}, Dear</Typography>
                <Box variant='div'>
                    <Button variant="outlined" sx={{ mb: 1 }}>{day}, {date} {month}</Button><br />
                    <Button variant="outlined">{time}</Button>
                </Box>
            </Box>
            <Box variant='div' className="welcome_img">
                <img src="./src/images/welcome.jpeg" alt="" />
            </Box>
        </Box>
    )
}

export default Welcome;
