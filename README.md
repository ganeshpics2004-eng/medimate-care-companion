# MEDIMATE – AI-Powered Healthcare Companion

**MEDIMATE** is a friendly, intuitive, and mobile-first telemedicine platform. It acts as your AI-powered healthcare companion, providing **interactive symptom checking (MedBot), prescription OCR, online/offline consultation, and emergency support**, all in one place.  

The project is built with **Node.js (Express) backend** and **React + Vite frontend**, fully integrated for dynamic API calls.

---

## **Features**

### **1. Landing Page**
- Logo + tagline: *"Your health companion, anytime, anywhere."*  
- Feature highlights:
  - MedBot (AI Symptom Checker)
  - Online Consultation
  - Offline Consultation (dynamic search)
  - Queue Cutter
  - Follow-Up Reminder
  - Doctor Reader (OCR)
  - Emergency Call (108 only)
- Smooth animations, soft color theme, and mobile-first design.

### **2. MedBot (Symptom Checker)**
- AI-driven interactive chat: asks for symptoms and duration.  
- Generates a dynamic report:
  - Condition
  - Severity (🟢/🟡/🔴)
  - Homecare remedies
  - When to see a doctor
  - Recovery timeline
  - Prevention tips
- "Get Online Consultation" button navigates to Online Consultation page.

### **3. Online Consultation**
- Responsive card grid listing trusted telemedicine platforms with ratings and visit buttons.

### **4. Offline Consultation**
- Default city: Chennai.  
- Users can enter a different city → backend fetches nearby hospitals/clinics dynamically (via Google Maps API or placeholder data).  
- Displays cards: Name, Address, Contact, Directions link.

### **5. Queue Cutter**
- Info section explaining benefits.  
- Form for requesting queue priority (UI only).

### **6. Follow-Up Reminder**
- Form: Phone number + preferred channel (SMS/WhatsApp).  
- Friendly confirmation toast: *"Got it! We’ll remind you when it matters most."*

### **7. Doctor Reader (OCR)**
- Drag & drop or browse file upload.  
- Backend extracts text from prescription images.  
- Clean, readable text display.

### **8. Call TelMed**
- Emergency call button → triggers device dialer.  
- Only emergency number displayed (108).

---

## **Tech Stack**

### Backend
- Node.js + Express
- Endpoints:
  - `POST /api/medbot` → returns dynamic symptom report
  - `GET /api/locations?city=<city>` → returns nearby hospitals
  - `POST /api/ocr` → returns extracted prescription text
- Nodemon for development auto-reload

### Frontend
- React + Vite + TypeScript
- Shadcn/UI (optional for UI components)
- Axios for API calls
- Mobile-first responsive design
- Soft color theme (blues & greens)
- Rounded corners, subtle gradients, smooth animations

---

## **Project Setup**

### **1. Clone the repository**
```bash
git clone <your-repo-url>
cd showup

