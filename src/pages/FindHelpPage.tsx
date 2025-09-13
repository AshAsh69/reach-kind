import { useState } from 'react';
import { Search, Filter, MapPin, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';

const FindHelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const helpRequests = [
    {
      id: 1,
      title: 'Help with grocery shopping for elderly neighbor',
      description: 'My elderly neighbor needs help with weekly grocery shopping. She has mobility issues and would appreciate someone picking up essentials.',
      category: 'Daily Tasks',
      location: 'Downtown Area',
      timePosted: '2 hours ago',
      urgency: 'medium',
      requester: 'Sarah M.',
      responses: 3
    },
    {
      id: 2,
      title: 'Computer setup assistance needed',
      description: 'Recently got a new computer and need help setting it up and transferring files from my old one.',
      category: 'Technology',
      location: 'Westside',
      timePosted: '5 hours ago',
      urgency: 'low',
      requester: 'Mike R.',
      responses: 1
    },
    {
      id: 3,
      title: 'Emergency ride to hospital',
      description: 'Need urgent transportation to the hospital for a medical appointment. My car broke down this morning.',
      category: 'Transportation',
      location: 'East End',
      timePosted: '30 minutes ago',
      urgency: 'high',
      requester: 'Lisa K.',
      responses: 7
    },
    {
      id: 4,
      title: 'Moving heavy furniture',
      description: 'Moving to a new apartment next weekend and need help carrying heavy furniture items. Pizza and drinks provided!',
      category: 'Moving',
      location: 'Midtown',
      timePosted: '1 day ago',
      urgency: 'medium',
      requester: 'Alex P.',
      responses: 5
    }
  ];

  const categories = ['all', 'Daily Tasks', 'Technology', 'Transportation', 'Moving', 'Emergency', 'Other'];

  const filteredRequests = helpRequests.filter(request => {
    const matchesSearch = request.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || request.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient-hero mb-4">Find Ways to Help</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover opportunities to make a difference in your community
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg p-6 shadow-custom-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search help requests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Help Requests Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredRequests.map(request => (
            <Card key={request.id} className="card-hover">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getUrgencyColor(request.urgency)}>
                    {request.urgency} priority
                  </Badge>
                  <Badge variant="outline">{request.category}</Badge>
                </div>
                <CardTitle className="text-lg">{request.title}</CardTitle>
                <CardDescription>{request.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {request.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    Posted {request.timePosted}
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm font-medium">
                      By {request.requester}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {request.responses} volunteers
                    </span>
                  </div>
                  <Button className="w-full" variant="hero">
                    <Heart className="w-4 h-4 mr-2" />
                    Offer Help
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRequests.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No requests found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default FindHelpPage;