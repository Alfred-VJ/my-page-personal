import React from 'react';
import '../styles/homePage.css';
import GridHome from '../../grids/gridHome/GridHome';

const HomePage = () => {
  return (
    <div className='content_page'>
        <div className='contenido_page'>
          <GridHome />
        </div>
    </div>
  )
}

export default HomePage