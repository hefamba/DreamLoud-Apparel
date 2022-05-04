import React from 'react';
import Paper from '@mui/material/Paper';
import ControlledCarousel from '../components/ControlledCarousel';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { Divider, Typography } from '@mui/material';
import HoodieBlue from '../assets/hoodie_blue.jpg';
import TeePink from '../assets/tee_pink.jpg';
import SweatPantsY from '../assets/sweatpants_pocketyellow.jpg';
import HoodiePocketP from '../assets/hoodie_pocketpurple.jpg';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';

function HomePage() {
    return (
        <>
            
            <ControlledCarousel />
            <Box padding={2}>
                <Typography variant='h2'>
                    Featured Items
                </Typography>
            </Box>

            <Divider />

            <Box paddingY={5}>
                <Grid container spacing={2} >
                    <Grid item xs={3}>
                        <Paper variant="outlined" >
                            <img src={HoodieBlue} style={{ width: '100%', height: '35rem' }}></img>
                            <Box padding={1}>
                                <Typography variant='h4' component='h2'>
                                    Advance Hoodie Blue
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }} paddingTop={1}>
                                    <Rating name="read-only" value={4.5} precision={0.5} readOnly size='large' />
                                    <Typography variant='h5' component='p' marginLeft={0.5}>
                                        4.5
                                    </Typography>
                                    <Typography variant='body1' component='p' marginLeft={1.5}>
                                        (562 reviews)
                                    </Typography>
                                </Box>
                                

                            </Box>
                        </Paper>

                    </Grid>
                    <Grid item xs={3}>
                        <Paper variant="outlined">
                            <img src={TeePink} style={{ width: '100%', height: '35rem' }}></img>
                            <Box padding={1}>
                                <Typography variant='h4' component='h2'>
                                    Advance Tee Pink
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }} paddingTop={1}>
                                    <Rating name="read-only" value={3.5} precision={0.5} readOnly size='large' />
                                    <Typography variant='h5' component='p' marginLeft={0.5}>
                                        3.5
                                    </Typography>
                                    <Typography variant='body1' component='p' marginLeft={1.5}>
                                        (200 reviews)
                                    </Typography>
                                </Box>
                                

                            </Box>
                        </Paper>

                    </Grid>
                    <Grid item xs={3}>
                        <Paper variant="outlined">
                            <img src={HoodiePocketP} style={{ width: '100%', height: '35rem' }}></img>
                            <Box padding={1}>
                                <Typography variant='h4' component='h2'>
                                    Premium Hoodie W/P
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }} paddingTop={1}>
                                    <Rating name="read-only" value={5} precision={0.5} readOnly size='large' />
                                    <Typography variant='h5' component='p' marginLeft={0.5}>
                                        5
                                    </Typography>
                                    <Typography variant='body1' component='p' marginLeft={1.5}>
                                        (100 reviews)
                                    </Typography>
                                </Box>
                                

                            </Box>
                        </Paper>

                    </Grid>
                    <Grid item xs={3}>
                        <Paper variant="outlined">
                            <img src={SweatPantsY} style={{ width: '100%', height: '35rem' }}></img>
                            <Box padding={1}>
                                <Typography variant='h4' component='h2'>
                                    Advance Sweatpants B/Y
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }} paddingTop={1}>
                                    <Rating name="read-only" value={4.5} precision={0.5} readOnly size='large' />
                                    <Typography variant='h5' component='p' marginLeft={0.5}>
                                        4.5
                                    </Typography>
                                    <Typography variant='body1' component='p' marginLeft={1.5}>
                                        (210 reviews)
                                    </Typography>
                                </Box>
                               

                            </Box>
                        </Paper>

                    </Grid>
                </Grid>
            </Box>

        </>



    );
}

export default HomePage;