import {configureStore} from '@reduxjs/toolkit'; // configureStore u import ediyoruz
import  itemSlice  from './itemSlice';

export const store=configureStore({
    reducer:{
        product:itemSlice,

    },
    
}) 