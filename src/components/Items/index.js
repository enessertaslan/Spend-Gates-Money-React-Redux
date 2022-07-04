import React from 'react'
import './styles.css'
import {useSelector,useDispatch} from 'react-redux';
import { useState } from 'react';
import {useEffect} from 'react'
import {Quantity,} from '../../redux/itemSlice'
function Items() {
    const items= useSelector(state => state.product.items);
    const [quantity,setQuantity]=useState(0);
    const dispatch=useDispatch()
    useEffect(()=>{
       
    },[items])
  return (
    <div className='item'>
    {
        items.map((item)=>{
            
            return (
               dispatch(Quantity({id:item.id,quantity:item.quantity})),
            <div className='item-container'  key={item.id}>
            <div className='item-image'>
                <img src={item.img} width="130px"  alt="" />
            </div>
            <div className="item-title">
                {item.title}
            </div>
            <div className="item-price">
                {item.price}$
            </div>
            <div className="item-buttons">
                <button className='sell-button'
                 disabled={item.quantity===0 ? true : false } 
                 onClick={
                    ()=>{dispatch(Quantity({id:item.id,quantity:item.quantity-1}))
                 }}>
                            Sell
                </button>
                    <input type="number" 
                     disabled={Math.floor(item.quantity)>=Math.floor(item.maxQuantity) ? true : false } 
                    value={item.quantity}
                    min={0}
                    max={Math.floor(item.maxQuantity)}
                    onChange={
                        (e)=>{
                            if(item.maxQuantity<=item.quantity)
                            {
                                dispatch(Quantity({id:item.id,quantity:item.maxQuantity}))
                            }else{
                                dispatch(
                                    Quantity({id:item.id,quantity:Number(e.target.value),prevQuantity:item.quantity},
    
                            ));
                                
                            }
                           }
                        }  />
                <button className='buy-button'
                disabled={Math.floor(item.maxQuantity)>item.quantity ? false : true}
                 onClick={
                    ()=>{ dispatch(
                        Quantity({id:item.id,quantity:item.quantity+1},
                ));
            }
                    }>
                            Buy
                </button>
            </div>
        </div>
        )})
    }
       
    </div>
  )
}

export default Items