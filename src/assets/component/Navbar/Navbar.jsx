import { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

export default function Navbar ()
{
  const [menuOpen , setMenuOpen] = useState(false)
  const [Color , setColor] = useState (false)

  function ChangeColor (){
    if (window.scrollY >= 80) {
      setColor(true)
    }
    else{
      setColor(false)
    }
  }
  window.addEventListener('scroll' , ChangeColor)



    return(
        <nav className= {Color ? 'navbar navbar-change-color' : 'navbar'}>
          <div className='left-part'>
            <img src='./src/assets/img/logo.svg' alt='logo'></img>
            <h3>Digital marketing agency</h3>
          </div>
          <div>
            <FontAwesomeIcon icon={faBars} className='bars' onClick={() =>{
              setMenuOpen(!menuOpen);
            }} />
          </div>
          <ul className = {menuOpen ? "open" : "" } >
            <li><a href='#Home'>Home</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#'>Portfolio</a></li>
            <li><a href='#'>Client & partner</a></li>
            <li><a href='#'>X Academy</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Let's Talk</a></li>
          </ul>
        </nav>

) }