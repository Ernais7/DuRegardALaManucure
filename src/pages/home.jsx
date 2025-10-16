import React from "react";
import Header from "../components/Header";
import MainHome from "../components/MainHome";
import ServicesBanner from "../components/ServicesBanner";
import Done from "../components/Done";

export default function Home() {
  return (
    <>
      <Header />
      <MainHome />
      <ServicesBanner />
      <Done />
    </>
  );
}
