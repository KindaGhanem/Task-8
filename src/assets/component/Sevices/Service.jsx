import './Service.css'
import img4 from './../../img/brandingOrange.png' ;
import img5 from './../../img/markiting.png';


export default function Service () {

    return ( 

<section id='services'>
<h1 className='service-title'>Our services</h1>
<div  className='our-Services'>
  <div className='cards'>
    <h1 className='h-brand'>Branding</h1>
    <p>The brand is hope,It is also the source of inspiration for everything you do when youdeal with your customers and that is the important and emotionalthing. Your Brand and Visual identity represents an intrinsic Valueto your company.</p>
    <h4>In focal X agency, we provide:</h4>
    <div className='card-info'>
      <div> 
        <ul className='card-list'>
          <li>Visual identity design</li>
          <li>Define Brand Identity</li>
          <li>Define Brand personality</li>
          <li>Building Your brand strategy</li>
          <li>Market research and competitors study</li>
        </ul>
        <h5>We walk with you from A to Z</h5>
      </div>
      <img src= {img4} alt='branding-image' width='150'></img>
    </div>
  </div>
  <div className='cards'>
    <h1 className='h-market'>Marketing</h1>
    <p>Talk to your customers and tell them you and your company'sstory through us the way you want.Let us plan the content that will bring your audience closer to you..</p>
    <h4>In our marketing agency, we provide:</h4>
    <div className='card-info'>
      <div>
        <ul className='card-list'>
          <li>Social media marketing & campaigns.</li>
          <li>Search engine optimization ( SEO ).</li>
          <li>Search engine Marketing ( SEM ).</li>
          <li>App store optimization ( ASO ).</li>
          <li>Market research and Analysis.</li>
          <li>Influencer marketing..</li>
          <li>Affiliate marketing..</li>
          <li>E-mail marketing.</li>
        </ul>
      </div>
      <img src = {img5} alt='branding-image' width='150'></img>
    </div>
  </div>
</div>
</section>

    )

}