import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { EcosystemSection } from '@/components/sections/ecosystem-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { ImpactSection } from '@/components/sections/impact-section'
import { RegistrationSection } from '@/components/sections/registration-section'
import { InvestorSection } from '@/components/sections/investor-section'
import { NewsSection } from '@/components/sections/news-section'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      
      <section id="about" className="scroll-mt-20">
        <AboutSection />
      </section>
      
      <section id="ecosystem" className="scroll-mt-20">
        <EcosystemSection />
      </section>
      
      <section id="features" className="scroll-mt-20">
        <FeaturesSection />
      </section>
      
      <section id="impact" className="scroll-mt-20">
        <ImpactSection />
      </section>
      
      <section id="registration" className="scroll-mt-20">
        <RegistrationSection />
      </section>
      
      <section id="investor" className="scroll-mt-20">
        <InvestorSection />
      </section>
      
      <section id="news" className="scroll-mt-20">
        <NewsSection />
      </section>
    </main>
  )
}
