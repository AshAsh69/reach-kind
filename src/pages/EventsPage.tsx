import { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Filter, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';

const EventsPage = () => {
  const [filterType, setFilterType] = useState('all');
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Community Cleanup Day',
      description: 'Join us for a neighborhood cleanup to beautify our local park and streets.',
      date: '2024-03-20',
      time: '9:00 AM - 1:00 PM',
      location: 'Central Park',
      type: 'Community Service',
      attendees: 24,
      maxAttendees: 50,
      organizer: 'Green Earth Initiative',
      image: '🌱'
    },
    {
      id: 2,
      title: 'Senior Tech Workshop',
      description: 'Teaching seniors how to use smartphones and video calling apps.',
      date: '2024-03-22',
      time: '2:00 PM - 4:00 PM',
      location: 'Community Center',
      type: 'Education',
      attendees: 8,
      maxAttendees: 15,
      organizer: 'Digital Inclusion Team',
      image: '💻'
    },
    {
      id: 3,
      title: 'Food Drive Collection',
      description: 'Help collect and sort donations for local food bank.',
      date: '2024-03-25',
      time: '10:00 AM - 3:00 PM',
      location: 'Main Street Plaza',
      type: 'Charity',
      attendees: 15,
      maxAttendees: 30,
      organizer: 'HelpConnect Volunteers',
      image: '🥫'
    },
    {
      id: 4,
      title: 'Neighborhood Safety Meeting',
      description: 'Discuss community safety initiatives and meet local law enforcement.',
      date: '2024-03-28',
      time: '7:00 PM - 8:30 PM',
      location: 'City Hall',
      type: 'Meeting',
      attendees: 12,
      maxAttendees: 100,
      organizer: 'Neighborhood Watch',
      image: '🛡️'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Winter Coat Drive',
      description: 'Successfully collected 200+ winter coats for families in need.',
      date: '2024-02-15',
      attendees: 45,
      type: 'Charity',
      impact: '200 coats collected',
      image: '🧥'
    },
    {
      id: 6,
      title: 'Community Garden Setup',
      description: 'Established raised beds and planted winter vegetables.',
      date: '2024-02-10',
      attendees: 32,
      type: 'Community Service',
      impact: '20 garden beds created',
      image: '🌿'
    }
  ];

  const eventTypes = ['all', 'Community Service', 'Education', 'Charity', 'Meeting', 'Social'];

  const filteredEvents = upcomingEvents.filter(event => 
    filterType === 'all' || event.type === filterType
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Community Service': return 'bg-primary text-primary-foreground';
      case 'Education': return 'bg-accent text-accent-foreground';
      case 'Charity': return 'bg-secondary text-secondary-foreground';
      case 'Meeting': return 'bg-warning text-warning-foreground';
      case 'Social': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient-hero mb-4">Community Events</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join local events and bring positive change to your community
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
            
            <div className="flex gap-3">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {type === 'all' ? 'All Types' : type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button variant="hero">
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </Button>
            </div>
          </div>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map(event => (
                <Card key={event.id} className="card-hover">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={getTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                      <span className="text-2xl">{event.image}</span>
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        {event.attendees}/{event.maxAttendees} attending
                      </div>
                      
                      <div className="pt-2 border-t">
                        <p className="text-sm font-medium text-muted-foreground mb-2">
                          Organized by {event.organizer}
                        </p>
                        <Button className="w-full" variant="hero">
                          Join Event
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map(event => (
                <Card key={event.id} className="opacity-90">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className={getTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                      <span className="text-2xl">{event.image}</span>
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        {event.attendees} people attended
                      </div>
                      
                      <div className="pt-2 border-t">
                        <div className="bg-success/10 p-3 rounded-lg">
                          <p className="text-sm font-medium text-success">Impact Achieved</p>
                          <p className="text-sm text-success/80">{event.impact}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredEvents.length === 0 && activeTab === 'upcoming' && (
          <div className="text-center py-12">
            <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No events found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters or check back later
            </p>
            <Button variant="hero">
              <Plus className="w-4 h-4 mr-2" />
              Create the First Event
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default EventsPage;