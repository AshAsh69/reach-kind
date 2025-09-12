import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-custom-lg">
        <CardHeader>
          <div className="bg-muted w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-10 w-10 text-muted-foreground" />
          </div>
          <CardTitle className="text-4xl font-bold text-primary mb-2">404</CardTitle>
          <p className="text-xl text-muted-foreground">Oops! Page not found</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="default" className="w-full sm:w-auto" asChild>
              <a href="/">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </a>
            </Button>
            <Button variant="outline" className="w-full sm:w-auto" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
