import Head from "next/head";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CourseMain from "../components/Courses/CourseMain";
import JoinUs from "../components/Courses/JoinUs";
import Faq from "../components/Courses/Faq";

export default function Courses() {
  return (
    <div className="bg-[#F5F5F5]">
      <Head>
        <title>Courses</title>
        <meta name="description" content="Generated by leopard" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header color />
      <CourseMain />
      <JoinUs
        imgsrc="/images/CoursesJoinUs.svg"
        title="Want to Control your Future?"
        description="Lörem ipsum reass spengen nyng att betredes. Pugisk gyna, deng med preheten. Homosade lafan. Or jyr obelt. Makror nidyda parapus rår. Evis poteligen. Desår kontranas josk. Intrader bir. "
        btncolor="black"
      />
      <Faq />
      <Footer />
    </div>
  );
}
