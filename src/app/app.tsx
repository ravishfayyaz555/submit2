'use client'
import Cart from '@/components/cart';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

    const App = ({ children}:
   {
    children: React.ReactNode;
  }) => {

const [showCart, setShowCart] =useState(false)

  return (
   <Provider store={store}>

    <Navbar setShowCart={setShowCart}/>
    {showCart  && <Cart setShowCart={setShowCart}/>}
    {children}
    <Footer/>
   </Provider>
)
}

export default App;