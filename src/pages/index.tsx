
import React from "react";
import Image from "next/image";

import profilePicture from '../../assets/euPortCopia.png'
import { HomeMainContainer } from "../styles/pages/Home/Home.styles";
import { Fade,JackInTheBox } from "react-awesome-reveal";

export default function Home() {
  return (
    <Fade>
      <HomeMainContainer>
        <div className="presentation">
          <Fade>
            <h1 className="main-title"> - Hi! I Am</h1>
          </Fade>
          <div className="typing">
            <h1 className="name"> Junio Batista <span>:) </span> </h1>.
          </div>
          <Fade>
            <p className="profession"> Web Developer Full Stack </p>
          </Fade>
        </div>
        <div className="photo"> 
        <Image className="perfilImage" src={profilePicture} alt="minha foto de perfil" />
        </div>
      </HomeMainContainer>
    </Fade>
  )
}

