import { Check } from "lucide-react";

const highlights = [
  "Pengalaman 5+ tahun di industri kecantikan",
  "Menggunakan produk makeup berkualitas tinggi",
  "Layanan home service tersedia",
  "Garansi touch up selama acara berlangsung",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
              Tentang Kami
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Lebih dari Sekedar{" "}
              <span className="text-gradient italic">Makeup</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Kami percaya bahwa setiap wanita memiliki kecantikan uniknya
              masing-masing. Tugas kami adalah menonjolkan kecantikan alami Anda
              dengan sentuhan profesional yang disesuaikan dengan karakter dan
              keinginan Anda.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Dengan pengalaman menangani ratusan klien, kami siap menjadi
              partner kecantikan Anda di setiap momen spesial.
            </p>
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full gradient-rose flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-secondary">
              <div className="w-full h-full gradient-blush flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="font-display text-6xl md:text-7xl font-bold text-gradient mb-2">
                    500+
                  </p>
                  <p className="text-muted-foreground text-lg">Klien Bahagia</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-lg p-6 border border-border/50">
              <p className="font-display text-4xl font-bold text-gradient mb-1">
                5+
              </p>
              <p className="text-muted-foreground text-sm">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
