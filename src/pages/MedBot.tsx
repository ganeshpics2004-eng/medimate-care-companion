import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Send, 
  Mic, 
  MicOff, 
  Bot, 
  User, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Heart,
  Shield,
  Pill
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface SymptomReport {
  condition: string;
  severity: 'low' | 'medium' | 'high';
  homecare: string[];
  doctorAdvice: string;
  timeline: string;
  prevention: string[];
}

const MedBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm MedBot, your AI health assistant. I can help you understand your symptoms and provide health guidance. Please describe how you're feeling today.",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sampleReport: SymptomReport = {
    condition: "Common Cold",
    severity: "low",
    homecare: [
      "Stay hydrated with plenty of fluids",
      "Get adequate rest and sleep",
      "Use a humidifier or breathe steam",
      "Gargle with warm salt water",
      "Consider honey for cough relief"
    ],
    doctorAdvice: "Consider seeing a doctor if symptoms persist for more than 7 days, or if you develop fever above 101°F, severe headache, or difficulty breathing.",
    timeline: "Typically resolves in 7-10 days with proper care",
    prevention: [
      "Wash hands frequently",
      "Avoid close contact with sick individuals",
      "Maintain a healthy diet and exercise",
      "Get adequate sleep",
      "Consider annual flu vaccination"
    ]
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: "I understand you're experiencing some symptoms. Based on what you've described, I'll analyze your condition and provide you with a detailed health report. Let me process this information...",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      
      // Show report after a delay
      setTimeout(() => {
        setShowReport(true);
      }, 2000);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real app, this would start/stop voice recording
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'text-secondary';
      case 'medium': return 'text-yellow-500';
      case 'high': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'low': return CheckCircle;
      case 'medium': return AlertTriangle;
      case 'high': return AlertTriangle;
      default: return CheckCircle;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="medical-container py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <div className="inline-flex items-center space-x-3">
              <div className="p-3 bg-gradient-primary rounded-xl">
                <Bot className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold">MedBot</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              AI-powered symptom checker and health assistant
            </p>
          </div>

          {/* Chat Container */}
          <Card className="card-medical min-h-[500px] flex flex-col">
            {/* Messages */}
            <div className="flex-1 p-6 space-y-4 overflow-y-auto max-h-96">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-[80%] ${
                    message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`p-2 rounded-full ${
                      message.type === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4" />
                      )}
                    </div>
                    <div className={`p-4 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <span className="text-xs opacity-70 mt-2 block">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-full bg-secondary text-secondary-foreground">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="p-4 rounded-2xl bg-muted">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-border p-6">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Describe your symptoms..."
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleRecording}
                  className={isRecording ? 'bg-destructive text-destructive-foreground' : ''}
                >
                  {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </Button>
                <Button onClick={handleSendMessage} disabled={!inputValue.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Health Report */}
          {showReport && (
            <Card className="card-medical slide-up">
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Health Analysis Report</h2>
                  <Badge variant="secondary" className="text-sm px-3 py-1">
                    AI Generated
                  </Badge>
                </div>

                {/* Condition & Severity */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-primary" />
                      Identified Condition
                    </h3>
                    <p className="text-xl font-medium">{sampleReport.condition}</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-primary" />
                      Severity Level
                    </h3>
                    <div className="flex items-center space-x-2">
                      {(() => {
                        const SeverityIcon = getSeverityIcon(sampleReport.severity);
                        return <SeverityIcon className={`h-5 w-5 ${getSeverityColor(sampleReport.severity)}`} />;
                      })()}
                      <span className={`font-medium capitalize ${getSeverityColor(sampleReport.severity)}`}>
                        {sampleReport.severity}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Homecare Remedies */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Pill className="h-5 w-5 mr-2 text-secondary" />
                    Homecare Remedies
                  </h3>
                  <div className="grid gap-2">
                    {sampleReport.homecare.map((remedy, index) => (
                      <div key={index} className="flex items-start space-x-2 p-3 bg-muted/50 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5" />
                        <span className="text-sm">{remedy}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Doctor Advice & Timeline */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-primary" />
                      When to See a Doctor
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {sampleReport.doctorAdvice}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      Recovery Timeline
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {sampleReport.timeline}
                    </p>
                  </div>
                </div>

                {/* Prevention Tips */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-secondary" />
                    Prevention Tips
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {sampleReport.prevention.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-2 p-3 bg-secondary/10 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5" />
                        <span className="text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                  <Button className="btn-medical">
                    Get Online Consultation
                  </Button>
                  <Button variant="outline">
                    Save Report
                  </Button>
                  <Button variant="outline">
                    Share with Doctor
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedBot;