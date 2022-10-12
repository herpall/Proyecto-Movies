import React from 'react';
import { Container, Grid, Box, Link } from '@mui/material';
import { Padding } from '@mui/icons-material';

export default function Footer() {
    return (
        <Box
            px={{ xs: 3, sm: 3 }}
            py={{ xs: 4, sm: 4 }}
            sx={{ background: 'linear-gradient(94.43deg, #8C54FB -19.98%, #CE4F51 113.48%)' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4} >
                        <Box borderBottom={2} sx={{ color: 'white' }}>
                            Account
                        </Box>
                        <Box>
                            <Link href="" sx={{ color: "white" }}>
                                Login
                            </Link>
                        </Box>
                        <Box>
                            <Link href="" sx={{ color: "white" }}>
                                Register
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Box borderBottom={2} sx={{ color: "white" }}>
                            Privacity
                        </Box>
                        <Box>
                            <Link href="" sx={{ color: "white" }}>
                                Support
                            </Link>
                        </Box>
                        <Box>
                            <Link href="" sx={{ color: "white" }}>
                                Term and conditions
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Box borderBottom={2} sx={{ color: "white" }}>
                            Movies and Series
                        </Box>
                        <Box>
                            <Link href="" sx={{ color: "white" }}>
                                Movies
                            </Link>
                        </Box>
                        <Box>
                            <Link href="" sx={{ color: "white" }}>
                                Series
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};