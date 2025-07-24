import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Tourism Canmore Kananaskis",
      subtitle: "Stratégie Social Media",
      description: "Développement de la stratégie de contenu pour promouvoir le tourisme outdoor dans les Rocheuses canadiennes. Création de contenus visuels captivants et gestion des campagnes de sensibilisation.",
      image: "/lovable-uploads/95daa73a-ba8d-4fdc-8056-e6160f661417.png",
      logo: "/lovable-uploads/f97780de-9feb-4fc8-8e11-72a1bf3a97cc.png",
      tags: ["Social Media", "Tourisme", "Outdoor", "Contenu Visuel"]
    },
    {
      title: "DR Recrutement International",
      subtitle: "Landing Pages & Stratégie Marketing",
      description: "Création de landing pages optimisées pour l'acquisition de talents et développement de la stratégie marketing digital pour le recrutement international au Canada.",
      logo: "/lovable-uploads/554d2fff-ff88-4b03-8556-6791dc16499a.png",
      tags: ["Landing Pages", "Recrutement", "SEO", "Conversion"]
    },
    {
      title: "AGS ENR",
      subtitle: "Stratégie de Communication Régionale",
      description: "Mise en place d'une stratégie de communication ciblée pour la région Sud-Ouest, activation du bouche-à-oreille et création d'interviews vidéo pour renforcer la crédibilité.",
      logo: "/lovable-uploads/85523f03-c92b-4831-a372-0246a3339f60.png",
      tags: ["Communication", "Vidéo", "B2B", "Énergie"]
    },
    {
      title: "Groupe Lang & Associés",
      subtitle: "Expertise Automobile",
      description: "Développement de l'identité de marque et stratégie de communication pour ce groupe spécialisé dans l'expertise automobile.",
      logo: "/lovable-uploads/9e0cfa91-fa36-4b65-80a6-45fc4350af7f.png",
      tags: ["Branding", "Automobile", "B2B", "Expertise"]
    },
    {
      title: "Identité Visuelle & Branding",
      subtitle: "Création de logos sur mesure",
      description: "Conception d'identités visuelles complètes pour diverses entreprises, de la TPE à la PME, avec une approche créative et stratégique.",
      logo: "/lovable-uploads/497dac82-e365-43e2-9ca4-d5af6e55b2aa.png",
      tags: ["Logo", "Branding", "Identité", "Design"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background-warm/10">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-dark mb-6">
            Ils m'ont fait confiance et ont vu leurs <span className="text-secondary">résultats décoller</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment j'ai aidé des marques outdoor, des TPE ambitieuses et des entrepreneurs 
            à développer leur visibilité et leurs ventes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-0 shadow-lg hover:shadow-xl transition-smooth overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                ) : (
                  <img 
                    src={project.logo} 
                    alt={project.title}
                    className="max-h-20 max-w-32 object-contain filter group-hover:scale-110 transition-smooth"
                  />
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-dark mb-2">
                  {project.title}
                </h3>
                <h4 className="font-body text-lg font-semibold text-primary mb-3">
                  {project.subtitle}
                </h4>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio complet */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-heading text-2xl font-bold text-dark mb-4">
              Voir mon portfolio complet
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Découvrez tous mes projets, études de cas détaillées et résultats obtenus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default"
                size="lg"
                className="bg-primary hover:bg-primary-light"
                asChild
              >
                <a href="https://cloecapdordy.notion.site/" target="_blank" rel="noopener noreferrer">
                  Portfolio Notion
                </a>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                asChild
              >
                <a href="https://www.behance.net/gallery/127985931/LOGO" target="_blank" rel="noopener noreferrer">
                  Créations Behance
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;