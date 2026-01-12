import React from "react";
import Header from "../components/Header";
import MainHome from "../components/MainHome";
import ServicesBanner from "../components/ServicesBanner";
import Done from "../components/Done";
import CustomersReview from "../components/CustomersReview";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <MainHome />
      <ServicesBanner />
      <Done />
      <CustomersReview />
      <Footer />
    </>
  );
}
