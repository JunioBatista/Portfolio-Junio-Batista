
import React from "react";
import Image from "next/image";

import profilePicture from '../../public/images/euport.png';
import { HomeMainContainer } from "../styles/pages/home/Home.styles";
import { Fade } from "react-awesome-reveal";
import { ProgrammingToolsCard } from "../components/card-programming-tools";

export default function Home() {

  let tools = [
    {
      id:1,
      name: 'React',
      image:'src'
    }
  ]

  return (
    <Fade>
      <HomeMainContainer>
        <div className="profile"> 

            <Fade>
              <h1 className="main-title"> Hi! I Am</h1>
            </Fade>
            <h1 className="name"> Junio Batista </h1>.

        </div>
      </HomeMainContainer>
    </Fade>
  )
}

