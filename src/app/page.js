import Explore from "@/components/Explore";
import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Slider from "@/components/Slider";
import Depoiments from "@/components/Depoiments";
import Features from "@/components/Features";
import SignUp from "@/components/SignUp";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FAQ />
      <Slider />
      <Explore />
      <Info />
      <Depoiments />
      <Features />
      <SignUp />
    </>
  );
}
