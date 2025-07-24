const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-dark-foreground py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Informations principales */}
          <div className="col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4 text-primary">
              Cloé Capdordy
            </h3>
            <p className="font-body text-dark-foreground/80 mb-4 leading-relaxed">
              Spécialiste en marketing et communication digitale. 
              J'aide les marques outdoor, TPE et entrepreneurs à développer 
              leur visibilité avec une approche sur mesure et humaine.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/clo%C3%A9-capdordy-52314a146/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-smooth"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-primary">
              Services
            </h4>
            <ul className="font-body space-y-2 text-dark-foreground/80 text-sm">
              <li>Stratégie de contenu</li>
              <li>Création visuelle</li>
              <li>Rédaction web</li>
              <li>Social media</li>
              <li>SEO & référencement</li>
              <li>Publicité digitale</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-primary">
              Contact
            </h4>
            <div className="font-body space-y-2 text-dark-foreground/80 text-sm">
              <p>
                <a href="mailto:capdordycloe@gmail.com" className="hover:text-primary transition-smooth">
                  capdordycloe@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+33666823543" className="hover:text-primary transition-smooth">
                  +33 6 66 82 35 43
                </a>
              </p>
              <p>
                <a 
                  href="https://calendly.com/capdordycloe/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary/80 transition-smooth font-semibold"
                >
                  Prendre RDV
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-dark-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-dark-foreground/60">
            <p>© {currentYear} Cloé Capdordy. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="https://cloecapdordy.notion.site/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-smooth"
              >
                Portfolio
              </a>
              <a 
                href="https://www.behance.net/gallery/127985931/LOGO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-smooth"
              >
                Créations
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;