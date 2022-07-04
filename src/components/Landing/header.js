import React from 'react'
import './styles.css'
import {useSelector} from 'react-redux';
function Header() {
  const money=useSelector(state=>state.product.money)
  let format=new Intl.NumberFormat('en-US',{
    style: 'currency',
  currency: 'USD',
  })
 
  return (
    <div className='header'>
        <h2>{format.format(money)}</h2>
    </div>
  )
}

export default Header