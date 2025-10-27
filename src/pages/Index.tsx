import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Curiosity } from "@/components/Curiosity";
import { Benefits } from "@/components/Benefits";
import { Exclusivity } from "@/components/Exclusivity";
import { SocialProof } from "@/components/SocialProof";
import { Footer } from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Header className="bg-white/[0.88]" />
      <main>
        <Hero />
        <Curiosity />
        <Benefits />
        <Exclusivity />
        <SocialProof />
      </main>
      <Footer />
    </div>;
};
export default Index;