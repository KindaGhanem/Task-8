import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import { faBehanceSquare} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faSquareXTwitter} from '@fortawesome/free-brands-svg-icons'
import img2 from './../../img/gamefor-mobile.png';
import img3 from './../../img/brandingpattren.png' ;




export default function Hero (){

    
    return (
    <div className='hero' id='Home'>
        <div className='hero-content'>
            <h1 className='title'>Hey !! Mario still here, But don’t forget that</h1>
            <p>At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in: Branding, Digital Marketing, Web/App Development, Ui/UxContent creation, Graphic design, Social media and More........So you can take a tour in our website, OR just Press Start </p>
        </div>
        <div className='hero-img'>
            <img src= {img2} alt='img-hero1' className='img-hero1'></img>
            <img src= {img3} alt='img-hero2' className='img-hero2'></img>
        </div>
        <div>
            <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff8500" fill-opacity="1" d="M0,64L80,74.7C160,85,320,107,480,112C640,117,800,107,960,96C1120,85,1280,75,1360,69.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
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
