import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Curiosity } from "@/components/Curiosity";
import { Benefits } from "@/components/Benefits";
import { Exclusivity } from "@/components/Exclusivity";
import { SocialProof } from "@/components/SocialProof";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Curiosity />
        <Benefits />
        <Exclusivity />
        <SocialProof />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;