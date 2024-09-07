import About from "@/components/home/About";
import Apponitment from "@/components/home/Appointment";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Team from "@/components/home/Team";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Team />
      <Apponitment />
    </main>
  );
}
