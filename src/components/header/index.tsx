import logo from '/public/images/logo.png';
import Image from "next/image";
import { HeaderContainer } from '../../styles/components/Header.styles';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Header() {
    const [toggleMenu, setToggleMenu] = useState (false)
    const [activeMenu, setActiveMenu] = useState ('home')
    
    function hightLightActiveHeaderManu( mapYscreen:any ) {
        if(mapYscreen > 0 &&  mapYscreen <= 700) {
            setActiveMenu('home')
        } else if(mapYscreen > 700 &&  mapYscreen <= 1499) {
            setActiveMenu('about')
        } else if(mapYscreen > 1500 &&  mapYscreen <= 2400) {
            setActiveMenu('skills')
        } else if(mapYscreen > 2401 &&  mapYscreen <= 2900) {
            setActiveMenu('projects')
        } else if(mapYscreen > 3101 ) {
            setActiveMenu('experience')
        }
    }

    useEffect(() => {
        window.onscroll = () => {
            hightLightActiveHeaderManu(window.scrollY)
        }
    }, []);

    const handleOpenSideBar = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <HeaderContainer>
            <Image className="logo" src={logo} alt="Logo" />
            <nav className={toggleMenu? 'icon mobo-nav-active': 'icon'}>
                <Link 
                    scroll={false} href="#main" 
                    onClick={handleOpenSideBar}
                    className={ activeMenu === 'home'? "active" : ""}

                    > Home 
                </Link>

                <Link 
                    scroll={false} 
                    href="#about" 
                    onClick={handleOpenSideBar}
                    className={ activeMenu === 'about'? "active" : ""}
                    > About me 
                </Link>

                <Link 
                    scroll={false} 
                    href="#skills" 
                    onClick={handleOpenSideBar}
                    className={ activeMenu === 'skills'? "active" : ""}
                    > Skills 
                </Link>

                <Link  
                    scroll={false}
                    href="#projects" 
                    onClick={handleOpenSideBar}
                    className={ activeMenu === 'projects'? "active" : ""}
                    > Projects 
                </Link>

                <Link 
                    scroll={false} 
                    href="#experience" 
                    onClick={handleOpenSideBar}
                    className={ activeMenu === 'experience'? "active" : ""}
                    > Experience 
                </Link>
            </nav>
            <div className={toggleMenu? 'icon icon-active': 'icon'} onClick={handleOpenSideBar}>
                <div className="hamburguer"></div>
            </div>
        </HeaderContainer>
    )
}
