import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Heart, MapPin, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';

const RequestHelpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    urgency: 'medium',
    location: '',
    timeframe: '',
    contactMethod: 'app',
    additionalInfo: ''
  });

  const categories = [
    'Daily Tasks',
    'Technology Support',
    'Transportation',
    'Moving & Logistics',
    'Emergency Assistance',
    'Childcare',
    'Pet Care',
    'Home Maintenance',
    'Other'
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low - Within a week', color: 'text-success' },
    { value: 'medium', label: 'Medium - Within 2-3 days', color: 'text-warning' },
    { value: 'high', label: 'High - Within 24 hours', color: 'text-destructive' },
    { value: 'urgent', label: 'Urgent - ASAP', color: 'text-destructive font-bold' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.description || !formData.category) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Help Request Submitted!",
      description: "Your request has been posted to the community. You'll be notified when someone offers help.",
    });
    
    navigate('/find-help');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-gradient-hero p-3 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gradient-hero">Request Help</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Tell us what you need help with and we'll connect you with caring neighbors
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Describe Your Request</CardTitle>
            <CardDescription>
              The more details you provide, the easier it will be for helpers to understand your needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Request Title *</Label>
                <Input
                  id="title"
                  placeholder="Brief summary of what you need help with"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="transition-smooth"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Provide more details about what you need help with, any specific requirements, etc."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="min-h-[100px] transition-smooth"
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the type of help you need" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Urgency */}
              <div className="space-y-3">
                <Label>How urgent is this request?</Label>
                <RadioGroup 
                  value={formData.urgency} 
                  onValueChange={(value) => handleInputChange('urgency', value)}
                  className="space-y-2"
                >
                  {urgencyLevels.map(level => (
                    <div key={level.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={level.value} id={level.value} />
                      <Label htmlFor={level.value} className={`cursor-pointer ${level.color}`}>
                        {level.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    placeholder="Neighborhood or general area"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Timeframe */}
              <div className="space-y-2">
                <Label htmlFor="timeframe">Preferred Timeframe</Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="timeframe"
                    placeholder="e.g., Weekday mornings, This weekend, Flexible"
                    value={formData.timeframe}
                    onChange={(e) => handleInputChange('timeframe', e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Any other details that might be helpful for potential helpers"
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  className="min-h-[80px]"
                />
              </div>

              {/* Safety Notice */}
              <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Safety First</h4>
                    <p className="text-sm text-muted-foreground">
                      Always meet helpers in public places when possible. Trust your instincts and communicate through the app initially.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button type="submit" className="w-full" variant="hero" size="lg">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Submit Help Request
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default RequestHelpPage;