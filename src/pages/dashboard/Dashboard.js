import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Tabs from "../../components/tab/Tabs";
import { DashboardWrapper } from "./Dashoboard.styled";

export default function Dashboard() {
  return (
    // This div wrapper navbar and main content
    <DashboardWrapper>
      <Navbar />
      {/* main containers will have 2 sections, one is  */}

      <Tabs />
    </DashboardWrapper>
  );
}
