import Head from "next/head";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AboutMain from "../components/AboutUs/AboutMain";

export default function Home() {
 
  return (
    <div className="bg-[#F5F5F5]">
      <Header color />
      <AboutMain />
      <Footer />
    </div>
  );
}
