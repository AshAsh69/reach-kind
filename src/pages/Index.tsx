import Navigation from "@/components/Navigation";
import HelpRequestCard from "@/components/HelpRequestCard";
import CategoryCard from "@/components/CategoryCard";
import FloatingActionButton from "@/components/FloatingActionButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Utensils, 
  Home, 
  Heart, 
  GraduationCap, 
  Users, 
  Leaf,
  ArrowRight,
  MessageCircle,
  Calendar,
  BarChart3,
  Shield,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";

const Index = () => {
  // Sample data for help requests
  const sampleRequests = [
    {
      id: "1",
      title: "Need tutoring help for my daughter's math homework",
      description: "Looking for someone who can help with 8th grade algebra. She's struggling with equations and I want to help her succeed.",
      category: "Education",
      location: "Downtown Community Center",
      timeAgo: "2 hours ago",
      author: "Sarah M.",
      urgent: false
    },
    {
      id: "2", 
      title: "Family needs food assistance this week",
      description: "Lost my job recently and need help feeding my family of 4 until I can get back on my feet. Any assistance would be appreciated.",
      category: "Food",
      location: "Riverside District",
      timeAgo: "4 hours ago",
      author: "Michael R.",
      urgent: true
    },
    {
      id: "3",
      title: "Volunteer needed for elderly care visits",
      description: "Looking for friendly volunteers to visit seniors in our community. Just companionship and conversation - makes a huge difference.",
      category: "Volunteering",
      location: "Sunny Acres Senior Center",
      timeAgo: "1 day ago",
      author: "Community Care Org"
    }
  ];

  const categories = [
    {
      icon: Utensils,
      title: "Food Assistance",
      description: "Help families in need with meals and groceries",
      color: "bg-secondary",
      count: 24
    },
    {
      icon: Home,
      title: "Shelter Support",
      description: "Housing assistance and temporary shelter",
      color: "bg-primary",
      count: 12
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Medical support and wellness programs",
      color: "bg-destructive",
      count: 18
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Tutoring, mentoring, and skill development",
      color: "bg-accent",
      count: 31
    },
    {
      icon: Users,
      title: "Volunteering",
      description: "Community service and volunteer opportunities",
      color: "bg-success",
      count: 45
    },
    {
      icon: Leaf,
      title: "Environment",
      description: "Eco-friendly initiatives and climate action",
      color: "bg-gradient-primary",
      count: 16
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Community members helping each other" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Connect. Support. 
              <span className="block text-gradient-secondary">Transform Communities.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Join thousands helping neighbors in need. Whether you're seeking assistance or ready to help others, 
              HelpConnect makes community support simple and meaningful.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="glass" size="xl" className="w-full sm:w-auto">
                <Users className="h-5 w-5 mr-2" />
                I Need Help
              </Button>
              <Button variant="support" size="xl" className="w-full sm:w-auto">
                <Heart className="h-5 w-5 mr-2" />
                I Want to Help
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">2,847</div>
              <div className="text-muted-foreground">People Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">1,253</div>
              <div className="text-muted-foreground">Active Helpers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">89</div>
              <div className="text-muted-foreground">Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-success mb-2">156</div>
              <div className="text-muted-foreground">This Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How Can We Help?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our support categories to find the help you need or discover ways to make a difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                icon={category.icon}
                title={category.title}
                description={category.description}
                color={category.color}
                count={category.count}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Requests Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Recent Help Requests</h2>
              <p className="text-xl text-muted-foreground">
                Join our community in making a difference, one request at a time
              </p>
            </div>
            <Button variant="outline" className="mt-4 lg:mt-0">
              View All Requests
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleRequests.map((request) => (
              <HelpRequestCard key={request.id} request={request} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose HelpConnect?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with safety, trust, and community impact at the core
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Verified & Safe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All users and organizations are verified for your safety and peace of mind
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>AI-Powered Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Smart recommendations connect you with the right helpers based on location and skills
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Real-time Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Instant messaging and notifications keep everyone connected and informed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our growing community of helpers and neighbors. Together, we can build stronger, more supportive communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="xl">
              <Calendar className="h-5 w-5 mr-2" />
              Browse Events
            </Button>
            <Button variant="support" size="xl">
              <BarChart3 className="h-5 w-5 mr-2" />
              View Impact
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-hero p-2 rounded-lg">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gradient-hero">HelpConnect</span>
              </div>
              <p className="text-muted-foreground">
                Connecting communities through mutual support and verified assistance.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Get Help</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Food Assistance</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Housing Support</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Healthcare</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Education</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Give Help</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Volunteer</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Donate</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Mentor</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Organizations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Events</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Success Stories</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Safety</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 HelpConnect. Building stronger communities together.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
};

export default Index;
