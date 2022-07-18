import Head from "next/head";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProgramsMain from "../components/Programs/ProgramsMain";
import BercDemo from "../components/Programs/BercDemo";

export default function Home() {
  return (
    <div className="bg-[#F5F5F5]">
      <Header color />
      <ProgramsMain />
      <BercDemo />
      <Footer />
    </div>
  );
}
