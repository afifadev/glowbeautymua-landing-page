import portfolioBridal from "@/assets/portfolio-bridal.jpg";
import portfolioParty from "@/assets/portfolio-party.jpg";
import portfolioNatural from "@/assets/portfolio-natural.jpg";
import portfolioGraduation from "@/assets/portfolio-graduation.jpg";

const portfolioItems = [
  {
    image: portfolioBridal,
    title: "Bridal Makeup",
    category: "Wedding",
  },
  {
    image: portfolioParty,
    title: "Glamorous Party Look",
    category: "Party",
  },
  {
    image: portfolioNatural,
    title: "Natural Beauty",
    category: "Everyday",
  },
  {
    image: portfolioGraduation,
    title: "Fresh Graduation Look",
    category: "Wisuda",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Hasil <span className="text-gradient italic">Karya</span> Kami
          </h2>
          <p className="text-muted-foreground text-lg">
            Setiap wajah adalah kanvas unik yang kami percantik dengan keahlian
            dan passion
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary-foreground/80 text-sm font-medium">
                  {item.category}
                </span>
                <h3 className="font-display text-xl text-primary-foreground font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
