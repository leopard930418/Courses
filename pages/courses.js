import Head from "next/head";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Coursemain from "../components/Courses/Coursemain";
import JoinUs from "../components/Courses/JoinUs";
import Faq from "../components/Courses/Faq";

export default function Home() {
 
  return (
    <div className="bg-[#F5F5F5]">
      <Header color />
      <Coursemain />
      <JoinUs />
      <Faq />
      <Footer />
    </div>
  );
}
