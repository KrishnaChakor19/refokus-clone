import React from 'react'
import NavBar from './components/NavBar.jsx'
import Work from './components/Work.jsx'
import Stripes from './components/stripe/Stripes.jsx'
import Products from './components/product/Products.jsx'
import Marquees from './components/marquee/Marquees.jsx'
import Cards from './components/cards/Cards.jsx'
import Footer from './components/Footer.jsx'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full font-["satoshi"]  bg-zinc-900 text-white'>
          <NavBar/>
          <Work/>
          <Stripes/>
          <Products/>
          <Marquees/>
          <Cards  />
          <Footer/>
      </div>
  )
}

export default App