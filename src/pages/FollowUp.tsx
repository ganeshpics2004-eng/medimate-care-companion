import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  Bell, 
  MessageSquare, 
  Clock, 
  Calendar, 
  CheckCircle,
  Smartphone,
  Mail
} from 'lucide-react';

const FollowUp = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    reminderType: '',
    preferredChannel: '',
    frequency: '',
    appointmentType: '',
    doctorName: '',
    notes: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.phone || !formData.reminderType || !formData.preferredChannel) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate successful submission
    toast({
      title: "Reminder Set Successfully! 🎉",
      description: "Got it! We'll remind you when it matters most.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      phone: '',
      email: '',
      reminderType: '',
      preferredChannel: '',
      frequency: '',
      appointmentType: '',
      doctorName: '',
      notes: ''
    });
  };

  const reminderTypes = [
    { value: 'medication', label: 'Medication Reminder' },
    { value: 'appointment', label: 'Doctor Appointment' },
    { value: 'checkup', label: 'Regular Health Checkup' },
    { value: 'prescription', label: 'Prescription Refill' },
    { value: 'test-results', label: 'Test Results Follow-up' },
    { value: 'vaccination', label: 'Vaccination Schedule' },
    { value: 'therapy', label: 'Therapy Session' },
    { value: 'custom', label: 'Custom Reminder' }
  ];

  const frequencies = [
    { value: 'once', label: 'One-time' },
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Every 3 months' },
    { value: 'annually', label: 'Yearly' }
  ];

  const channels = [
    { value: 'sms', label: 'SMS', icon: MessageSquare },
    { value: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
    { value: 'email', label: 'Email', icon: Mail },
    { value: 'call', label: 'Phone Call', icon: Smartphone }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="medical-container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <div className="inline-flex items-center space-x-3">
              <div className="p-3 bg-gradient-primary rounded-xl">
                <Bell className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold">Follow-Up Reminders</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Never miss important medical appointments or medication schedules. 
              Set up smart reminders that work best for you.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6 fade-in">
            <Card className="card-medical text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Never Miss Appointments</h3>
              <p className="text-sm text-muted-foreground">
                Get timely reminders for all your medical appointments and follow-ups.
              </p>
            </Card>
            <Card className="card-medical text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-4">
                <MessageSquare className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Multiple Channels</h3>
              <p className="text-sm text-muted-foreground">
                Choose from SMS, WhatsApp, email, or phone calls for your reminders.
              </p>
            </Card>
            <Card className="card-medical text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-sm text-muted-foreground">
                Flexible reminder schedules that adapt to your healthcare needs.
              </p>
            </Card>
          </div>

          {/* Main Form */}
          <Card className="card-medical slide-up">
            <div className="p-6 lg:p-8">
              <div className="space-y-6">
                <div className="text-center pb-4 border-b border-border">
                  <h2 className="text-2xl font-bold">Set Up Your Health Reminder</h2>
                  <p className="text-muted-foreground mt-2">
                    Fill in your details to receive personalized health reminders
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center">
                        <Smartphone className="h-4 w-4 mr-2" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Reminder Configuration */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="reminderType">Reminder Type *</Label>
                      <Select onValueChange={(value) => handleInputChange('reminderType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select reminder type" />
                        </SelectTrigger>
                        <SelectContent>
                          {reminderTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="frequency">Frequency</Label>
                      <Select onValueChange={(value) => handleInputChange('frequency', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="How often?" />
                        </SelectTrigger>
                        <SelectContent>
                          {frequencies.map((freq) => (
                            <SelectItem key={freq.value} value={freq.value}>
                              {freq.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Preferred Communication Channel */}
                  <div className="space-y-3">
                    <Label>Preferred Communication Channel *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {channels.map((channel) => {
                        const Icon = channel.icon;
                        return (
                          <Button
                            key={channel.value}
                            type="button"
                            variant={formData.preferredChannel === channel.value ? 'default' : 'outline'}
                            onClick={() => handleInputChange('preferredChannel', channel.value)}
                            className="h-auto p-4 flex flex-col space-y-2"
                          >
                            <Icon className="h-5 w-5" />
                            <span className="text-sm">{channel.label}</span>
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Additional Details */}
                  {formData.reminderType === 'appointment' && (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="appointmentType">Appointment Type</Label>
                        <Input
                          id="appointmentType"
                          placeholder="e.g., Regular checkup, Consultation"
                          value={formData.appointmentType}
                          onChange={(e) => handleInputChange('appointmentType', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="doctorName">Doctor/Clinic Name</Label>
                        <Input
                          id="doctorName"
                          placeholder="e.g., Dr. Smith, Apollo Clinic"
                          value={formData.doctorName}
                          onChange={(e) => handleInputChange('doctorName', e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {/* Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Add any specific instructions or details for your reminder..."
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      rows={3}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-6">
                    <Button type="submit" className="btn-medical px-8 py-6 text-lg">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Set Up Reminder
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Card>

          {/* Information Card */}
          <Card className="card-medical bg-primary/5 border-primary/20">
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">How It Works</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="font-medium">1. Set Your Preferences</div>
                  <div className="text-muted-foreground">
                    Choose your reminder type, frequency, and preferred communication method.
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">2. We Schedule It</div>
                  <div className="text-muted-foreground">
                    Our system automatically schedules your reminders based on your preferences.
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">3. Get Reminded</div>
                  <div className="text-muted-foreground">
                    Receive timely notifications through your preferred channel.
                  </div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground pt-2 border-t border-primary/20">
                <strong>Privacy Note:</strong> Your information is encrypted and used only for sending reminders. 
                You can unsubscribe at any time by replying STOP to any message.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FollowUp;