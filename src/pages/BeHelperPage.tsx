import { useState } from 'react';
import { Heart, Star, Clock, Award, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';

const BeHelperPage = () => {
  const [activeTab, setActiveTab] = useState('opportunities');

  const opportunities = [
    {
      id: 1,
      title: 'Weekly Grocery Assistant',
      description: 'Help elderly community members with their weekly grocery shopping',
      commitment: 'Weekly, 2-3 hours',
      skills: ['Driving', 'Communication'],
      urgency: 'ongoing',
      helpers: 3,
      maxHelpers: 5
    },
    {
      id: 2,
      title: 'Technology Mentor',
      description: 'Teach basic computer skills to seniors',
      commitment: 'Flexible schedule',
      skills: ['Tech Support', 'Patience'],
      urgency: 'high',
      helpers: 1,
      maxHelpers: 4
    },
    {
      id: 3,
      title: 'Community Garden Volunteer',
      description: 'Help maintain the neighborhood community garden',
      commitment: 'Weekends, 3 hours',
      skills: ['Gardening', 'Physical work'],
      urgency: 'medium',
      helpers: 8,
      maxHelpers: 10
    }
  ];

  const myStats = {
    totalHelps: 47,
    rating: 4.9,
    hoursContributed: 156,
    thanksReceived: 23,
    level: 'Community Champion',
    nextLevel: 'Neighborhood Hero',
    progressToNext: 78
  };

  const achievements = [
    { name: 'First Help', description: 'Completed your first helping task', earned: true },
    { name: 'Tech Guru', description: 'Helped 10+ people with technology', earned: true },
    { name: 'Reliable Helper', description: 'Maintained 5-star rating for 3 months', earned: true },
    { name: 'Community Builder', description: 'Helped 50+ community members', earned: false },
    { name: 'Super Volunteer', description: 'Contributed 200+ hours', earned: false }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'ongoing': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient-hero mb-4">Be a Helper</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Make a difference in your community by helping those in need
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="opportunities">Find Opportunities</TabsTrigger>
            <TabsTrigger value="dashboard">My Dashboard</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="opportunities" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {opportunities.map(opportunity => (
                <Card key={opportunity.id} className="card-hover">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={getUrgencyColor(opportunity.urgency)}>
                        {opportunity.urgency === 'ongoing' ? 'Ongoing' : `${opportunity.urgency} need`}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {opportunity.helpers}/{opportunity.maxHelpers} helpers
                      </span>
                    </div>
                    <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                    <CardDescription>{opportunity.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-1">Time Commitment</p>
                        <p className="text-sm text-muted-foreground">{opportunity.commitment}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium mb-2">Skills Needed</p>
                        <div className="flex flex-wrap gap-1">
                          {opportunity.skills.map(skill => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <Progress value={(opportunity.helpers / opportunity.maxHelpers) * 100} className="mb-2" />
                        <Button className="w-full" variant="hero">
                          <Heart className="w-4 h-4 mr-2" />
                          Join as Helper
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Helps</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{myStats.totalHelps}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Rating</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{myStats.rating}/5.0</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Hours</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{myStats.hoursContributed}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Thanks</CardTitle>
                  <Award className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{myStats.thanksReceived}</div>
                </CardContent>
              </Card>
            </div>

            {/* Level Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Helper Level Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{myStats.level}</p>
                      <p className="text-sm text-muted-foreground">Next: {myStats.nextLevel}</p>
                    </div>
                    <Badge variant="default" className="bg-primary text-primary-foreground">{myStats.progressToNext}%</Badge>
                  </div>
                  <Progress value={myStats.progressToNext} className="h-3" />
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Helped with grocery shopping</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                    <Badge variant="secondary">+5 points</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Tech support session completed</p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                    <Badge variant="secondary">+8 points</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Received thank you note</p>
                      <p className="text-xs text-muted-foreground">3 days ago</p>
                    </div>
                    <Badge variant="secondary">+3 points</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <Card key={index} className={`${achievement.earned ? 'bg-gradient-card' : 'opacity-60'}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        achievement.earned ? 'bg-primary' : 'bg-muted'
                      }`}>
                        <Award className={`w-5 h-5 ${achievement.earned ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{achievement.name}</CardTitle>
                        {achievement.earned && <Badge variant="default" className="bg-success text-success-foreground">Earned</Badge>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default BeHelperPage;