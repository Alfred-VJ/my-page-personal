import React from 'react';
import '../styles/homePage.css';
import GridHome from '../../grids/gridHome/GridHome';
import photo from '../../assets/derecha.png'

const HomePage = () => {
  return (
    <div className='content_page'>
        <div className='contenido_page'>
          <GridHome />
          {/* <img src={photo} alt="logo" className='photo_home'/>
          <h1 className='h1_home'>Un genio es 10% talento y 90% esfuerzo</h1> */}
        </div>
        <div className='lateral_page'>

        </div>
        <div className='contenido_page2'>
          
          </div>
          <div className='lateral_page2'>
          
          </div>
    </div>
  )
}

export default HomePage