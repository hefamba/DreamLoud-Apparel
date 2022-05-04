import React from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';



function CartItems({ image, name, price, removeFromCart, item }) {




  return (
    <div className='products'>

      <Box sx={{
        width: 300,

      }}>
        <Paper variant="outlined" >
          <Box display='flex'>
            <img src={process.env.PUBLIC_URL + '/assets/' + image} style={{ width: '35%', height: '15rem' }} />
            <Box margin={4}>
              <Typography variant='h5' component='h2'>
                {name}
              </Typography>

              <Typography variant='h4' component='p' marginLeft={0.5}>
                {price}
              </Typography>
              <Button size='large' onClick={() => removeFromCart(item)}>Remove From Cart</Button>
            </Box>
          </Box>

        </Paper>

      </Box>

    </div>
  );
}

export default CartItems;