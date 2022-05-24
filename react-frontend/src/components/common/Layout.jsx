import React from 'react'
import { Navbar } from './Navbar'

export const Layout = ({ children }) => {
  return (
    <div className='min-vh-100 '>
      <div className='container-fluid container-md min-vh-100'>
        <Navbar />
        <main className='d-flex justify-content-center align-items-center p-5 main-container'>
          {children}
        </main>
      </div>
    </div>
  )
}
