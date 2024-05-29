import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/component/Navbar/Navbar.jsx'
import Hero from './assets/component/Hero/Hero.jsx'
import Service from './assets/component/Sevices/Service.jsx'
import Hosting from './assets/component/Hosting/Hosting.jsx'
import Footer from './assets/component/Footer/Footer.jsx'

function App() {

  return (
    <>



    <header>
      <Navbar />
      <Hero />
    </header>
    <main>
      <Service />
      <Hosting />
    </main>
    <Footer />
    </>
  )
}

export default App
