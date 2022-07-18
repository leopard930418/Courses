import Head from "next/head";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HistoryMain from "../components/History/Historymain";
import LastestNews from "../components/History/LastestNews";
import Teams from "../components/History/Teams";

export default function Home() {
  return (
    <div className="bg-[#F5F5F5]">
      <Header color />
      <HistoryMain />
      <LastestNews />
      <Teams />
      <Footer />
    </div>
  );
}
