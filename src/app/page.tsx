import AgeGate from "@/components/AgeGate";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Numbers from "@/components/Numbers";
import Differentials from "@/components/Differentials";
import ContactForm from "@/components/ContactForm";
import CareersForm from "@/components/CareersForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AgeGate />
      <Header />
      <main>
        <Hero />
        <About />
        <Brands />
        <Numbers />
        <Differentials />
        <ContactForm />
        <CareersForm />
      </main>
      <Footer />
    </>
  );
}
