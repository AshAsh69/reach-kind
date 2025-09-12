import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, User, Heart } from "lucide-react";

interface HelpRequest {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  timeAgo: string;
  author: string;
  urgent?: boolean;
}

interface HelpRequestCardProps {
  request: HelpRequest;
}

const HelpRequestCard = ({ request }: HelpRequestCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'food': return 'bg-secondary text-secondary-foreground';
      case 'shelter': return 'bg-primary text-primary-foreground';
      case 'health': return 'bg-destructive text-destructive-foreground';
      case 'education': return 'bg-accent text-accent-foreground';
      case 'volunteering': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="card-hover h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg leading-snug mb-2">{request.title}</CardTitle>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge className={getCategoryColor(request.category)} variant="secondary">
                {request.category}
              </Badge>
              {request.urgent && (
                <Badge variant="destructive" className="animate-pulse">
                  Urgent
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pb-3">
        <p className="text-muted-foreground leading-relaxed mb-4">
          {request.description}
        </p>
        
        <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{request.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4 text-primary" />
            <span>Posted by {request.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>{request.timeAgo}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex w-full space-x-2">
          <Button variant="support" className="flex-1">
            <Heart className="h-4 w-4 mr-1" />
            Help Out
          </Button>
          <Button variant="outline" size="sm">
            Contact
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default HelpRequestCard;