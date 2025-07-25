import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Calendar, Building } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
    videoLink?: string;
    company?: string;
    timeframe?: string;
    actions?: string[];
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl font-heading font-bold text-dark mb-2">
                {project.title}
              </DialogTitle>
              <p className="text-lg text-primary font-semibold">
                {project.subtitle}
              </p>
            </div>
          </div>
        </DialogHeader>

        {/* Cover Image */}
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-6">
          {project.company && (
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Entreprise</p>
                <p className="font-semibold">{project.company}</p>
              </div>
            </div>
          )}
          
          {project.timeframe && (
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Durée</p>
                <p className="font-semibold">{project.timeframe}</p>
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-dark">Description</h3>
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Actions */}
        {project.actions && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-dark">Actions réalisées</h3>
            <ul className="space-y-2">
              {project.actions.map((action, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{action}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
          {project.link && (
            <Button 
              variant="default"
              className="bg-primary hover:bg-primary-light"
              asChild
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Voir le projet complet
              </a>
            </Button>
          )}
          
          {project.videoLink && (
            <Button 
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white"
              asChild
            >
              <a href={project.videoLink} target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4 mr-2" />
                Voir l'interview YouTube
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;