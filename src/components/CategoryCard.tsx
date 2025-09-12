import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  count: number;
}

const CategoryCard = ({ icon: Icon, title, description, color, count }: CategoryCardProps) => {
  return (
    <Card className="card-hover cursor-pointer group">
      <CardContent className="p-6 text-center">
        <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3">{description}</p>
        <div className="text-xs text-primary font-medium">
          {count} active requests
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;