import { About } from "@/components/About";
import { Atmosphere } from "@/components/Atmosphere";
import { DayNight } from "@/components/DayNight";
import { FoodGallery } from "@/components/FoodGallery";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Reservation } from "@/components/Reservation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ShopInfo } from "@/components/ShopInfo";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <About />
        <FoodGallery />
        <DayNight />
        <Atmosphere />
        <ShopInfo />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
