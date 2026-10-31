import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Tools } from "./sections/Tools";
import { HowItWorks } from "./sections/HowItWorks";
import { Benefits } from "./sections/Benefits";
import { Pricing } from "./sections/Pricing";
import { Faq } from "./sections/Faq";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tools />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
