import React from 'react'
import './styles.css'
import {useSelector,useDispatch} from 'react-redux';

function Receipt() {
  const items= useSelector(state => state.product.items);
  const initialMoney=useSelector(state=>state.product.initialMoney)
  const money=useSelector(state=>state.product.money)
  return (
    <div className='receipt-container'>
      
        <div className='receipt'>
           <div className='receipt-title'>
                Your Receipt
           </div>
           <div className='receipt-product'>
            {items.map((item)=>{
              if(item.quantity>0)
              {
                return <div key={item.id}><span className='receipt-product-name'>{item.title} </span><span className='receipt-product-quantity'>{item.quantity}x</span>      <span className='receipt-product-total'>{item.price*item.quantity}$</span></div>
              }
})}
             
           </div>
           <div className='receipt-total'>
                <div className='receipt-total-title'>
                    TOTAL            
                    
                </div>
                <div>  {initialMoney-money}$</div>
           </div>
        </div>
    </div>
  )
}

export default Receipt