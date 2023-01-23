import '../styles/navbar.css';
import { useState } from 'react';
import { TfiGithub } from 'react-icons/tfi';
import { BsLinkedin, BsYoutube } from 'react-icons/bs';
import { FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';
import {ImMail} from 'react-icons/im'
import logo from '../../assets/logo.png'

const NavbarComponent = () => {
    const [socialMedia] = useState({
        gitHub: "https://github.com/Alfred-VJ",
        linkedin: "https://www.linkedin.com/in/jos%C3%A9-alfredo-vel%C3%A1zquez-ju%C3%A1rez-30b827232/",
        youtube: "https://www.youtube.com/channel/UC3K5-DQkXSFx2LfWnaGHY1g",
        facebook: "https://www.facebook.com/AlfredVJJ/",
    })
    return (
        <div className='content__nav'>
            <div className='navbar_content'>
                <img src={logo} alt="logo" className='logo_nabvar'/>
                <a rel="noreferrer" href={socialMedia.gitHub} target="_blank">
                    <TfiGithub className='icon_navbar' />
                </a>
                <a rel="noreferrer" href={socialMedia.linkedin} target="_blank">
                    <BsLinkedin className='icon_navbar' />
                </a>
                <a rel="noreferrer" href={socialMedia.youtube} target="_blank">
                    <BsYoutube className='icon_navbar' />
                </a>
                <a rel="noreferrer" href={socialMedia.facebook} target="_blank">
                    <FaFacebookSquare className='icon_navbar' />
                </a>
                <a rel="noreferrer" href={socialMedia.youtube} target="_blank">
                    <FaWhatsappSquare className='icon_navbar' />
                </a>
                <a rel="noreferrer" href={socialMedia.youtube} target="_blank">
                    <ImMail className='icon_navbar' />
                </a>
            </div>
        </div>
    )
}

export default NavbarComponent