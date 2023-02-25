import Head from "next/head";
import React from "react";
import { Header } from "../components/header";
import { HomeMainContainer } from "../styles/pages/Home/Home.styles";


export default function Home() {
  return (
    <HomeMainContainer>
      <Head>
        <title>  JBdev | Inicio </title>
      </Head>
      <Header />
    </HomeMainContainer>
  )
}
