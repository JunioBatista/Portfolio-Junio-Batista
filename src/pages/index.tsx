
import React from "react";
import Image from "next/image";

import profilePicture from '../../assets/euPortCopia.png'
import { HomeMainContainer } from "../styles/pages/home/Home.styles";
import { Fade,JackInTheBox } from "react-awesome-reveal";
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
        <div className="presentation">
          <Fade>
            <h1 className="main-title"> - Hi! I Am</h1>
          </Fade>
          <div className="typing">
            <h1 className="name"> Junio Batista </h1>.
          </div>
          <Fade delay={1500}>
            <p className="profession"> Software Developer ( Web Full Stack ) </p>
          </Fade>
          <div className="programming-tools">
          { tools.map((item)=> { return <ProgrammingToolsCard key={item.id} tool={item} />
          })
          }
          </div>
        </div>
        <div className="photo"> 
        <Image className="perfilImage" src={profilePicture} alt="minha foto de perfil" />
        </div>
      </HomeMainContainer>
    </Fade>
  )
}

