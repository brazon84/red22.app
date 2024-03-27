import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Informacion from './components/informacion/Informacion'
import Nav from './components/nav/Nav'
import Nosotros from './components/nosotros/Nosotros'
import Planes from './components/planes/Planes'


function App() {
  

  return (
    <div className='bg-[#930f5f] overflow-hidden'>
      <BrowserRouter>
    <Nav  /> 
    <Routes>
    <Route path='/' element={<Home />}/>
    {/* <Nosotros /> */}
   <Route path='planes' element={ <Planes /> } />  
     {/*
    <Informacion />
  <Contact /> */}
    </Routes> 
    <Footer /> 
    {/* <div className='formato'>
    <h1 className='construccion text-center mt-72 bx-flashing'>pagina en construccion disculpe las molestias ocacionadas</h1>
  </div> */}
  </BrowserRouter>
    
    </div>
  )
}

export default App
