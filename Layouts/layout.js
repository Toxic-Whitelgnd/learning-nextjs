import React from 'react'
import { Nav } from '../components/NavBar/Nav'

export default function DefaultLayout( {children}) {
  return (
    <>
    <Nav />
    <main>
        {children}
    </main>
    
    </>
  )
}
