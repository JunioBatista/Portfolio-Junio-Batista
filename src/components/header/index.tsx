import logo from '/public/images/logo.png';
import Image from "next/image";
import { HeaderContainer } from '../../styles/components/Header.styles';

export function Header() {
    return (
    <HeaderContainer>
        <Image className="logo" src={logo} alt="Logo" />
        <nav>
            <a className="home active"> Home </a>
            <a className="about"> About me </a>
            <a className="stacks"> Skills </a>
            <a className="stacks"> Certifications </a>
            <a className="projects"> Projects </a>
            <a className="projects"> Experience </a>
        </nav>
    </HeaderContainer>)
}