import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-light">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <div className="text-primary-foreground">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Prêt·e à propulser votre <span className="text-secondary">marque</span> ?
          </h2>
          
          <p className="font-body text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Un appel gratuit pour définir vos besoins, poser vos questions 
            et repartir avec des idées concrètes.
          </p>

          {/* Bénéfices de l'appel */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-heading text-lg font-semibold mb-2">Audit gratuit</h3>
              <p className="font-body text-sm opacity-90">
                Analyse de votre communication actuelle et identification des opportunités
              </p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-heading text-lg font-semibold mb-2">Conseils personnalisés</h3>
              <p className="font-body text-sm opacity-90">
                Des recommandations concrètes adaptées à votre secteur et vos objectifs
              </p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-heading text-lg font-semibold mb-2">Plan d'action</h3>
              <p className="font-body text-sm opacity-90">
                Une roadmap claire pour développer votre visibilité et vos ventes
              </p>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="mb-8">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-12 py-4 text-xl font-bold transition-smooth shadow-lg hover:shadow-xl"
              asChild
            >
              <a href="https://calendly.com/capdordycloe/30min" target="_blank" rel="noopener noreferrer">
                Réserver un appel découverte
              </a>
            </Button>
          </div>

          {/* Informations supplémentaires */}
          <div className="text-sm opacity-75 space-y-2">
            <p>✅ Appel de 30 minutes • ✅ Sans engagement • ✅ Conseils personnalisés</p>
            <p>
              Ou contactez-moi directement :{" "}
              <a href="mailto:capdordycloe@gmail.com" className="underline hover:no-underline">
                capdordycloe@gmail.com
              </a>
              {" "}•{" "}
              <a href="tel:+33666823543" className="underline hover:no-underline">
                +33 6 66 82 35 43
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;