import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Gallery from "@/components/sections/gallery";
import Patent from "@/components/sections/patent";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Patent />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
