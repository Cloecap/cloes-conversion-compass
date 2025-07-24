import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-4 py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          {/* Badges de confiance */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              ✅ +5 ans d'expérience
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              🏔️ Spécialiste outdoor & TPE
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              ⚡ Réponse sous 48h
            </Badge>
          </div>

          {/* Titre principal */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-dark leading-tight">
            🚀 Une communication claire et stratégique pour faire{" "}
            <span className="text-primary">décoller</span> votre business.
          </h1>

          {/* Sous-titre */}
          <p className="font-body text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Je vous accompagne dans la création de vos contenus, l'élaboration de votre stratégie 
            et le développement de votre visibilité — sur les réseaux, sur le web et partout ailleurs.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-4 text-lg font-semibold transition-smooth"
              asChild
            >
              <a href="https://calendly.com/capdordycloe/30min?month=2025-07&date=2025-07-29" target="_blank" rel="noopener noreferrer">
                Réserver un appel découverte
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-smooth"
              asChild
            >
              <a href="#portfolio">
                Voir comment j'ai aidé d'autres marques à rayonner
              </a>
            </Button>
          </div>

          {/* Contact rapide */}
          <div className="pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              Ou contactez-moi directement :{" "}
              <a href="mailto:capdordycloe@gmail.com" className="text-primary hover:underline">
                capdordycloe@gmail.com
              </a>
              {" "}•{" "}
              <a href="tel:+33666823543" className="text-primary hover:underline">
                +33 6 66 82 35 43
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;