import './Hosting.css'

export default function Hosting () {
return (

<section className='sec-host'>
<h1 className='host-title'>Hosting Pricing</h1>
<div className='host-card'>
  <div className='basic' id='host-basic'>
    <h2>Basic</h2>
    <p>for very small businesses and freelancers</p>
    <h2>$2.5/mo</h2> 
    <ul>
      <li>Disk Space: <strong> 500 M.B </strong></li>
      <li>Bandwidth: <strong>  500 G.B </strong></li>
      <li>SubDomains: <strong>  Unlimited </strong></li>
      <li>Parked Domains: <strong>  Unlimited </strong></li>
      <li>E-mail Accounts: <strong>  Unlimited </strong></li>
      <li>Cpanel (control panel): <strong>  Yes </strong></li>
      <li>Money Back Guarantee: <strong>  14 Days </strong></li>
    </ul>
    <button>You will have 1 Gift</button>
  </div>
  <div className='basic' id='pro'>
    <h2>Pro</h2>
    <p>for vIndividuals that need sharing vlogs or need huge portfolio</p>
    <h2>$5/mo</h2>
    <ul>
      <li>Disk Space: <strong>  3000 M.B </strong></li>
      <li>Bandwidth: <strong>  3 TERA </strong></li>
      <li>SubDomains: <strong>  Unlimited </strong></li>
      <li>Parked Domains: <strong>  Unlimited </strong></li>
      <li>E-mail Accounts: <strong>  Unlimited </strong></li>
      <li>Cpanel (control panel): <strong>  Yes </strong></li>
      <li>Money Back Guarantee: <strong>  14 Days </strong></li>
    </ul>
    <button>1 Gift per/mo for year</button>
  </div>
  <div className='basic' id='business'>
    <h2>Business</h2>
    <p>for Team that need sharing and reporting</p>
    <div className='discount'>
      <h2>$8/mo</h2> 
      <p>5% discount during 2022</p>
    </div>
    <ul>
      <li>Disk Space: <strong> 5000 M.B </strong></li>
      <li>Bandwidth: <strong>  5 TERA </strong></li>
      <li>SubDomains: <strong>  Unlimited </strong></li>
      <li>Parked Domains: <strong>  Unlimited </strong></li>
      <li>E-mail Accounts: <strong>  Unlimited </strong></li>
      <li>Cpanel (control panel): <strong>  Yes </strong></li>
      <li>Money Back Guarantee: <strong>  14 Days </strong></li>
    </ul>
    <button>3 Gifts per/mo for year</button>
  </div>
  <div className='basic' id='enterprise'>
    <h2>Enterprise</h2>
    <p>for very small businesses and freelancers</p>
    <div className='discount'>
      <h2>$12/mo</h2> 
      <p>5% discount during 2022</p>
    </div> 
    <ul>
      <li>Disk Space: <strong> 10000 M.B </strong></li>
      <li>Bandwidth: <strong>  10 TERA </strong></li>
      <li>SubDomains: <strong>  Unlimited </strong></li>
      <li>Parked Domains: <strong>  Unlimited </strong></li>
      <li>E-mail Accounts: <strong>  Unlimited </strong></li>
      <li>Cpanel (control panel): <strong>  Yes </strong></li>
      <li>Money Back Guarantee: <strong>  14 Days </strong></li>
    </ul>
    <button>jus Call Us</button>
  </div>
</div>
<div className='support'>
  <p>Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support. Go Online, choose your plan and Contact us on:contact@focal-x.com | +963 935 033 139</p>
</div>
</section>
)

}