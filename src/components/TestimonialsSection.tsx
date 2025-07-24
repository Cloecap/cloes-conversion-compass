import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Julien SUAIRE",
      company: "Campinfo Services / AGS ENR",
      role: "Dirigeant",
      logo: "/lovable-uploads/85523f03-c92b-4831-a372-0246a3339f60.png",
      testimonial: "Cloe has very good skills in various social platforms for marketing purposes. She was able to create attractive and engaging content, beneficial for the company's image. She also efficiently managed advertising campaigns. Regarding her professionalism, communication, and collaboration within the team, Cloe was a solid member. She quickly established herself within the team, and her qualities were highly appreciated: proactive, dynamic, always having a positive attitude, attentive and willing to share, there is no shortage of positive elements to describe Cloe's attitude and work within our team.",
      rating: 5
    },
    {
      name: "Thomas ROMERO",
      company: "DR Recrutement",
      role: "Director",
      logo: "/lovable-uploads/554d2fff-ff88-4b03-8556-6791dc16499a.png",
      testimonial: "Cloé renewed our social network management (Linkedin; Facebook; Instagram) and took over the entire aesthetics and content of our website with the aim of making web navigation smoother and more efficient. She's a talented person with excellent initiative. Her ideas are always highly relevant, and she has excellent analytical and creative skills. She has an excellent command of all creative and communication tools. She excels in content creation and adapts very easily to the target audience. Despite the complexity of our topics, Cloé quickly adapted to our field of expertise. Above and beyond her professional skills, Cloé is a colleague with whom we take great pleasure in sharing our daily professional and personal lives. She's always in a good mood and very enthusiastic about taking on any new project. Cloé is passionate about her profession, and you can feel it every day. We can only recommend her application. You won't be disappointed.",
      rating: 5
    }
  ];

  const partners = [
    {
      name: "Tourism Canmore Kananaskis",
      logo: "/lovable-uploads/f97780de-9feb-4fc8-8e11-72a1bf3a97cc.png"
    },
    {
      name: "Groupe Lang & Associés",
      logo: "/lovable-uploads/9e0cfa91-fa36-4b65-80a6-45fc4350af7f.png"
    },
    {
      name: "AGS ENR",
      logo: "/lovable-uploads/85523f03-c92b-4831-a372-0246a3339f60.png"
    },
    {
      name: "DR Recrutement",
      logo: "/lovable-uploads/554d2fff-ff88-4b03-8556-6791dc16499a.png"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-2xl ${i < rating ? 'text-secondary' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-background-warm/20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-dark mb-6">
            Ce que disent mes <span className="text-secondary">clients</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Des témoignages authentiques de dirigeants qui ont vu leur business se transformer 
            grâce à une communication stratégique.
          </p>
        </div>

        {/* Témoignages détaillés */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-0 shadow-lg hover:shadow-xl transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.company}
                    className="h-12 w-auto object-contain mr-4"
                  />
                  <div>
                    <h4 className="font-heading text-lg font-bold text-dark">
                      {testimonial.name}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      {testimonial.role} - {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="font-body text-muted-foreground leading-relaxed italic">
                  "{testimonial.testimonial}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Logos partenaires */}
        <div className="text-center">
          <h3 className="font-heading text-2xl font-bold text-dark mb-8">
            Ils m'ont fait confiance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-smooth">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-16 w-auto object-contain filter hover:scale-110 transition-smooth"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">+5</div>
                <p className="font-body text-dark font-semibold">Années d'expérience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                <p className="font-body text-dark font-semibold">Projets réalisés</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="font-body text-dark font-semibold">Clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;