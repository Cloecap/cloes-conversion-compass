import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Contenu textuel */}
          <div className="col-span-8 space-y-8">
            {/* Titre principal */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight">
              🚀 Une communication claire et stratégique pour faire{" "}
              <span className="text-primary">décoller</span> votre business.
            </h1>

            {/* Sous-titre */}
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              Je vous accompagne dans la création de vos contenus, l'élaboration de votre stratégie et le développement de votre visibilité — sur les réseaux, sur le web et partout ailleurs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg font-semibold transition-smooth"
                asChild
              >
                <a href="https://calendly.com/capdordycloe/30min" target="_blank" rel="noopener noreferrer">
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
                  Voir le portfolio
                </a>
              </Button>
            </div>

            {/* Centered text */}
            <div className="text-center pt-8">
              <p className="text-lg font-medium text-muted-foreground">
                ✅ +5 ans d'expérience | 🏔️ Spécialiste outdoor & TPE | ⚡ Réponse sous 48h
              </p>
            </div>
          </div>

          {/* Photo personnelle intégrée */}
          <div className="col-span-4 relative">
            <div className="relative">
              <img 
                src="/lovable-uploads/Image Cloé.jpg" 
                alt="Cloé Capdordy - Spécialiste marketing et communication digitale"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover max-h-80 lg:max-h-96"
              />
              {/* Overlay décoratif */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full opacity-10 blur-xl"></div>
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