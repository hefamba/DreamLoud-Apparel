import React from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Rating } from '@mui/material';
import { Button } from '@mui/material';



function Entry({ image, name, rating, reviews, price, addToCart, item }) {




    return (
        <div className='products'>

            <Box padding={5}>



                <Paper variant="outlined">
                    <img src={process.env.PUBLIC_URL + '/assets/' + image} style={{ width: '100%', height: '35rem' }} />
                    <Box padding={1}>
                        <Typography variant='h4' component='h2'>
                            {name}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }} paddingTop={1}>
                            <Rating name="read-only" value={rating} precision={0.5} readOnly size='large' />
                            <Typography variant='h5' component='p' marginLeft={0.5}>
                                {rating}
                            </Typography>
                            <Typography variant='body1' component='p' marginLeft={1.5}>
                                {reviews}
                            </Typography>
                        </Box>
                        <Box paddingTop={2}>
                            <Typography variant='h3' component='p' marginLeft={0.5}>
                                {price}
                            </Typography>
                            <Button size='large' onClick={() => addToCart(item)}>Add to Cart</Button>
                        </Box>

                    </Box>
                </Paper>






            </Box>

        </div>
    );
}

export default Entry;