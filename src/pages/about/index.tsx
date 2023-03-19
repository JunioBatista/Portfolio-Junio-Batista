import { DefaultContainer } from "../../styles/globals.styles";
import { AboutContainer } from "../../styles/pages/about me/aboutMe.styles";

export default function About () {
    return (
    <DefaultContainer id="about">
        <AboutContainer>
            <div></div>
            <div className="section">
                <span className="hscroll-line"></span>
            </div>
            <div>
                <p>About!</p>
            </div>
        </AboutContainer>
    </DefaultContainer>)
}