import { Button } from "@/components/ui/button";
import { Heart, Users, MessageCircle, Calendar, BarChart3, User, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (user) {
      logout();
    } else {
      navigate('/auth');
    }
  };

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50 transition-smooth">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-hero p-2 rounded-lg shadow-custom-sm">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient-hero">HelpConnect</span>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => navigate('/find-help')}
              className="text-muted-foreground hover:text-primary transition-smooth flex items-center space-x-1"
            >
              <Users className="h-4 w-4" />
              <span>Find Help</span>
            </button>
            <button 
              onClick={() => navigate('/be-helper')}
              className="text-muted-foreground hover:text-primary transition-smooth flex items-center space-x-1"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Be a Helper</span>
            </button>
            <button 
              onClick={() => navigate('/events')}
              className="text-muted-foreground hover:text-primary transition-smooth flex items-center space-x-1"
            >
              <Calendar className="h-4 w-4" />
              <span>Events</span>
            </button>
            <button 
              onClick={() => navigate('/impact')}
              className="text-muted-foreground hover:text-primary transition-smooth flex items-center space-x-1"
            >
              <BarChart3 className="h-4 w-4" />
              <span>Impact</span>
            </button>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <span className="hidden sm:block text-sm text-muted-foreground">
                  Welcome, {user.name}
                </span>
                <Button variant="outline" size="sm" onClick={handleAuthClick}>
                  <LogOut className="h-4 w-4 mr-1" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" className="hidden sm:flex" onClick={handleAuthClick}>
                  <User className="h-4 w-4 mr-1" />
                  Sign In
                </Button>
                <Button variant="hero" size="sm" onClick={handleAuthClick}>
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;