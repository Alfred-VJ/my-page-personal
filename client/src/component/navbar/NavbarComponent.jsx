import '../styles/navbar.css';
import {TfiGithub} from 'react-icons/tfi';
import {BsLinkedin, BsYoutube} from 'react-icons/bs';
import {FaFacebookSquare, FaWhatsappSquare} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';

const NavbarComponent = () => {
    return (
        <div className='content__nav'>
            <div className='navbar_content'>
              <TfiGithub className='icon_navbar' /> 
              <BsLinkedin className='icon_navbar' />
              <BsYoutube className='icon_navbar' />
              <FaFacebookSquare className='icon_navbar' />
              <FaWhatsappSquare className='icon_navbar' />
              <SiGmail className='icon_navbar' />
            </div>
        </div>
    )
}

export default NavbarComponent