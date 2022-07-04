import {createSlice} from '@reduxjs/toolkit';

export const itemSlice=createSlice({
    name:'product',
    initialState:{
        money:100000000,
        initialMoney:100000000,
        totalQuantity:0,
        items:[
            {
                id:1,
                title:'Hamburger',
                price:10,
                img:'https://www.pngmart.com/files/5/Hamburger-PNG-Free-Download.png',
                quantity:0,
                prevQuantity:0,
                maxQuantity:null,
                inputDisable:false,
            },
            {
                id:2,
                title:'Laptop',
                price:1200,
                img:'http://isc-laptop.com/wp-content/uploads/2012/10/Laptop-PNG.png',
                quantity:0,
                prevQuantity:0,
                maxQuantity:null,
                inputDisable:false,
            },
            {
                id:3,
                title:'Pizza',
                price:20,
                img:'https://www.pngmart.com/files/1/Pepperoni-Pizza-PNG-Image.png'
                ,
                quantity:0,
                prevQuantity:0,
                maxQuantity:null,
                inputDisable:false,
            },
            {
                id:4,
                title:'Television',
                price:900,
                img:'https://www.pngmart.com/files/1/Haier-TV-PNG.png'
                ,
                quantity:0,
                prevQuantity:0,
                maxQuantity:null,
                inputDisable:false,
            },
            {
                id:5,
                title:'Tablet',
                price:500,
                img:'https://www.pngmart.com/files/3/Tablet-PNG-Pic.png'
                ,
                quantity:0,
                prevQuantity:0,
                maxQuantity:null,
                inputDisable:false,
            },
            {
                id:6,
                title:'Iphone',
                price:1300,
                img:'https://pngimg.com/uploads/iphone_12/iphone_12_PNG36.png'
                ,
                quantity:0,
                prevQuantity:0,
                maxQuantity:null,
                inputDisable:false,
            },
            {
                id:7,
                title:'Desktop PC',
                price:2000,
                img:'https://cdn.picpng.com/computer_desktop_pc/computer-desktop-pc-image-37549.png'
                ,
                quantity:0,
                prevQuantity:0,
                maxQuantity:100,
                inputDisable:false,
            },
            {
                id:8,
                title:'Webcam',
                price:1300,
                img:'https://www.pngmart.com/files/1/Nikon-Camera-PNG.png'
                ,
                quantity:0,
                prevQuantity:0,
                maxQuantity:100,
                inputDisable:false,
            },
            {
                id:9,
                title:'Monitor',
                price:120,
                img:'https://static.wixstatic.com/media/2cd43b_0574e6da959e41e8ad27ddc5493484de~mv2_d_3196_2953_s_4_2.png/v1/fill/w_320,h_295,q_90/2cd43b_0574e6da959e41e8ad27ddc5493484de~mv2_d_3196_2953_s_4_2.png'
                ,
                quantity:0,
                prevQuantity:0,
                maxQuantity:100,
                inputDisable:false,
            },
            {
                id:10,
                title:'Mouse',
                price:80,
                img:'https://www.pngmart.com/files/2/Computer-Mouse-Transparent-Background.png'
                ,
                quantity:0,
                prevQuantity:0,
                maxQuantity:100,
                inputDisable:false,
            },
        ],
        quantity:0,
        
    },
    reducers:{
        Quantity:(state,action)=>{
            const {id,quantity} =action.payload;
            const item=state.items.find(item=>item.id===id);
            item.quantity=quantity;

            const maxQuantity=Number(state.money)/Number(item.price);
            item.maxQuantity=maxQuantity+quantity;

            let price=0;

            if(item.quantity>0)
            {
                state.totalQuantity++;
            }
            state.items.map((item)=>(
                price+=Number(item.quantity)*Number(item.price)
            ));

            state.money=Number(state.initialMoney)-Number(price);
            if(state.money<0)
            {
                state.money=0;
            }
        },

    }
})

export const {Quantity}=itemSlice.actions;
export default itemSlice.reducer;