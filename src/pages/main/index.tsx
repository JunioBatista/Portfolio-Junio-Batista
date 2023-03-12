import Image from "next/image"
import { Fade, Slide } from "react-awesome-reveal"
import { DefaultContainer } from "../../styles/globals.styles"
import { FirstSection, HomeMainContainer } from "../../styles/pages/home/Home.styles"
import { BsDownload } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";

export default function Main () {

    return(
    <DefaultContainer>
      <HomeMainContainer id="home">
        <FirstSection>
          <Fade>
            <div className="hello">
              <Fade>
                <h1> Hello! 👋 </h1>
                <p>Welcome to my page!</p>
              </Fade>
            </div> 
          </Fade>

          <div className="presentation">
            <Image className="profile-picture" height={100} width={100} src="/images/perfil.png" alt="minha foto de rosto" />
            <h1 className="iam">I Am </h1>
            <h1 className="name"> Junio Batista </h1>

            <div className="buttons">
              <button> 
                <span> <BsDownload/></span> Download CV
              </button>
              <button>
                <span><CiMail/></span> Text me
              </button>
            </div>
          </div>
        </FirstSection>

        <button className="lang-toggle">
          English  <span> <GrLanguage color={'white'}/></span> 
        </button>



      </HomeMainContainer>
    </DefaultContainer>)
}