import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import Dataset from "@/components/sections/Dataset";
import Methodology from "@/components/sections/Methodology";
import Results from "@/components/sections/Results";
import RequestAccess from "@/components/sections/RequestAccess";
import Citation from "@/components/sections/Citation";
import Links from "@/components/sections/Links";
import Team from "@/components/sections/Team";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Overview />
        <Dataset />
        <Methodology />
        <Results />
        <RequestAccess />
        <Citation />
        <Links />
        <Team />
      </main>
      <Footer />
    </>
  );
}
