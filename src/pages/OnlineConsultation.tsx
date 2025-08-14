import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  Star, 
  Clock, 
  Shield, 
  Users,
  Video,
  MessageSquare,
  Phone
} from 'lucide-react';

interface Platform {
  name: string;
  description: string;
  rating: number;
  totalReviews: number;
  features: string[];
  consultationTypes: string[];
  pricing: string;
  availability: string;
  specialties: string[];
  url: string;
  verified: boolean;
}

const OnlineConsultation = () => {
  const platforms: Platform[] = [
    {
      name: "Practo",
      description: "India's leading healthcare platform with verified doctors and instant consultations.",
      rating: 4.5,
      totalReviews: 2500,
      features: ["Video Consultation", "Chat Support", "E-Prescriptions", "Follow-up Care"],
      consultationTypes: ["General Medicine", "Dermatology", "Psychiatry", "Pediatrics"],
      pricing: "₹199 onwards",
      availability: "24/7",
      specialties: ["General Medicine", "Dermatology", "Gynecology", "Psychiatry"],
      url: "https://www.practo.com",
      verified: true
    },
    {
      name: "DocsApp",
      description: "Quick medical consultations with certified doctors in under 30 minutes.",
      rating: 4.3,
      totalReviews: 1800,
      features: ["Quick Consultation", "Medicine Delivery", "Health Records", "AI Health Assistant"],
      consultationTypes: ["General Medicine", "Cardiology", "Neurology", "Orthopedics"],
      pricing: "₹299 onwards",
      availability: "6 AM - 11 PM",
      specialties: ["Cardiology", "Neurology", "General Medicine", "Pediatrics"],
      url: "https://www.docsapp.in",
      verified: true
    },
    {
      name: "Apollo 24/7",
      description: "Trusted healthcare from Apollo Hospitals with comprehensive medical services.",
      rating: 4.6,
      totalReviews: 3200,
      features: ["Video/Audio Calls", "Lab Tests", "Medicine Delivery", "Health Packages"],
      consultationTypes: ["All Specialties", "Emergency Care", "Chronic Disease Management"],
      pricing: "₹350 onwards",
      availability: "24/7",
      specialties: ["All Medical Specialties", "Emergency Care", "Chronic Diseases"],
      url: "https://www.apollo247.com",
      verified: true
    },
    {
      name: "MFine",
      description: "AI-powered healthcare platform with top doctors from premium hospitals.",
      rating: 4.4,
      totalReviews: 2100,
      features: ["AI Health Assessment", "Video Consultation", "Digital Prescriptions", "Health Tracking"],
      consultationTypes: ["General Medicine", "Speciality Care", "Mental Health", "Women's Health"],
      pricing: "₹199 onwards",
      availability: "24/7",
      specialties: ["Mental Health", "Women's Health", "General Medicine", "Dermatology"],
      url: "https://www.mfine.co",
      verified: true
    },
    {
      name: "Lybrate",
      description: "Connect with doctors for health queries, consultations, and medical advice.",
      rating: 4.2,
      totalReviews: 1600,
      features: ["Ask Questions", "Chat with Doctors", "Health Feed", "Medicine Orders"],
      consultationTypes: ["General Queries", "Symptom Discussion", "Second Opinion"],
      pricing: "₹150 onwards",
      availability: "24/7",
      specialties: ["General Medicine", "Dermatology", "Gynecology", "Psychiatry"],
      url: "https://www.lybrate.com",
      verified: true
    },
    {
      name: "Tata 1mg",
      description: "Comprehensive healthcare platform with consultations, medicines, and lab tests.",
      rating: 4.3,
      totalReviews: 1900,
      features: ["Online Consultation", "Medicine Delivery", "Lab Tests", "Health Articles"],
      consultationTypes: ["General Medicine", "Chronic Care", "Preventive Health"],
      pricing: "₹249 onwards",
      availability: "8 AM - 11 PM",
      specialties: ["General Medicine", "Chronic Diseases", "Preventive Care"],
      url: "https://www.1mg.com",
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : index < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="medical-container py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <h1 className="text-3xl lg:text-4xl font-bold">
              Online Consultation Platforms
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with certified healthcare professionals through trusted telemedicine platforms. 
              Get medical advice from the comfort of your home.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-6 fade-in">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Verified Doctors</p>
                <p className="text-sm text-muted-foreground">All platforms use certified professionals</p>
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full">
                <Clock className="h-6 w-6 text-secondary" />
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Quick Access</p>
                <p className="text-sm text-muted-foreground">Most consultations available within 30 minutes</p>
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                <Video className="h-6 w-6 text-accent" />
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Multiple Formats</p>
                <p className="text-sm text-muted-foreground">Video, audio, and text consultations</p>
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Trusted by Millions</p>
                <p className="text-sm text-muted-foreground">Platforms used by millions of patients</p>
              </div>
            </div>
          </div>

          {/* Platform Cards */}
          <div className="grid lg:grid-cols-2 gap-6 slide-up">
            {platforms.map((platform, index) => (
              <Card 
                key={platform.name} 
                className="card-medical hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              >
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl font-bold">{platform.name}</h3>
                        {platform.verified && (
                          <Badge variant="secondary" className="text-xs">
                            <Shield className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          {renderStars(platform.rating)}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {platform.rating} ({platform.totalReviews} reviews)
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-primary">{platform.pricing}</p>
                      <p className="text-sm text-muted-foreground">{platform.availability}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {platform.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.specialties.slice(0, 3).map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                      {platform.specialties.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{platform.specialties.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Consultation Types */}
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Video className="h-4 w-4" />
                      <span>Video</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Phone className="h-4 w-4" />
                      <span>Audio</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>Chat</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full mt-4 btn-medical"
                    onClick={() => window.open(platform.url, '_blank', 'noopener,noreferrer')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit {platform.name}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Emergency Note */}
          <Card className="card-medical bg-destructive/5 border-destructive/20">
            <div className="p-6 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-destructive/10 rounded-full">
                <Phone className="h-6 w-6 text-destructive" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-destructive">Medical Emergency?</h3>
                <p className="text-muted-foreground">
                  For immediate medical emergencies, call 108 or visit the nearest emergency room.
                  Online consultations are for non-emergency medical advice only.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="destructive">
                  <Phone className="h-4 w-4 mr-2" />
                  Call 108 - Emergency
                </Button>
                <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
                  Find Nearest Hospital
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OnlineConsultation;