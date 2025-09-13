import { Button } from "@/components/ui/button";
import { Plus, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FloatingActionButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded options */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 space-y-3 animate-in slide-in-from-bottom-2 duration-200">
            <Button
              variant="support"
              size="lg"
              className="shadow-custom-lg hover:shadow-glow"
              onClick={() => {
                setIsExpanded(false);
                navigate('/quick-chat');
              }}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Quick Chat
            </Button>
            <Button
              variant="hero"
              size="lg"
              className="shadow-custom-lg hover:shadow-glow"
              onClick={() => {
                setIsExpanded(false);
                navigate('/request-help');
              }}
            >
              <Plus className="h-5 w-5 mr-2" />
              Request Help
            </Button>
        </div>
      )}
      
      {/* Main FAB */}
      <Button
        variant="hero"
        size="icon"
        className={`w-14 h-14 shadow-custom-lg hover:shadow-glow transition-bounce ${
          isExpanded ? 'rotate-45' : 'rotate-0'
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default FloatingActionButton;