import { useState, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Upload, 
  FileText, 
  Camera, 
  Download, 
  Copy, 
  CheckCircle,
  AlertCircle,
  Loader2,
  Eye,
  Share2
} from 'lucide-react';

interface OcrResult {
  extractedText: string;
  confidence: number;
  medications: string[];
  dosage: string[];
  instructions: string[];
  doctorName?: string;
  date?: string;
}

const DoctorReader = () => {
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [ocrResult, setOcrResult] = useState<OcrResult | null>(null);

  // Sample OCR result for demonstration
  const sampleResult: OcrResult = {
    extractedText: `Dr. Sarah Johnson, MD
Chennai Medical Center
Date: December 14, 2024

Patient: John Doe
Age: 35 years

Prescription:
1. Amoxicillin 500mg - Take 1 tablet twice daily after meals for 7 days
2. Paracetamol 650mg - Take 1 tablet when needed for fever/pain (max 3 times daily)
3. Omeprazole 20mg - Take 1 tablet once daily before breakfast for 14 days

Instructions:
- Complete the full course of antibiotics
- Take medications with plenty of water
- Avoid alcohol while on medication
- Return if symptoms worsen

Next Visit: December 28, 2024

Dr. Sarah Johnson
Reg. No: 12345`,
    confidence: 92,
    medications: ['Amoxicillin 500mg', 'Paracetamol 650mg', 'Omeprazole 20mg'],
    dosage: ['Twice daily for 7 days', 'When needed (max 3 times daily)', 'Once daily for 14 days'],
    instructions: [
      'Complete the full course of antibiotics',
      'Take medications with plenty of water',
      'Avoid alcohol while on medication',
      'Return if symptoms worsen'
    ],
    doctorName: 'Dr. Sarah Johnson, MD',
    date: 'December 14, 2024'
  };

  const handleFileSelect = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid File Type",
        description: "Please select an image file (JPG, PNG, etc.)",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      toast({
        title: "File Too Large",
        description: "Please select an image smaller than 10MB",
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);
    
    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    
    toast({
      title: "Image Selected",
      description: "Ready to extract text from your prescription",
    });
  }, [toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  }, [handleFileSelect]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const processOCR = async () => {
    if (!selectedFile) return;

    setIsProcessing(true);
    
    try {
      // Simulate OCR processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Set the sample result
      setOcrResult(sampleResult);
      
      toast({
        title: "Text Extracted Successfully! 🎉",
        description: `Extracted prescription with ${sampleResult.confidence}% confidence`,
      });
    } catch (error) {
      toast({
        title: "Extraction Failed",
        description: "Failed to extract text from the image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to Clipboard",
        description: "Text has been copied to your clipboard",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy text to clipboard",
        variant: "destructive",
      });
    }
  };

  const downloadAsText = () => {
    if (!ocrResult) return;
    
    const blob = new Blob([ocrResult.extractedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'prescription.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download Started",
      description: "Prescription text downloaded as file",
    });
  };

  const resetUpload = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setOcrResult(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="medical-container py-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 fade-in">
            <div className="inline-flex items-center space-x-3">
              <div className="p-3 bg-gradient-primary rounded-xl">
                <FileText className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold">Doctor Reader OCR</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Upload prescription images and get clear, readable text extraction using advanced OCR technology. 
              Make your handwritten prescriptions digitally accessible.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-6 fade-in">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="font-semibold">High Accuracy</p>
                <p className="text-sm text-muted-foreground">Advanced OCR with 95%+ accuracy</p>
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full">
                <Upload className="h-6 w-6 text-secondary" />
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Easy Upload</p>
                <p className="text-sm text-muted-foreground">Drag & drop or browse files</p>
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Smart Parsing</p>
                <p className="text-sm text-muted-foreground">Identifies medications & dosage</p>
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Export Options</p>
                <p className="text-sm text-muted-foreground">Copy, download, or share results</p>
              </div>
            </div>
          </div>

          {/* Upload Section */}
          {!selectedFile && (
            <Card className="card-medical slide-up">
              <div className="p-8">
                <div
                  className="border-2 border-dashed border-border rounded-xl p-12 text-center space-y-6 transition-colors hover:border-primary/50 hover:bg-primary/5"
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  onDragEnter={(e) => e.preventDefault()}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Upload Prescription Image</h3>
                    <p className="text-muted-foreground">
                      Drag and drop your prescription image here, or click to browse
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Supports JPG, PNG, GIF up to 10MB
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      className="btn-medical"
                      onClick={() => document.getElementById('file-input')?.click()}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Browse Files
                    </Button>
                    <Button variant="outline">
                      <Camera className="h-4 w-4 mr-2" />
                      Take Photo
                    </Button>
                  </div>

                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    onChange={handleFileInput}
                    className="hidden"
                  />
                </div>
              </div>
            </Card>
          )}

          {/* Preview and Processing */}
          {selectedFile && !ocrResult && (
            <div className="grid lg:grid-cols-2 gap-6 slide-up">
              {/* Image Preview */}
              <Card className="card-medical">
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Image Preview</h3>
                    <Button variant="outline" size="sm" onClick={resetUpload}>
                      <Upload className="h-4 w-4 mr-2" />
                      Change Image
                    </Button>
                  </div>
                  
                  {previewUrl && (
                    <div className="relative">
                      <img 
                        src={previewUrl} 
                        alt="Prescription preview" 
                        className="w-full h-64 object-contain rounded-lg border border-border"
                      />
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">File name:</span>
                      <span className="font-medium">{selectedFile.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">File size:</span>
                      <span className="font-medium">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Processing Controls */}
              <Card className="card-medical">
                <div className="p-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Extract Text</h3>
                    <p className="text-muted-foreground">
                      Our advanced OCR technology will extract and structure the text from your prescription image.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                      <h4 className="font-medium">What we extract:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Medication names and dosages</li>
                        <li>• Doctor's instructions</li>
                        <li>• Prescription dates</li>
                        <li>• Doctor information</li>
                      </ul>
                    </div>

                    <Button 
                      className="w-full btn-medical"
                      onClick={processOCR}
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Processing Image...
                        </>
                      ) : (
                        <>
                          <FileText className="h-4 w-4 mr-2" />
                          Extract Text
                        </>
                      )}
                    </Button>

                    {isProcessing && (
                      <div className="text-center space-y-2">
                        <div className="text-sm text-muted-foreground">
                          This may take a few moments...
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full animate-pulse w-3/4"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Results */}
          {ocrResult && (
            <div className="space-y-6 slide-up">
              {/* Result Header */}
              <Card className="card-medical">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-6 w-6 text-secondary" />
                        <h2 className="text-2xl font-bold">Text Extraction Complete</h2>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant="secondary" className="text-sm">
                          {ocrResult.confidence}% Confidence
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {ocrResult.medications.length} medications identified
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={resetUpload}>
                        <Upload className="h-4 w-4 mr-2" />
                        New Image
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Structured Information */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Medications */}
                <Card className="card-medical">
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-primary" />
                      Medications
                    </h3>
                    <div className="space-y-3">
                      {ocrResult.medications.map((med, index) => (
                        <div key={index} className="p-3 bg-muted/50 rounded-lg">
                          <div className="font-medium">{med}</div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {ocrResult.dosage[index]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Instructions */}
                <Card className="card-medical">
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <AlertCircle className="h-5 w-5 mr-2 text-secondary" />
                      Instructions
                    </h3>
                    <div className="space-y-2">
                      {ocrResult.instructions.map((instruction, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-secondary mt-0.5" />
                          <span className="text-sm">{instruction}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Full Text */}
              <Card className="card-medical">
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Complete Extracted Text</h3>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => copyToClipboard(ocrResult.extractedText)}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={downloadAsText}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-4">
                    <pre className="text-sm whitespace-pre-wrap text-foreground leading-relaxed">
                      {ocrResult.extractedText}
                    </pre>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Important Notice */}
          <Card className="card-medical bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
            <div className="p-6 space-y-3">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">Important Medical Notice</h3>
              </div>
              <div className="text-sm text-yellow-700 dark:text-yellow-300 space-y-2">
                <p>
                  • This OCR tool is for convenience only and should not replace professional medical advice
                </p>
                <p>
                  • Always verify extracted information with your original prescription
                </p>
                <p>
                  • Consult your doctor or pharmacist if you have any questions about your medication
                </p>
                <p>
                  • In case of emergency, contact your healthcare provider immediately
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DoctorReader;