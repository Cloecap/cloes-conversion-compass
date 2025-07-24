import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: "✍️",
      title: "Rédaction de contenu web",
      description: "Pages, blog, landing pages optimisées pour convertir",
      details: ["Pages de vente persuasives", "Articles de blog SEO", "Landing pages haute conversion"]
    },
    {
      icon: "🎨",
      title: "Création de visuels & templates",
      description: "Design impactant pour vos réseaux sociaux",
      details: ["Templates Instagram/LinkedIn", "Visuels publicitaires", "Identité visuelle cohérente"]
    },
    {
      icon: "🎬",
      title: "Vidéos courtes pour campagnes",
      description: "Contenus vidéo optimisés pour la publicité",
      details: ["Vidéos publicitaires", "Reels Instagram", "Contenus TikTok/YouTube Shorts"]
    },
    {
      icon: "🖨️",
      title: "Supports imprimés",
      description: "Communication print professionnelle",
      details: ["Flyers et brochures", "Cartes de visite", "Supports événementiels"]
    },
    {
      icon: "🧭",
      title: "Conseil stratégique global",
      description: "Vision 360° de votre communication",
      details: ["Stratégie événementielle", "Stratégie digitale complète", "Conseil en identité de marque"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-dark mb-6">
            Une approche <span className="text-primary">360°</span> de votre communication
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            De la stratégie à la réalisation, je vous accompagne sur tous les aspects 
            de votre communication pour une cohérence parfaite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border border-border hover:border-primary/50 transition-smooth group">
              <CardHeader className="pb-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-smooth">
                  {service.icon}
                </div>
                <CardTitle className="font-heading text-xl text-dark">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="font-body text-sm text-dark flex items-center">
                      <span className="text-primary mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 text-primary-foreground">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Besoin d'un service spécifique ?
            </h3>
            <p className="font-body text-lg mb-6 opacity-90">
              Chaque projet est unique. Discutons de vos besoins spécifiques 
              lors d'un appel découverte gratuit.
            </p>
            <a 
              href="https://calendly.com/capdordycloe/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-semibold transition-smooth"
            >
              Discuter de mon projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;