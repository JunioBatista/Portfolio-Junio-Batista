
import React from "react";

import { HomeMainContainer, FirstSection} from "../styles/pages/home/Home.styles";
import { Fade, Slide } from "react-awesome-reveal";
import Lottie from 'react-lottie';
import animationData from '../data/develop.json';
import Image from "next/image";
import { DefaultContainer } from "../styles/globals.styles";
import { BsDownload } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

export default function Home() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <DefaultContainer>
      <HomeMainContainer>
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
            <Image className="profile-picture" height={270} width={255} src="/images/perfil.png" alt="minha foto de rosto" />
            <h1 className="iam">I Am </h1>
            <h1 className="name"> Junio Batista </h1>
            <h1 className="profession">Full Stack Developer </h1>
          </div>
          <div className="buttons">
            <button> 
              <span> <BsDownload/></span> Download CV
            </button>
            <button>
              <span><CiMail/></span> Text me
            </button>
          </div>

        </FirstSection>
        <div className="animation">
          <Slide direction="right">
            <Lottie 
              options={defaultOptions}
              height={650}
              width={650}
            />
          </Slide>
        </div>
      </HomeMainContainer>
    </DefaultContainer>
  )
}

