import logo from '/public/images/logo.png';
import Image from "next/image";
import { HeaderContainer } from '../../styles/components/Header.styles';
import { useState } from 'react';

export function Header() {
    const [toggleMenu, setToggleMenu] = useState (false)
    const handleOpenMenu = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
    <HeaderContainer>
        <Image className="logo" src={logo} alt="Logo" />
        <nav className={toggleMenu? 'icon mobo-nav-active': 'icon'}>
            <a className="home active"> Home </a>
            <a className="about"> About me </a>
            <a className="stacks"> Skills </a>
            <a className="stacks"> Certifications </a>
            <a className="projects"> Projects </a>
            <a className="projects"> Experience </a>
        </nav>
        <div className={toggleMenu? 'icon icon-active': 'icon'} onClick={handleOpenMenu}>
            <div className="hamburguer"></div>
        </div>

    </HeaderContainer>)
}