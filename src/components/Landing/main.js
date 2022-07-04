import React from 'react'
import Header from './header'
import './styles.css'
function Landing() {
  return (
    <div className='main-background'>
      <div className='main-avatar'>
        <img src="https://neal.fun/spend/billgates.jpg" alt="" />
      </div>
      <h1>Spend Bill Gates' Money</h1>
      <Header></Header>
    </div>
  )
}

export default Landing