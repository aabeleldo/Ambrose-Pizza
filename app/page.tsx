import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import HoursSection from "@/components/HoursSection";
import FooterSection from "@/components/FooterSection";
import OrderSection from "@/components/OrderSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MenuSection />
      <OrderSection />
      <AboutSection />
      <HoursSection />
      <FooterSection />
    </main>
  );
}