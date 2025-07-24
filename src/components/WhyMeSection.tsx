import { Card, CardContent } from "@/components/ui/card";

const WhyMeSection = () => {
  const advantages = [
    {
      icon: "🧭",
      title: "Vision 360° du marketing",
      description: "Une approche globale qui connecte tous vos canaux de communication pour un impact maximal."
    },
    {
      icon: "🎯",
      title: "Création & stratégie sur mesure",
      description: "Chaque projet est unique. Je développe des solutions personnalisées qui correspondent à vos objectifs spécifiques."
    },
    {
      icon: "💰",
      title: "Adaptée à tous les budgets",
      description: "Des solutions flexibles et évolutives, que vous soyez une TPE en démarrage ou une PME établie."
    },
    {
      icon: "🌍",
      title: "Bilingue FR/EN, expérience internationale",
      description: "Une expertise qui s'étend au-delà des frontières, avec une compréhension des marchés Français et Canadiens."
    },
    {
      icon: "❤️",
      title: "Approche humaine, positive, orientée terrain",
      description: "Une collaboration basée sur l'écoute, la bienveillance et une parfaite compréhension de vos défis terrain."
    },
    {
      icon: "⚡",
      title: "Réactivité et proximité",
      description: "Réponse garantie sous 48h et un suivi personnalisé tout au long de nos collaborations."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-dark mb-6">
            Pourquoi travailler avec <span className="text-primary">moi</span> ?
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Plus qu'une prestataire, je deviens votre partenaire stratégique pour faire rayonner votre marque
            avec authenticité et efficacité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-card border border-border hover:border-primary/50 transition-smooth group">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-smooth">
                  {advantage.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-dark mb-4">
                  {advantage.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section différenciation */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 md:p-12 text-primary-foreground text-center">
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              La différence Cloé Capdordy
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-4">🏔️</div>
                <h4 className="font-heading text-xl font-semibold mb-2">Spécialiste Outdoor</h4>
                <p className="font-body opacity-90">
                  Je comprends l'univers de l'aventure et les codes qui parlent à votre audience
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="font-heading text-xl font-semibold mb-2">Expertise TPE/PME</h4>
                <p className="font-body opacity-90">
                  Des solutions adaptées aux défis spécifiques des petites et moyennes entreprises
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🎨</div>
                <h4 className="font-heading text-xl font-semibold mb-2">Créativité + Stratégie</h4>
                <p className="font-body opacity-90">
                  L'équilibre parfait entre créativité visuelle et performance marketing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;