import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Carousel from './components/Carousel'
import Header from './components/Header'
import Content from './components/Content'
import Maths from './components/maths'
import Last from './components/last'

import './App.css'

function App() {
  
  return (
    <>
      
      <Header/>
      <h1 className='text-white mb:text-3xl lg:text-4xl font-bold text-center mb-6 tracking-widest'>RESEARCH</h1>
      <Carousel/>
      <Content/>
      <Maths/>
      <Last/>
    </>
  )
}

export default App
