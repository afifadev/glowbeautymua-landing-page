import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Clock, Phone } from "lucide-react";

const ContactSection = () => {
  const whatsappNumber = "6208388603780";
  const whatsappMessage = "Halo, saya tertarik dengan jasa makeup Anda!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Hubungi Kami
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Siap Tampil <span className="text-gradient italic">Cantik</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Konsultasikan kebutuhan makeup Anda dengan kami. Kami siap membantu
            mewujudkan tampilan impian Anda!
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <div className="w-12 h-12 rounded-full gradient-rose flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Lokasi</h3>
              <p className="text-muted-foreground text-sm">
                Palu & Sekitarnya
                <br />
                Home service available
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <div className="w-12 h-12 rounded-full gradient-rose flex items-center justify-center mx-auto mb-4">
                <Clock className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Jam Kerja</h3>
              <p className="text-muted-foreground text-sm">
                Setiap Hari
                <br />
                06:00 - 22:00 WIB
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <div className="w-12 h-12 rounded-full gradient-rose flex items-center justify-center mx-auto mb-4">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Telepon</h3>
              <p className="text-muted-foreground text-sm">
                +62 838-8603-780
                <br />
                Fast Response
              </p>
            </div>
          </div>

          <Button variant="whatsapp" size="xl" asChild className="shadow-2xl">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6" />
              Chat di WhatsApp Sekarang
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
