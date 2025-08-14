import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  MapPin, 
  Phone, 
  Navigation, 
  Clock, 
  Star,
  Hospital,
  Heart,
  Pill,
  Stethoscope
} from 'lucide-react';

interface HealthcareProvider {
  id: string;
  name: string;
  type: 'hospital' | 'clinic' | 'pharmacy';
  address: string;
  phone: string;
  rating: number;
  distance: string;
  specialties: string[];
  facilities: string[];
  hours: string;
  emergency: boolean;
}

const OfflineConsultation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'hospital' | 'clinic' | 'pharmacy'>('all');

  // Sample Chennai healthcare providers
  const providers: HealthcareProvider[] = [
    {
      id: '1',
      name: 'Apollo Hospitals Chennai',
      type: 'hospital',
      address: '21, Greams Lane, Off Greams Road, Chennai, Tamil Nadu 600006',
      phone: '+91-44-2829 3333',
      rating: 4.5,
      distance: '2.3 km',
      specialties: ['Cardiology', 'Neurology', 'Oncology', 'Orthopedics'],
      facilities: ['24/7 Emergency', 'ICU', 'Pharmacy', 'Lab Tests', 'Parking'],
      hours: '24 Hours',
      emergency: true
    },
    {
      id: '2',
      name: 'Fortis Malar Hospital',
      type: 'hospital',
      address: '52, 1st Main Rd, Gandhi Nagar, Adyar, Chennai, Tamil Nadu 600020',
      phone: '+91-44-4289 2222',
      rating: 4.3,
      distance: '3.1 km',
      specialties: ['Cardiology', 'Gastroenterology', 'Nephrology', 'Urology'],
      facilities: ['Emergency Care', 'ICU', 'Blood Bank', 'Cafeteria'],
      hours: '24 Hours',
      emergency: true
    },
    {
      id: '3',
      name: 'Chennai Meenakshi Multispeciality Hospital',
      type: 'hospital',
      address: '1, New No.1, Luz Church Road, Mylapore, Chennai, Tamil Nadu 600004',
      phone: '+91-44-4296 4296',
      rating: 4.2,
      distance: '1.8 km',
      specialties: ['General Medicine', 'Pediatrics', 'Dermatology', 'ENT'],
      facilities: ['Emergency', 'Pharmacy', 'Lab', 'X-Ray'],
      hours: '24 Hours',
      emergency: true
    },
    {
      id: '4',
      name: 'Dr. Kamakshi Memorial Hospital',
      type: 'hospital',
      address: '1, Radial Rd, Pallikaranai, Chennai, Tamil Nadu 600100',
      phone: '+91-44-3912 3456',
      rating: 4.0,
      distance: '5.2 km',
      specialties: ['Orthopedics', 'Gynecology', 'General Surgery', 'Pediatrics'],
      facilities: ['Emergency', 'ICU', 'Operation Theater', 'Pharmacy'],
      hours: '24 Hours',
      emergency: true
    },
    {
      id: '5',
      name: 'Adyar Family Clinic',
      type: 'clinic',
      address: '15, Lattice Bridge Road, Adyar, Chennai, Tamil Nadu 600020',
      phone: '+91-44-2441 2345',
      rating: 4.1,
      distance: '2.7 km',
      specialties: ['General Medicine', 'Family Practice', 'Preventive Care'],
      facilities: ['Consultation', 'Basic Lab Tests', 'Pharmacy'],
      hours: '8 AM - 8 PM',
      emergency: false
    },
    {
      id: '6',
      name: 'MedPlus Pharmacy',
      type: 'pharmacy',
      address: '123, Anna Salai, Teynampet, Chennai, Tamil Nadu 600018',
      phone: '+91-44-2432 1234',
      rating: 4.2,
      distance: '1.5 km',
      specialties: ['Medicines', 'Health Products', 'Consultation'],
      facilities: ['Home Delivery', 'Online Orders', 'Health Checkup'],
      hours: '8 AM - 10 PM',
      emergency: false
    },
    {
      id: '7',
      name: 'Apollo Pharmacy',
      type: 'pharmacy',
      address: '45, Cathedral Road, Gopalapuram, Chennai, Tamil Nadu 600086',
      phone: '+91-44-2811 5678',
      rating: 4.3,
      distance: '2.9 km',
      specialties: ['Prescription Medicines', 'OTC Products', 'Health Supplements'],
      facilities: ['24/7 Service', 'Home Delivery', 'Digital Prescription'],
      hours: '24 Hours',
      emergency: false
    },
    {
      id: '8',
      name: 'Chennai Heart Institute',
      type: 'clinic',
      address: '78, Poonamallee High Road, Kilpauk, Chennai, Tamil Nadu 600010',
      phone: '+91-44-2641 9876',
      rating: 4.4,
      distance: '4.1 km',
      specialties: ['Cardiology', 'Cardiac Surgery', 'Interventional Cardiology'],
      facilities: ['ECG', 'Echo', 'Stress Test', 'Cathlab'],
      hours: '9 AM - 6 PM',
      emergency: false
    }
  ];

  const filteredProviders = providers.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         provider.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         provider.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchQuery.toLowerCase())
                         );
    const matchesType = selectedType === 'all' || provider.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'hospital': return Hospital;
      case 'clinic': return Stethoscope;
      case 'pharmacy': return Pill;
      default: return MapPin;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'hospital': return 'text-primary';
      case 'clinic': return 'text-secondary';
      case 'pharmacy': return 'text-accent';
      default: return 'text-muted-foreground';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
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
              Offline Consultation in Chennai
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find nearby hospitals, clinics, and pharmacies in Chennai. 
              Get directions, contact information, and facility details.
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="card-medical fade-in">
            <div className="p-6 space-y-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search hospitals, clinics, pharmacies, or specialties..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  {(['all', 'hospital', 'clinic', 'pharmacy'] as const).map((type) => (
                    <Button
                      key={type}
                      variant={selectedType === type ? 'default' : 'outline'}
                      onClick={() => setSelectedType(type)}
                      className="capitalize"
                    >
                      {type === 'all' ? 'All' : type}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                Found {filteredProviders.length} healthcare providers in Chennai
              </div>
            </div>
          </Card>

          {/* Results */}
          <div className="grid gap-6 slide-up">
            {filteredProviders.map((provider, index) => {
              const TypeIcon = getTypeIcon(provider.type);
              return (
                <Card 
                  key={provider.id} 
                  className="card-medical hover:scale-[1.01] transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
                >
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-muted ${getTypeColor(provider.type)}`}>
                            <TypeIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{provider.name}</h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline" className="capitalize text-xs">
                                {provider.type}
                              </Badge>
                              {provider.emergency && (
                                <Badge variant="destructive" className="text-xs">
                                  24/7 Emergency
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            {renderStars(provider.rating)}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {provider.rating} • {provider.distance}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-right space-y-2">
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {provider.hours}
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {provider.address}
                      </p>
                    </div>

                    {/* Specialties */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Specialties & Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {provider.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Facilities */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Facilities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {provider.facilities.map((facility, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {facility}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                      <Button 
                        className="btn-medical flex-1"
                        onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(provider.address)}`, '_blank')}
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => window.open(`tel:${provider.phone}`, '_self')}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </Button>
                    </div>

                    {/* Contact Info */}
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground pt-2 border-t border-border">
                      <Phone className="h-4 w-4" />
                      <span>{provider.phone}</span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredProviders.length === 0 && (
            <Card className="card-medical">
              <div className="p-12 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">No results found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search criteria or filter options.
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedType('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </Card>
          )}

          {/* Emergency Contact */}
          <Card className="card-medical bg-destructive/5 border-destructive/20">
            <div className="p-6 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-destructive/10 rounded-full">
                <Phone className="h-6 w-6 text-destructive" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-destructive">Emergency Services</h3>
                <p className="text-muted-foreground">
                  For life-threatening emergencies, call 108 immediately or visit the nearest emergency room.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  variant="destructive"
                  onClick={() => window.open('tel:108', '_self')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call 108 - Emergency
                </Button>
                <Button 
                  variant="outline" 
                  className="border-destructive text-destructive hover:bg-destructive/10"
                  onClick={() => window.open('tel:+918148853416', '_self')}
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Call TelMed
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OfflineConsultation;