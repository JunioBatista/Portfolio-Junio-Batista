
import React from "react";

import { HomeMainContainer, FirstSection} from "../styles/pages/home/Home.styles";
import { Fade, Slide } from "react-awesome-reveal";


import Image from "next/image";
import { DefaultContainer } from "../styles/globals.styles";

import About from "./about";
import Main from "./main";


export default function Home() {


  return (
    <>
    <Main />
    <About/>
    </>
  )
}

