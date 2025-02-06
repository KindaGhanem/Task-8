import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import { faBehanceSquare} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faSquareXTwitter} from '@fortawesome/free-brands-svg-icons'
import img2 from './../../img/gamefor-mobile.png';
import img3 from './../../img/brandingpattren.png' ;
import img9 from './../../img/footer-mobile.png' ;




export default function Hero (){

    
    return (
    <div className='hero padding-main' id='Home'>
        <div className='hero-content'>
            <h1 className='title'>Hey !! Mario still here, But don’t forget that</h1>
            <p>At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in: Branding, Digital Marketing, Web/App Development, Ui/UxContent creation, Graphic design, Social media and More........So you can take a tour in our website, OR just Press Start </p>
        </div>
        <div className='hero-img'>
            <img src= {img2} alt='img-hero1' className='img-hero1'></img>
            <img src= {img3} alt='img-hero2' className='img-hero2'></img>
        </div>
        <div>
            <img src= {img9} alt='wave' className='wave'></img>
            <div className='social'>
                <FontAwesomeIcon icon={faSquareXTwitter} className='icon'/>
                <FontAwesomeIcon icon={faInstagramSquare} className='icon'/>
                <FontAwesomeIcon icon={faLinkedin} className='icon'/>
                <FontAwesomeIcon icon={faBehanceSquare} className='icon'/>
                <FontAwesomeIcon icon={faFacebook} className='icon'/>
            </div>
            <p className='paragraph'>© 2021 - 2022 focal X agency All Right Reserved</p>
        </div>
    </div> 
    )
}
