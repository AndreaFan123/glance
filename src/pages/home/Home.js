import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Tabs from "../../components/tab/Tabs";
import { HomeContainer } from "./Home.styled";

export default function Home() {
  return (
    // This div wrapper navbar and main content
    <HomeContainer>
      <Navbar />
      {/* main containers will have 2 sections, one is  */}

      <Tabs />
    </HomeContainer>
  );
}
