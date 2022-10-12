import React from "react";
import { Container, Typography } from "@mui/material";

export default function Page404() {
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh',
                background: 'black',
                width: '100%'
            }}
        >

            <Typography
                variant='h3'
                sx={{
                    color: 'white',
                    marginTop: 2,
                    marginBottom: 2
                }}
            >
                Error 404
            </Typography>

            <Typography
                variant='subtitle1'
                sx={{
                    color: 'white',
                    marginTop: 2,
                    marginBottom: 2,
                    justifyContent: 'start'
                }}
            >
                The resource requested could not be found on this server.
            </Typography>

        </Container>
    );
}