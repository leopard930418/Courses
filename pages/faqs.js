import Head from "next/head";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FaqMain from "../components/Faqs/FaqMain";
import Faq from "../components/Courses/Faq";

export default function Home() {
  return (
    <div className="bg-[#F5F5F5]">
      <Header color />
      <FaqMain />
      <Faq />
      <Footer />
    </div>
  );
}
