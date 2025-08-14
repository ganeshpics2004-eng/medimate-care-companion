import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Clock, 
  Shield, 
  Heart, 
  AlertTriangle,
  Users,
  Headphones,
  Globe
} from 'lucide-react';

const CallTelMed = () => {
  const handleCall = (number: string) => {
    window.open(`tel:${number}`, '_self');
  };

  const services = [
    {
      icon: Heart,
      title: 'General Medical Consultation',
      description: 'Get professional medical advice for non-emergency health concerns'
    },
    {
      icon: AlertTriangle,
      title: 'Urgent Care Guidance',
      description: 'Quick assessment and guidance for urgent but non-life-threatening situations'
    },
    {
      icon: Headphones,
      title: 'Health Information',
      description: 'Access to health information, medication queries, and wellness advice'
    },
    {
      icon: Users,
      title: 'Family Health Support',
      description: 'Medical consultation services for all family members'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Medical professionals available round the clock for your health needs'
    },
    {
      icon: Shield,
      title: 'Qualified Doctors',
      description: 'Speak directly with licensed healthcare professionals'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Available in multiple languages including English, Hindi, Tamil'
    },
    {
      icon: Phone,
      title: 'Immediate Connection',
      description: 'Connect instantly without waiting or appointment booking'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="medical-container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <div className="inline-flex items-center space-x-3">
              <div className="p-3 bg-gradient-primary rounded-xl">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold">Call TelMed</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get instant medical consultation with just one call. 
              Connect with qualified healthcare professionals 24/7 for urgent medical advice and guidance.
            </p>
          </div>

          {/* Emergency Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 fade-in">
            {/* TelMed Call */}
            <Card className="card-medical border-primary/30 bg-primary/5">
              <div className="p-6 text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full">
                  <Phone className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">TelMed Consultation</h2>
                  <p className="text-muted-foreground">
                    Professional medical consultation and health guidance
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-3xl font-bold text-primary">
                    +1 814 885 3416
                  </div>
                  
                  <Button 
                    className="w-full btn-medical text-lg py-6 bounce-gentle"
                    onClick={() => handleCall('+18148853416')}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call TelMed Now
                  </Button>
                  
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Available 24/7</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Emergency Services */}
            <Card className="card-medical border-destructive/30 bg-destructive/5">
              <div className="p-6 text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive rounded-full">
                  <AlertTriangle className="h-8 w-8 text-destructive-foreground" />
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-destructive">Medical Emergency</h2>
                  <p className="text-muted-foreground">
                    For life-threatening emergencies and urgent medical situations
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-3xl font-bold text-destructive">
                    108
                  </div>
                  
                  <Button 
                    variant="destructive"
                    className="w-full text-lg py-6"
                    onClick={() => handleCall('108')}
                  >
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Call Emergency Services
                  </Button>
                  
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>India National Emergency Number</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Services Overview */}
          <Card className="card-medical slide-up">
            <div className="p-6 space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">TelMed Services</h2>
                <p className="text-muted-foreground">
                  Professional healthcare consultation services available over the phone
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="flex space-x-4 p-4 bg-muted/30 rounded-lg">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Features */}
          <Card className="card-medical">
            <div className="p-6 space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Why Choose TelMed?</h2>
                <p className="text-muted-foreground">
                  Trusted healthcare consultation at your fingertips
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="text-center space-y-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Usage Guidelines */}
          <Card className="card-medical">
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                When to Call TelMed
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-secondary">✅ Appropriate for TelMed:</h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• General health questions and concerns</li>
                    <li>• Medication inquiries and side effects</li>
                    <li>• Minor illness symptoms assessment</li>
                    <li>• Health prevention and wellness advice</li>
                    <li>• Follow-up questions after doctor visits</li>
                    <li>• Second opinion on non-emergency conditions</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-destructive">🚨 Call 108 for Emergencies:</h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Chest pain or difficulty breathing</li>
                    <li>• Severe injuries or bleeding</li>
                    <li>• Loss of consciousness</li>
                    <li>• Severe allergic reactions</li>
                    <li>• Signs of stroke or heart attack</li>
                    <li>• Any life-threatening situation</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="card-medical bg-muted/30">
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-center">Contact Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-primary">TelMed Consultation</div>
                  <div className="text-2xl font-bold">+1 814 885 3416</div>
                  <div className="text-sm text-muted-foreground">
                    Available 24/7 • Professional Medical Advice
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-destructive">Medical Emergency</div>
                  <div className="text-2xl font-bold">108</div>
                  <div className="text-sm text-muted-foreground">
                    India Emergency Services • Immediate Response
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Important:</strong> TelMed is for medical consultation only. 
                  For emergencies, always call 108 or visit the nearest emergency room.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CallTelMed;