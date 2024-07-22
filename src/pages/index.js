import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header";
import { useEffect } from "react";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   
  useEffect(() => {
    const loadScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    loadScript("https://code.jquery.com/jquery-3.2.1.slim.min.js");
    loadScript("https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js");
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js");
  }, []);

  return (
    <>
      <Header/>
    </>
  );
}
