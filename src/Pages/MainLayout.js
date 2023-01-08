import React, { Children } from 'react';
import NavBar from '../Components/NavBar';
import BlogPage from './BlogPage';
import Home from './Home';


function MainLayout({Children}) {
  return (
    <div>
        <NavBar/>
        <div>
        {Children}
        </div>
        
    </div>
  )
}

export default MainLayout