import "../styles/fonts.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Topbar from "./components/topbar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("loader");
      if (loader) loader.style.display = "none";
    }
  }, []);

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
