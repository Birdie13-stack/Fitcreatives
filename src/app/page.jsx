'use client';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SecondHero from "@/components/SecondHero";
import Services from "@/components/Services";


export default function Home() {
  return (
    <div className="grid items-center justify-items-center p-4 sm:px-8 sm:py-4">
      <Header />
      <SecondHero />
      {/* <Hero /> */}
      <Services />
    </div>
  );
}
