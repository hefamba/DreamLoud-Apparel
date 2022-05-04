import React from 'react';
import Entry from '../components/Entry';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Divider } from '@mui/material';
import Data from '../components/Data';
import { useState, useEffect } from 'react';
import CartItems from '../components/CartItems';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartAction, removeFromCartAction } from '../redux/actions/cartActions';
import { setAlertAction } from '../redux/actions/alertActions';





function Shop() {



  const createEntry = (item) => {


    return <Entry
      item={item}
      key={item.id}
      name={item.name}
      price={`$${item.price}`}
      rating={item.rating}
      reviews={item.reviews}
      image={item.image}
      addToCart={addToCart}

    />;
  };

  // const [alert, setAlert] = useState("");
  const { alert } = useSelector(state => state.alertReducer);
  // const [cart, setCart] = useState([]);
  const { cart, cartTotal } = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();



  // const [cartTotal, setCartTotal] = useState(0);
  console.log(cart);

  // const total = () => {
  //   let totalVal = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     totalVal += parseInt(cart[i].price);
  //   }
  //   setCartTotal(totalVal);


  // };

  const addToCart = (item) => {
    let addIt = true;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === item.id) addIt = false;
    }
    if (addIt) {
      dispatch(addToCartAction(item, cart));
      // setCart([...cart, item]);

      // setAlert("");
      dispatch(setAlertAction(''));
    }
    else dispatch(setAlertAction(`${item.name} is already in cart`));
    // else setAlert(`${item.name} is already in cart`);
  };

  const removeFromCart = (item) => {
    // let hardCopy = [...cart];
    // hardCopy = hardCopy.filter(cartItem => cartItem.id !== item.id);
    // setCart(hardCopy);
    dispatch(removeFromCartAction(item, cart));
    // setAlert("");
    dispatch(setAlertAction(''));
  };


  // useEffect(
  //   () => {
  //     total();
  //   }, [cart]
  // );


  const cartItems = cart.map((item) => (
    <CartItems
      item={item}
      key={item.id}
      name={item.name}
      price={`$${item.price}`}
      rating={item.rating}
      reviews={item.reviews}
      image={item.image}
      removeFromCart={removeFromCart}
    />
  ));





  return (
    <div>
      <Box display='flex'>


        <Box width='90rem'>
          <Box>
            <Typography variant='h1' fontWeight='bold'>
              Shop
            </Typography>
          </Box>
          <Divider />
          <Box display='flex' flexDirection='row' paddingY={4}>
            <Grid container spacing={5} >
              {Data.map(createEntry)}
            </Grid>
          </Box>
        </Box>

        <Divider />


        <Box>
          <Box>
            <Typography variant='h1' fontWeight='bold'>
              cart
            </Typography>
          </Box>
          <Box>
            <Typography variant='h3'>
              TOTAL: $ {cartTotal}
              <Button>Proceed to Checkout</Button>
            </Typography>

          </Box>
          <Box>
            <Typography variant='h4'>
            Alert: {alert}
            </Typography>
            
          </Box>
          <Box>
            {cartItems}
          </Box>
          
        </Box>

      </Box>








    </div>
  );
}

export default Shop;
