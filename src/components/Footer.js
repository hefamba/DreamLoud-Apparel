import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import './Footer.css';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://hefamba.github.io/DreamLoud_Gaming/">
                DreamLoudEntertainment
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function StickyFooter() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="lg" >
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }} >
                    <Box>
                        <Typography variant="h3">
                            DREAMLOUD GAMING
                        </Typography>
                        <Link className='link' variant='h6'>Partner</Link>
                    </Box>
                    <Box>
                        <Typography variant="h3">
                            FOLLOW US
                        </Typography>
                        <Typography variant="h6">
                            <Link className='link' variant='h6'>@dreamloud</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link className='link' variant='h6'>@dreamloudgaming</Link>
                        </Typography>

                    </Box>
                    <Box>
                        <Typography variant="h3">
                            CONTACT
                        </Typography>
                        <Typography variant='h6'>
                            15587 htown blvd, Houston, Tx
                        </Typography>
                        <Typography variant='h6'>
                            <Link className='link' variant='h6'>dreamloud@dreamloud.org</Link>
                        </Typography>
                        <Typography variant='h6'>
                            <Link className='link' variant='h6'>+01 555 584 1123</Link>
                        </Typography>

                    </Box>


                </Box>
                <Box paddingTop={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Copyright />
                </Box>

            </Container>
        </Box>

    );
}