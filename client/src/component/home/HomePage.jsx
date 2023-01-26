import React from 'react';
import '../styles/homePage.css';
import GridHome from '../../grids/gridHome/GridHome';
import Contents from '../views/contents/Contents';
import Skills from '../views/contents/Skills';

const HomePage = () => {
  return (
    <div>
      <div className='content_page'>
        <div className='contenido_page'>
          <GridHome />
        </div>
      </div>
      <div>
        <Skills />
        <Contents/>
      </div>
    </div>
  )
}

export default HomePage