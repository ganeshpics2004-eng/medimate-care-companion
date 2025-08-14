import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FeatureCard from '@/components/FeatureCard';
import { useNavigate } from 'react-router-dom';
import { 
  MessageCircle, 
  Users, 
  MapPin, 
  Clock, 
  FileText, 
  Phone,
  Shield,
  Heart,
  Smartphone
} from 'lucide-react';
import heroImage from '@/assets/medical-hero.jpg';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: MessageCircle,
      title: 'MedBot',
      description: 'AI-powered symptom checker with personalized health insights and care recommendations.',
      action: 'Start Chat',
      onClick: () => navigate('/medbot'),
      variant: 'primary' as const
    },
    {
      icon: Users,
      title: 'Online Consultation',
      description: 'Connect with certified healthcare professionals through trusted telemedicine platforms.',
      action: 'Browse Platforms',
      onClick: () => navigate('/online-consultation'),
      variant: 'secondary' as const
    },
    {
      icon: MapPin,
      title: 'Offline Consultation',
      description: 'Find nearby hospitals, clinics, and pharmacies in Chennai with directions and contact info.',
      action: 'Find Near Me',
      onClick: () => navigate('/offline-consultation')
    },
    {
      icon: Clock,
      title: 'Follow-Up Reminder',
      description: 'Never miss important medical appointments with our smart reminder system.',
      action: 'Set Reminder',
      onClick: () => navigate('/follow-up')
    },
    {
      icon: FileText,
      title: 'Doctor Reader',
      description: 'Upload prescription images and get clear, readable text extraction using advanced OCR.',
      action: 'Scan Prescription',
      onClick: () => navigate('/doctor-reader')
    },
    {
      icon: Phone,
      title: 'Call TelMed',
      description: 'Instant access to emergency medical consultation with just one call.',
      action: 'Call Now',
      onClick: () => navigate('/call-telmed'),
      variant: 'secondary' as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="medical-container py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your health companion,{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  anytime, anywhere
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
                MEDIMATE is your trusted AI-powered healthcare companion, providing intelligent medical assistance, 
                consultations, and health monitoring in one beautiful, easy-to-use platform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => navigate('/medbot')}
                className="btn-medical text-lg px-8 py-6 bounce-gentle"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start with MedBot
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/online-consultation')}
                className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10"
              >
                <Users className="mr-2 h-5 w-5" />
                Find Doctor
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-secondary" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Heart className="h-4 w-4 text-secondary" />
                <span>Trusted by 10K+ Users</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Smartphone className="h-4 w-4 text-secondary" />
                <span>Mobile First</span>
              </div>
            </div>
          </div>

          <div className="slide-up">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="MEDIMATE Healthcare Platform Interface" 
                className="w-full h-auto rounded-2xl shadow-glow"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="medical-container py-16">
        <div className="text-center space-y-4 mb-12 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Comprehensive Healthcare Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From AI-powered symptom checking to emergency consultations, 
            MEDIMATE provides everything you need for better health management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 slide-up">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              action={feature.action}
              onClick={feature.onClick}
              variant={feature.variant}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="medical-container py-16">
        <Card className="card-medical bg-gradient-primary/5 border-primary/20">
          <div className="p-8 lg:p-12 text-center space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold">
              Ready to take control of your health?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of users who trust MEDIMATE for their healthcare needs. 
              Start your health journey today with our AI-powered medical assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => navigate('/medbot')}
                className="btn-medical text-lg px-8 py-6"
              >
                Get Started Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/call-telmed')}
                className="text-lg px-8 py-6 border-secondary hover:bg-secondary/10"
              >
                Emergency Call
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="medical-container py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <Heart className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">MEDIMATE</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted AI-powered healthcare companion for better health management.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Services</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>AI Symptom Checker</div>
                <div>Online Consultations</div>
                <div>Prescription OCR</div>
                <div>Emergency Support</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Help Center</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Contact Us</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Emergency</h4>
              <div className="space-y-2 text-sm">
                <div className="text-destructive font-medium">108 - Medical Emergency</div>
                <div className="text-primary font-medium">+1 814 885 3416 - TelMed</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
            © 2024 MEDIMATE. All rights reserved. Your health, our priority.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;