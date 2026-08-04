import React from "react";
import MainHome from "../components/MainHome";
import ServicesBanner from "../components/ServicesBanner";
import Done from "../components/Done";
import CustomersReview from "../components/CustomersReview";

export default function Home() {
  return (
    <>
      <MainHome />
      <ServicesBanner />
      <Done />
      <CustomersReview />
    </>
  );
}
