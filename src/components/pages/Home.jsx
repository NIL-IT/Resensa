import React from "react";
import Banner from "../shared/Banner";
import Advantages from "../shared/Advantages";
import ItemsList from "../shared/ItemsList";
import { data } from "../../utils/data";
import Calculator from "../shared/Сalculator";
import About from "../shared/About";
import News from "../shared/News";
import Partners from "../shared/Partners";
import Objects from "../shared/Objects";
import Footer from "../shared/Footer";

export default function Home() {
  return (
    <main>
      <Banner />
      <Advantages />
      <ItemsList list={data.equipment} />
      <ItemsList list={data.solutions} />
      <Calculator />
      <About />
      <News />
      <Partners />
      <Objects />
      <Footer />
    </main>
  );
}
