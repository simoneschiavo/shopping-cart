// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
function App() {

  return (
    <>
      <Header />
      <section className='flex flex-col items-center justify-center gap-1'>
        <h1 className='text-3xl font-bold'>Fake Products for Fake Money</h1>
        <p className='text-sm'>Save big with up to 70% off our best selling fake products</p>
        <button className='my-4 px-8 py-2 bg-blue-700 text-white text-sm hover:bg-blue-800'>Shop now</button>
      </section>
    </>
  )
}

export default App
