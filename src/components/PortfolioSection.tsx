import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const projects = [
    {
      title: "Tourism Canmore Kananaskis",
      subtitle: "Stratégie Social Media",
      description: "Développement et mise en œuvre de la stratégie social media sur Instagram, Facebook, X, YouTube et Pinterest pour renforcer l'attractivité de la destination et la cohérence de marque. Après avoir analysé nos résultats sur différentes plateformes, j'ai remarqué que notre audience recherchait davantage d'idées de randonnées. Ce réel présente 3 randonnées dans la région. Avec plus de 31 000 vues, il a permis de toucher de nouveaux publics et a atteint un taux d'engagement de plus de 5 %.",
      image: "/lovable-uploads/9eeeb140-b074-4753-a457-6a8d11e83897.png",
      tags: ["Social Media", "Tourisme", "Outdoor", "Contenu Visuel"],
      link: "https://cloecapdordy.notion.site/?p=81027734ab1d4735aa03a119363a305b&pm=c",
      company: "DMO Canmore Kananaskis",
      timeframe: "6 mois - Mars à Septembre 2024",
      instagramEmbed: "https://www.instagram.com/p/C9h3yMMIQ4I/",
      actions: [
        "Définition et adaptation de la stratégie social media",
        "Stratégie UGC",
        "Copywriting",
        "Création de contenu vidéo",
        "Rédaction d'articles de blog / SEO",
        "Analyse des performances"
      ]
    },
    {
      title: "DR Recrutement International",
      subtitle: "Landing Pages & Stratégie Marketing",
      description: "Définition et déploiement de la stratégie marketing multicanale (candidats et clients). Gestion des réseaux sociaux (Facebook, Instagram, LinkedIn), campagnes publicitaires, création de contenus, landing pages et blog. Développement de l'image de marque au Québec et en Europe.",
      image: "/lovable-uploads/3fa908d1-350b-4388-9af7-3bb3b04f4841.png",
      tags: ["Landing Pages", "Recrutement", "SEO", "Conversion"],
      link: "https://cloecapdordy.notion.site/?p=d2f5d12ee2b6491897590d4e96b9bcd9&pm=c",
      company: "DR Recrutement International",
      timeframe: "12 mois",
      actions: [
        "Nouveau branding",
        "Création d'une landing page dédiée aux professionnels",
        "Publicité (presse écrite et médias en ligne)",
        "Optimisation des formulaires d'acquisition",
        "Réseaux sociaux",
        "Rédaction de contenus pour le blog optimisé SEO",
        "Campagnes d'emailing"
      ]
    },
    {
      title: "Campinfo AGS/ENR",
      subtitle: "Stratégie Communication & YouTube",
      description: "Déploiement de campagnes marketing digitales, incluant la création de contenus, l'animation des pages d'atterrissage, la production de supports commerciaux (témoignages clients, outils d'aide à la vente) et la mise en place de challenges internes pour dynamiser les équipes.",
      image: "/lovable-uploads/ceb6d50b-aff2-4aae-8003-c74d10932def.png",
      tags: ["Communication", "Vidéo", "YouTube", "B2B", "Énergie"],
      link: "https://cloecapdordy.notion.site/?p=f323c84549024c018a6e0c99f134246d&pm=c",
      videoLink: "https://www.youtube.com/watch?v=a6kdVSiRUDc",
      actions: [
        "Gestion des réseaux sociaux",
        "Création de vidéos témoignages clients",
        "Mise en place de partenariats avec des clubs sportifs locaux",
        "Développement de la communication interne (challenges commerciaux)",
        "Lancement de campagnes d'e-mailing",
        "Réalisation de campagnes Social Ads"
      ]
    },
    {
      title: "Groupe Lang & Associés",
      subtitle: "Expertise Automobile",
      description: "Conception et déploiement de la stratégie de communication du Groupe Lang & Associés, avec la création de contenus de marque, l'organisation d'événements professionnels, et la production de présentations corporate pour soutenir son développement et affirmer son positionnement sur le marché.",
      image: "/lovable-uploads/836b1a65-55de-46d0-87ee-bb60402bf22b.png",
      tags: ["Branding", "Automobile", "B2B", "Expertise"],
      link: "https://cloecapdordy.notion.site/?p=81a2a2c1242d458b879a216051968f75&pm=c",
      actions: [
        "Etablissement d'une ligne éditoriale",
        "Gestion des réseaux sociaux",
        "Ecriture et mise en page du journal du groupe",
        "Montage vidéo",
        "Communication externe et interne (Rôle de porte parole)",
        "Gestion des événements"
      ]
    },
    {
      title: "Identité Visuelle & Branding",
      subtitle: "Création de logos sur mesure",
      description: "🔍 Plonger dans l'univers de la marque ✨ Créer un logo unique et cohérent, reflet fidèle de l'essence de l'entreprise 🚀 Faire émerger une identité forte, authentique et mémorable, en phase avec les ambitions de l'entreprise",
      image: "/lovable-uploads/Illustration.jpg",
      tags: ["Logo", "Branding", "Identité", "Design"],
      link: "https://www.behance.net/gallery/127985931/LOGO"
    },
    {
      title: "Création de contenus / Vidéos",
      subtitle: "Production vidéo & contenus courts",
      description: "🎥 Conception et réalisation de vidéos : interviews, mini-formats, teasers, présentations, tutoriels… 📱 Création de contenus courts et percutants (shorts YouTube, reels Instagram, TikTok) adaptés aux codes des plateformes ✍️ Écriture de scripts clairs et engageants, pensés pour l'émotion, la mémorisation ou l'action",
      image: "/lovable-uploads/content-creation-videos.png",
      tags: ["Vidéo", "Content Creation", "Script", "Social Media"],
      link: "https://www.canva.com/design/DAGmA0RLXBI/W8Y-Gx7qZGL9irjneYjSUw/view?utm_content=DAGmA0RLXBI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h21cb6e68fd"
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
            <Card 
              key={index} 
              className="bg-card border-0 shadow-lg hover:shadow-xl transition-smooth overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="block">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <span className="text-white font-semibold bg-black/50 px-4 py-2 rounded-full">
                      Voir les détails →
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold text-dark mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <h4 className="font-body text-lg font-semibold text-primary mb-3">
                    {project.subtitle}
                  </h4>
                  <p className="font-body text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.videoLink && (
                    <div className="pt-2 border-t border-border/20">
                      <a 
                        href={project.videoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 text-sm font-medium transition-smooth"
                        onClick={(e) => e.stopPropagation()}
                      >
                        🎥 Voir l'interview YouTube
                      </a>
                    </div>
                  )}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={selectedProject}
          />
        )}

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