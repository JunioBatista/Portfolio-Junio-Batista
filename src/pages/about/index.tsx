import { DefaultContainer } from "../../styles/globals.styles";
import { AboutContainer } from "../../styles/pages/about me/aboutMe.styles";

export default function About () {
    return (
    <DefaultContainer id="about">
        <AboutContainer>
            <div className="image-container">
                <div className="about__img">
                    <div className="margin-top"></div>
                    <div className="margin-bottom"></div>
                    <img src="./images/eu.jpg" alt="imagem minha de camisa social sentado com um copo na mão" />
                </div>
            </div>

            <div className="texts-container">
                <p>
                    I’m a Full Stack Developer located in Betim city in Minas Gerais. 
                </p>
                <p>
                    Well-organised person, problem solver, an employee with high attention to detail. A family person,
                    She spends her free time reading, cooking, and going on travel adventures whenever she is not making content or writing code.
                </p>
                <p>
                <a href="https://jacekjeznach.com/contact/" rel="contact">Let’s make something special.</a>
                </p>
            </div>
        </AboutContainer>
    </DefaultContainer>)
}