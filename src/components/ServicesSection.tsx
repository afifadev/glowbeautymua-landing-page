import { Sparkles, Heart, Star, Crown } from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Makeup Pengantin",
    description:
      "Tampilan sempurna untuk hari bahagiamu dengan makeup yang tahan lama dan elegan.",
    price: "Mulai dari Rp 2.500.000",
  },
  {
    icon: Star,
    title: "Makeup Pesta",
    description:
      "Glam look yang memukau untuk acara spesial, ulang tahun, atau gathering.",
    price: "Mulai dari Rp 500.000",
  },
  {
    icon: Sparkles,
    title: "Makeup Wisuda",
    description:
      "Tampil cantik dan fresh di momen kelulusan yang tak terlupakan.",
    price: "Mulai dari Rp 350.000",
  },
  {
    icon: Heart,
    title: "Makeup Natural",
    description:
      "Look natural yang mempercantik fitur wajahmu untuk sehari-hari atau prewedding.",
    price: "Mulai dari Rp 300.000",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Layanan Kami
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Pilihan <span className="text-gradient italic">Paket</span> Makeup
          </h2>
          <p className="text-muted-foreground text-lg">
            Berbagai pilihan layanan makeup profesional untuk setiap kebutuhanmu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-rose flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <p className="text-primary font-semibold text-sm">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
