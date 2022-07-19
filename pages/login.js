import Head from 'next/head'
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Login from "../components/Auth/Login";

export default function Login() {
  return (
    <div className="">
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by leopard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  );
}
