import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Wijaya",
    role: "Pengantin",
    content:
      "Makeup-nya tahan seharian dari pagi sampai malam! Hasilnya natural tapi tetap glowing. Sangat puas dengan pelayanannya.",
    rating: 5,
  },
  {
    name: "Anita Kusuma",
    role: "Klien Wisuda",
    content:
      "Datang tepat waktu dan hasilnya sesuai ekspektasi. Foto wisuda saya jadi bagus semua. Terima kasih!",
    rating: 5,
  },
  {
    name: "Dewi Lestari",
    role: "Klien Pesta",
    content:
      "Suka banget sama hasil makeupnya. MUA-nya juga ramah dan sabar mendengarkan request saya. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rina Pratiwi",
    role: "Klien Lamaran",
    content:
      "Makeup lamaran saya cantik banget! Keluarga dan calon suami juga suka. Pasti bakal pakai lagi buat nikahan.",
    rating: 5,
  },
  {
    name: "Maya Sari",
    role: "Klien Prewedding",
    content:
      "Hasil prewedding-nya memuaskan! Makeup tahan lama walau outdoor seharian. Worth it banget!",
    rating: 5,
  },
  {
    name: "Fitri Handayani",
    role: "Klien Wisuda",
    content:
      "MUA-nya friendly dan pengertian. Makeup fresh dan natural, cocok banget sama karakter saya. Recommended!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Testimoni
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Kata <span className="text-gradient italic">Mereka</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Kepuasan klien adalah prioritas utama kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
