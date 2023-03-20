import { FooterContainer } from "../../styles/components/Footer.styles"
import { BsLinkedin,BsGithub, BsWhatsapp } from "react-icons/bs";
import { FaDiscord, FaFacebookSquare } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

export function Footer() {
    return (
        <FooterContainer>
            <Slide direction="left">
            Designed and developed by Junio Batista © 
            </Slide>
            <Slide direction="right">
                <div className="social-media">
                    <span>Get in touch:</span>
                    <div>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <BsWhatsapp/>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin />

                        </a>

                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <BsGithub/>
                        </a>

                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaDiscord/>
                        </a>
                        
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaFacebookSquare/>
                        </a>

                    </div>
                </div>
            </Slide>
        </FooterContainer> 
    )
}