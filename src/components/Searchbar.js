import React from 'react'
import offer from './offers.png'
import mobile from './mobile.png'
import electronics from './electronics.png'
import appliances from './tv.png'
import fashion from './fashion.webp'
import beauty from './beauty.webp'
import home from './home.webp'
import furniture from './furniture.webp'
import flights from './flights.webp'
import grocery from './grocery.webp'
export default function Searchbar() {
    return (
      <>
      <div className='col-md-1'>
          <img src={offer} width='60'/>
          <p>Top Offers</p>
      </div>
      <div className='col-md-1'>
          <img src={mobile} width='60'/>
          <p>Mobiles</p>
      </div>
      <div className='col-md-1'>
        <img src={electronics} width='60'/>
        <p>Electronics</p>
    </div>
    <div className='col-md-1'>
        <img src={appliances} width='60'/>
        <p>Appliances</p>
    </div>
    <div className='col-md-1'>
        <img src={fashion} width='60'/>
        <p>Fashion</p>
    </div> 
    <div className='col-md-1'>
        <img src={beauty} width='60'/>
        <p>Beauty</p>
    </div> 
    <div className='col-md-1'>
    <img src={home} width='60'/>
        <p>Home</p>
    </div>     
    <div className='col-md-1'>
        <img src={furniture} width='60'/>
        <p>Furniture</p>
    </div> 
    <div className='col-md-1'>
        <img src={flights} width='60'/>
        <p>Flights</p>
    </div> 
    <div className='col-md-1'>
        <img src={grocery} width='60'/>
        <p>Grocery</p>
    </div>     
       
    </>

  )
}  