import { HeaderContainer } from "../../styles/components/Header";

export function Header() {
    return (
    <HeaderContainer>
        <p>Junior</p>
        <nav>
            <ul>
                <li className="home">Inicio</li>
                <li className="about">Sobre mim</li>
                <li className="stacks"> Tecnologias </li>
                <li className="stacks"> Formação </li>
                <li className="projects"> Projetos </li>
            </ul>
        </nav>
    </HeaderContainer>)
}