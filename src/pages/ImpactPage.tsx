import { BarChart3, TrendingUp, Users, Heart, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

const ImpactPage = () => {
  const communityStats = {
    totalHelps: 1247,
    activeHelpers: 324,
    hoursContributed: 5689,
    communitiesServed: 12,
    monthlyGrowth: 23.5,
    satisfactionRate: 97.2
  };

  const impactCategories = [
    { name: 'Daily Tasks', helps: 423, growth: 15, color: 'bg-primary' },
    { name: 'Technology Support', helps: 312, growth: 28, color: 'bg-accent' },
    { name: 'Transportation', helps: 198, growth: 8, color: 'bg-secondary' },
    { name: 'Emergency Assistance', helps: 156, growth: 35, color: 'bg-warning' },
    { name: 'Moving & Logistics', helps: 98, growth: 12, color: 'bg-success' },
    { name: 'Other', helps: 60, growth: 5, color: 'bg-muted' }
  ];

  const recentAchievements = [
    {
      title: '1000+ Helps Milestone',
      description: 'Our community reached 1000 successful help connections!',
      date: '2024-03-10',
      type: 'milestone'
    },
    {
      title: 'Highest Satisfaction Month',
      description: 'February 2024 achieved 98.5% helper satisfaction rate',
      date: '2024-03-01',
      type: 'satisfaction'
    },
    {
      title: 'Emergency Response Team',
      description: 'Launched 24/7 emergency assistance program',
      date: '2024-02-15',
      type: 'program'
    }
  ];

  const topHelpers = [
    { name: 'Sarah M.', helps: 47, hours: 156, rating: 5.0, level: 'Community Champion' },
    { name: 'Mike R.', helps: 42, hours: 134, rating: 4.9, level: 'Super Helper' },
    { name: 'Lisa K.', helps: 38, hours: 125, rating: 4.9, level: 'Super Helper' },
    { name: 'Alex P.', helps: 35, hours: 118, rating: 4.8, level: 'Helper Pro' },
    { name: 'Emma D.', helps: 31, hours: 102, rating: 4.9, level: 'Helper Pro' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient-hero mb-4">Community Impact</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our community is making a real difference in people's lives
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Helps</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{communityStats.totalHelps.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+{communityStats.monthlyGrowth}% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Helpers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{communityStats.activeHelpers}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hours Contributed</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{communityStats.hoursContributed.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Total volunteer hours</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Communities</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{communityStats.communitiesServed}</div>
              <p className="text-xs text-muted-foreground">Neighborhoods served</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Satisfaction</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">{communityStats.satisfactionRate}%</div>
              <p className="text-xs text-muted-foreground">Helper satisfaction</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">+{communityStats.monthlyGrowth}%</div>
              <p className="text-xs text-muted-foreground">Monthly growth</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-8">
          {/* Help Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Help Categories
              </CardTitle>
              <CardDescription>
                Distribution of help requests by category
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {impactCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{category.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{category.helps}</span>
                        <Badge variant="secondary" className="text-xs">
                          +{category.growth}%
                        </Badge>
                      </div>
                    </div>
                    <Progress 
                      value={(category.helps / communityStats.totalHelps) * 100} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Helpers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Top Helpers This Month
              </CardTitle>
              <CardDescription>
                Recognizing our most dedicated community members
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topHelpers.map((helper, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{helper.name}</p>
                        <p className="text-sm text-muted-foreground">{helper.level}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{helper.helps} helps</p>
                      <p className="text-xs text-muted-foreground">{helper.hours}h • ⭐{helper.rating}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Recent Community Achievements
            </CardTitle>
            <CardDescription>
              Celebrating our community milestones and accomplishments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAchievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gradient-card">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{achievement.type}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(achievement.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ImpactPage;