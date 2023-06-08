import React from "react";
import Logo from '../images/logo.png'
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const LogSign = () => {
    const navTo = useNavigate();

    const location = useLocation();
    const showSignUp = location.pathname === "/signup";

    const FBlogo = "https://breathlly.netlify.app/assets/facebbok.png";
    const Googlelogo = "https://breathlly.netlify.app/assets/google.png";
    return (
        <>
            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' p='10px'>
                <Box border='2px solid blue' width='60px' height='60px' borderRadius='50%' display='flex' alignItems='center' justifyContent='center' m='5px'>
                    <img src={Logo} alt="logo" style={{ width: '45px', height: '45px', borderRadius: '50%' }} />
                </Box>
                <Typography
                    component="h1"
                    style={{ fontSize: "1.5rem", fontWeight: "bolder" }}
                >
                    Welcome Back!
                </Typography>
                <Box style={{ display: "flex", flexDirection: "column" }}>
                    <Button variant="contained" style={{ margin: 8, borderRadius: "25px" }}>
                        <img
                            src={FBlogo}
                            alt="fb"
                            style={{ height: "30px", marginRight: 15 }}
                        />{" "}
                        Continue With Facebook
                    </Button>
                    <Button variant="outlined" style={{ margin: 8, borderRadius: "25px" }}>
                        <img
                            src={Googlelogo}
                            alt="google"
                            style={{ height: "30px", marginRight: 15 }}
                        />
                        Continue With Google
                    </Button>
                </Box>
                <Box>
                    <Typography variant="h6" style={{
                        fontSize: '.8rem', lineHeight: '1.5',
                        letterSpacing: '0.00938em', fontWeight: 'bolder', color: 'gray',
                        margin: '5px'
                    }}>OR LOG IN WITH EMAIL</Typography>
                </Box>
                <Box style={{ display: "flex", flexDirection: "column" }}>
                    {showSignUp && <TextField
                        id="outlined-basic"
                        label="Name *"
                        variant="outlined"
                        style={{ margin: 5, width: "300px" }}
                    />}
                    <TextField
                        id="outlined-basic"
                        label="Email Address *"
                        variant="outlined"
                        style={{ margin: 5, width: "300px" }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password *"
                        variant="outlined"
                        style={{ margin: 5, width: "300px" }}
                    />
                </Box>
                <Box>
                    <Button variant="contained" style={{ margin: 5, width: "150px", borderRadius: "25px", padding: 8 }}>{showSignUp ? 'Sign Up' : 'Login'}</Button>
                </Box>
                {!showSignUp && <Link style={{ margin: 5, fontSize: '12px', fontWeight: 'bold', textDecoration: 'none', cursor: 'pointer' }}>Forgot Password</Link>}
                <Box style={{ margin: 5, fontSize: '12px', fontWeight: 'bold' }}>
                    {showSignUp ? 'Already a user?' : 'New user?'}  <Link style={{ textDecoration: 'none', cursor: 'pointer' }} onClick={() => navTo(showSignUp ? '/login' : '/signup')}>{showSignUp ? 'Login' : 'Sign Up'}</Link>
                </Box>
            </Box>
        </>
    );
};

export default LogSign;