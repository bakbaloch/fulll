import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar'

import Hero from './components/Hero'
import Services from './components/Services'
import Download from './components/Download'
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero/>
      <Services/>
      <Download/>
      <HowItWorks />
      <Footer/>

   
    </>
  );
}

export default App;