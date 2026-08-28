import { ScrollProgress } from '@/components/scroll-progress';
import { Navbar } from '@/components/navbar';
import { BackToTop } from '@/components/back-to-top';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Work } from '@/components/sections/work';
import { Services } from '@/components/sections/services';
import { Process } from '@/components/sections/process';
import { Deliverables } from '@/components/sections/deliverables';
import { Stats } from '@/components/sections/stats';
import { Testimonials } from '@/components/sections/testimonials';
import { CTA } from '@/components/sections/cta';
import { FAQ } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Services />
        <Process />
        <Deliverables />
        <Stats />
        <Testimonials />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
