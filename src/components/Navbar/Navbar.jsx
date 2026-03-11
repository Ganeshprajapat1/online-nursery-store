import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import addtocart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {

const[menu,setmenu] = useState("shop");
const {getTotalCartItems}=useContext(ShopContext)

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" height={'40px'}/>
        <p>ONILNE NURSERY STORE</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("plants")}}><Link style={{textDecoration:'none'}} to='/plants'>Plants</Link>{menu==="plants"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("soils")}}><Link style={{textDecoration:'none'}} to='/soils'>Soil & Fertilizer</Link>{menu==="soils"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("gardens")}}><Link style={{textDecoration:'none'}} to='/gardens'>Garden-Design</Link>{menu==="gardens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("customize")}}><Link style={{textDecoration:'none'}} to='/customize'>Customize-Garden</Link>{menu==="customize"?<hr/>:<></>}</li>

      </ul>
      <div className='nav-login-cart'>
       <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img  src={addtocart} alt=''/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
