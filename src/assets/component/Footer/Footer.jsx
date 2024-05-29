import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import { faBehanceSquare} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faSquareXTwitter} from '@fortawesome/free-brands-svg-icons'
import img6 from './../../img/logo.png'


export default function Footer(){
    return(

<footer className='footer'>
<div  className='footer-first'>
  <div>
    <img src= {img6} alt='footer-image'></img>
    <h2>Head Office</h2>
    <p>Syria-Lattakia-CRH2+HJX 35.51995118</p>
    <p className='copy'>© 2021 - 2023 focal X L.L.C All Right Reserved</p>
  </div>
  <div className='footer-right'>
    <div>
      <h2>Sales</h2>
      <p>contact@focal-x.com +963 953 666 056</p>
      <h2>Public Relations</h2>
      <p>pr@focal-x.com +963 953 666 052</p>
    </div>
    <div>
      <h2>Customer Support</h2>
      <p>contact@focal-x.com +963 953 666 056</p>
      <h2>Human Resources</h2>
      <p>hr@focal-x.com</p>
    </div>
    <div>
      <h2>Useful Links</h2>
      <p>Clients & Partners</p>
      <p>Check Certificat ID</p>
      <p>Check for employee</p>
      <p>Our Brand ID guidlines</p> 
    </div>
    <div>
      <h2>Keep In Touch</h2>
      <div className='social-footer'>
        <FontAwesomeIcon icon={faSquareXTwitter} className='icon-footer'/>
        <FontAwesomeIcon icon={faInstagramSquare} className='icon-footer'/>
        <FontAwesomeIcon icon={faLinkedin} className='icon-footer'/>
        <FontAwesomeIcon icon={faBehanceSquare} className='icon-footer'/>
        <FontAwesomeIcon icon={faFacebook} className='icon-footer'/>
      </div>
    </div>
  </div>
</div>

</footer>
    )
}