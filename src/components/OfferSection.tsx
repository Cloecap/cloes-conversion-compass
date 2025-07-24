import { Card, CardContent } from "@/components/ui/card";

const OfferSection = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Clarification de votre stratégie de contenu",
      description: "Structure claire et objectifs définis pour votre communication"
    },
    {
      icon: "💡",
      title: "Création visuelle et rédaction impactante",
      description: "Contenus créatifs qui captent l'attention et convertissent"
    },
    {
      icon: "🚀",
      title: "Lancement ou relance efficace de votre marque",
      description: "Stratégie complète pour faire décoller votre visibilité"
    },
    {
      icon: "🔍",
      title: "Optimisation SEO & visibilité en ligne",
      description: "Amélioration de votre référencement et présence digitale"
    },
    {
      icon: "📣",
      title: "Accompagnement réseaux sociaux & campagnes publicitaires",
      description: "Gestion stratégique de vos campagnes pour maximiser le ROI"
    }
  ];

  return (
    <section className="py-20 bg-background-warm/20">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Introduction du problème */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-dark mb-6">
            Vous publiez sans stratégie ? <br />
            <span className="text-secondary">Vous ne savez pas par où commencer</span> ni quoi déléguer ?
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-xl text-muted-foreground mb-8 leading-relaxed">
              Je vous aide à mettre de l'ordre dans vos idées, à structurer votre communication 
              et à créer du contenu qui sert vraiment vos objectifs.
            </p>
            
            {/* Mon + */}
            <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
              <h3 className="font-heading text-2xl font-semibold text-primary mb-4">Mon + :</h3>
              <p className="font-body text-lg text-dark">
                Une approche <strong>flexible, créative et humaine</strong>, toujours sur-mesure 
                et adaptée à votre budget.
              </p>
            </div>
          </div>
        </div>

        {/* Bénéfices clients */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card border-0 shadow-lg hover:shadow-xl transition-smooth">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Équation Hormozi visuelle */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
            <h3 className="font-heading text-2xl font-bold text-dark mb-6">
              L'équation d'une offre irrésistible
            </h3>
            <div className="font-body text-lg text-dark max-w-3xl mx-auto">
              <span className="font-semibold text-primary">RÉSULTATS DÉSIRÉS</span> × <span className="font-semibold text-secondary">VALEUR PERÇUE</span>
              <br />
              <div className="border-t border-dark/20 my-4 mx-20"></div>
              <span className="text-muted-foreground">TEMPS + EFFORT + DOUTE</span>
              <p className="mt-4 text-sm text-muted-foreground">
                = Une communication qui vous fait gagner du temps tout en multipliant vos résultats
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;