import React, { Children } from 'react'
import NavBar from '../Components/NavBar'

function MainLayout({Children}) {
  return (
    <div>
        <NavBar/>
        <div>{Children}</div>
    </div>
  )
}

export default MainLayout