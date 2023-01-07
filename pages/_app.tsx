import "../styles/fonts.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Topbar from "./components/topbar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="page-layouts">
      <Topbar />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </div>
  );
}
