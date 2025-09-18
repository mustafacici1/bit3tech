import { About } from "@/components/about";
import { Background } from "@/components/background";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { Team } from "@/components/team";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <div className="relative h-screen w-full">
        <Background src="/arkaplan2.mp4" placeholder="/arkaplan.png" />
        <Hero />
      </div>
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}