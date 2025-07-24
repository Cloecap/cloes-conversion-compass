import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <div className="space-y-8 lg:pr-8">
            {/* Badge principal */}
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              POUR LES MARQUES QUI VEULENT FAIRE BOUGER LES MONTAGNES
            </div>

            {/* Titre principal */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight">
              Je vous aide à raconter votre{" "}
              <span className="text-primary">aventure</span>.
            </h1>

            {/* Sous-titre */}
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              Communication, marketing et contenu pour les marques outdoor et les PME ambitieuses. 
              <span className="text-primary font-semibold">✏️ Gagnez en visibilité, crédibilité et clients</span> — sans vous perdre dans la technique.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold transition-smooth"
                asChild
              >
                <a href="https://calendly.com/capdordycloe/30min?month=2025-07&date=2025-07-29" target="_blank" rel="noopener noreferrer">
                  → Réserver un appel découverte
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-smooth"
                asChild
              >
                <a href="#portfolio">
                  📁 Voir mon portfolio
                </a>
              </Button>
            </div>

            {/* Badges de confiance */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Badge variant="outline" className="px-3 py-1 text-xs">
                ✅ +5 ans d'expérience
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-xs">
                🏔️ Spécialiste outdoor & TPE
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-xs">
                ⚡ Réponse sous 48h
              </Badge>
            </div>
          </div>

          {/* Photo personnelle intégrée */}
          <div className="relative lg:order-last">
            <div className="relative">
              <img 
                src="/lovable-uploads/03224d1c-b36a-42b5-8b64-0721f2c5c984.png" 
                alt="Cloé Capdordy dans la neige avec une veste orange Simond"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
              {/* Overlay décoratif */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-10 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Contact rapide en bas */}
        <div className="text-center mt-16 pt-8 border-t border-border/20">
          <p className="text-muted-foreground text-sm">
            Ou contactez-moi directement :{" "}
            <a href="mailto:capdordycloe@gmail.com" className="text-primary hover:underline font-medium">
              capdordycloe@gmail.com
            </a>
            {" "}•{" "}
            <a href="tel:+33666823543" className="text-primary hover:underline font-medium">
              +33 6 66 82 35 43
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;