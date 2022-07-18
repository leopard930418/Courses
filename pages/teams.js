import Head from "next/head";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import BercDemo from "../components/Programs/BercDemo";
import TeamsMain from "../components/Teams/TeamsMain";

export default function Home() {
  return (
    <div className="bg-[#F5F5F5]">
      <Header color />
      <TeamsMain />
      <BercDemo />
      <Footer />
    </div>
  );
}
