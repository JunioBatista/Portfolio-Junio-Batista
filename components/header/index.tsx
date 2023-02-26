
import logo from '../../assets/logo.png'
import Image from "next/image";
import { HeaderContainer } from '../../src/styles/components/Header';

export function Header() {
    return (
    <HeaderContainer>
        <Image className="logo" src={logo} alt="Logo" />
        <nav>
            <ul>
                <li className="home"> Home </li>
                <li className="about"> About me </li>
                <li className="stacks"> Skills </li>
                <li className="stacks"> Certifications </li>
                <li className="projects"> Projects </li>
                <li className="projects"> Experience </li>
            </ul>
        </nav>
    </HeaderContainer>)
}