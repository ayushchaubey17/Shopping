import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A from './componrnt/A'
import UseState from './componrnt/UseState'
import UseContext from './componrnt/UseContext'
import UseReducer2 from './UseReducer2'
import Header from './componrnt/Header'
import { Route,Routes } from 'react-router-dom'
import Home from './componrnt/Home'
import About from './componrnt/About'
import Contact from './Contact'
import More from './More'
import FooterBar from './componrnt/FooterBar'
import Cart from './componrnt/Cart'

function App() {

  return (

    <div className='w-full   mx-auto'>
<Header />
    




<Routes>
  <Route path='/' element= {<Home/>} />
  <Route path='/about' element= {<About/>} />
  <Route path='/contact' element= {<Contact/>} />
  <Route path='/more' element= {<More/>} />
  <Route path='/cart' element= {<Cart/>} />
</Routes>


{/* <FooterBar/> */}


</div>
  )
}

export default App
