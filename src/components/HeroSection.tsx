import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-mua.jpg";

const HeroSection = () => {
  const whatsappNumber = "6208388603780";
  const whatsappMessage = "Halo, saya tertarik dengan jasa makeup Anda!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Make Up Artist"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Make Up Artist
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            Tampil <span className="text-gradient italic">Memukau</span> di Hari
            Spesialmu
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed animate-fade-in-delay">
            Kami hadir untuk mewujudkan tampilan makeup impianmu. Dari makeup
            natural hingga glam, setiap sentuhan adalah karya seni.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="whatsapp" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Booking via WhatsApp
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#portfolio">Lihat Portfolio</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
