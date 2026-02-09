# 🎯 DhyanGyan - Modern Financial Learning Platform

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Latest-FFCA28?logo=firebase)](https://firebase.google.com/)
[![GSAP](https://img.shields.io/badge/GSAP-Latest-88CE02?logo=greensock)](https://greensock.com/)
[![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

**DhyanGyan** is a gamified financial literacy platform that makes learning about money management fun and engaging through AI-powered features, interactive challenges, and community-driven learning.

---

## ✨ Features

### 🤖 AI-Powered Learning
- **AI Chat Assistant** - Get instant answers to financial questions
- **Personalized Learning** - AI adapts to your knowledge level
- **Smart Recommendations** - Curated content based on your progress

### 🎮 Gamification
- **Guild System** - Join teams and compete together
- **Daily Challenges** - Complete tasks to earn rewards
- **Leaderboards** - Track your progress against peers
- **Badge System** - Unlock achievements as you learn
- **XP & Levels** - Level up your financial knowledge

### 📚 Learning Modules
- **Financial Literacy Learning** - Structured courses
- **Interactive Quizzes** - Test your knowledge
- **Financial Calculator** - Plan your budget and investments
- **Real-world Scenarios** - Practice with simulations

### 🎨 Modern UI/UX
- **Glassmorphism Design** - Sleek, modern interface
- **Smooth Animations** - GSAP, Framer Motion, AOS
- **Particle Effects** - Dynamic backgrounds
- **Responsive Design** - Works on all devices

### 🌐 Community Features
- **AI Marketplace** - Buy and sell AI-generated content
- **AI Scribble** - Collaborative drawing
- **Live File Sharing** - Share resources instantly
- **Social Profiles** - Connect with learners

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account (for backend)
- Gemini API key (for AI features)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd DhyanGyan-master
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:

```env
# Firebase Configuration
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

# Google Gemini API
REACT_APP_GEMINI_API_KEY=your_gemini_api_key

# Weather API
REACT_APP_WEATHER_API_KEY=your_weather_api_key

# Optional APIs
REACT_APP_PICOVOICE_ACCESS_KEY=your_picovoice_key
REACT_APP_UPLOADCARE_PUBLIC_KEY=your_uploadcare_key
REACT_APP_TINYURL_API_KEY=your_tinyurl_key
```

4. **Start the development server**
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
DhyanGyan-master/
├── src/
│   ├── components/
│   │   ├── common/              # Reusable UI components
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Modal/
│   │   │   ├── Input/
│   │   │   └── Loading/
│   │   ├── features/            # Feature-specific components
│   │   │   ├── BadgeSystem/
│   │   │   ├── Dashboard/
│   │   │   └── FinancialCalculator/
│   │   ├── layout/              # Layout components
│   │   └── ui/                   # Legacy UI components
│   ├── hooks/                    # Custom React hooks
│   │   └── useAnimations.js
│   ├── utils/                    # Utility functions
│   │   ├── aosHelpers.js
│   │   └── gsapHelpers.js
│   ├── contexts/                 # Context providers
│   ├── services/                 # API services
│   ├── styles/                   # Global styles
│   │   ├── variables.css
│   │   └── animations.css
│   ├── assets/                   # Static assets
│   ├── App.js                    # Main app component
│   └── index.js                  # Entry point
├── public/                       # Public assets
├── .env                          # Environment variables
├── package.json
└── README.md
```

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Purple | `#8b5cf6` | Main brand color |
| Secondary Pink | `#ec4899` | Accent color |
| Accent Blue | `#3b82f6` | Highlights |
| Success Green | `#10b981` | Success states |
| Warning Yellow | `#f59e0b` | Warnings |
| Error Red | `#ef4444` | Errors |

### Gradients

```css
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
--gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```

### Components

All components follow a consistent design language:
- **Glassmorphism** - Semi-transparent backgrounds with blur
- **Shadows** - Multi-layered depth
- **Rounded Corners** - Soft, modern edges
- **Smooth Transitions** - 300ms ease-in-out

---

## 🔧 Available Scripts

### `npm start`
Runs the app in development mode.

### `npm test`
Launches the test runner.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run lint`
Runs ESLint to check code quality.

---

## 📚 Component Library

### Button
```jsx
import { Button } from './components/common';

<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

**Variants:** `primary`, `secondary`, `glass`, `outline`, `ghost`  
**Sizes:** `sm`, `md`, `lg`

### Card
```jsx
import { Card } from './components/common';

<Card variant="glass" interactive glow>
  Your content here
</Card>
```

**Variants:** `glass`, `solid`, `outline`

### Modal
```jsx
import { Modal } from './components/common';

<Modal isOpen={isOpen} onClose={handleClose} title="Title" size="md">
  Modal content
</Modal>
```

**Sizes:** `sm`, `md`, `lg`, `xl`

### Input
```jsx
import { Input } from './components/common';

<Input
  label="Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}
/>
```

### Loading
```jsx
import { Loading } from './components/common';

<Loading variant="spinner" size="md" text="Loading..." />
```

**Variants:** `spinner`, `dots`, `pulse`

---

## 🎬 Animation Libraries

### GSAP
```javascript
import { fadeIn, slideInLeft } from './utils/gsapHelpers';

fadeIn('.element', { duration: 1 });
slideInLeft('.another-element', { delay: 0.2 });
```

### AOS (Animate On Scroll)
```jsx
<div data-aos="fade-up" data-aos-duration="800">
  Content animates when scrolling
</div>
```

### Framer Motion
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  whileHover={{ scale: 1.05 }}
>
  Animated content
</motion.div>
```

---

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - React animations
- **GSAP** - Professional animations
- **AOS** - Scroll animations
- **Anime.js** - Complex animations
- **Lottie** - JSON animations
- **React Spring** - Physics-based animations

### Backend & Services
- **Firebase** - Authentication, Database, Storage
- **Google Gemini API** - AI chatbot
- **Weather API** - Real-time weather data

### Libraries
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications
- **PDF.js** - PDF rendering
- **Particles.js** - Background effects

---

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `REACT_APP_FIREBASE_API_KEY` | Firebase API key | ✅ Yes |
| `REACT_APP_GEMINI_API_KEY` | Gemini AI API key | ✅ Yes |
| `REACT_APP_WEATHER_API_KEY` | Weather API key | ⚠️ Optional |
| `REACT_APP_PICOVOICE_ACCESS_KEY` | Voice recognition | ⚠️ Optional |

---

## 🎯 Key Features Explained

### 1. Guild System
Join guilds to collaborate with other learners. Complete group challenges, share resources, and compete in team leaderboards.

### 2. AI Chat Assistant
Powered by Google Gemini, the chat assistant provides:
- Instant answers to financial questions
- Voice input support
- Weather integration
- Image recognition
- Context-aware responses

### 3. Daily Challenges
New challenges every day to keep you engaged:
- Quizzes
- Calculators
- Real-world scenarios
- Earn XP and badges

### 4. Badge System
Unlock badges by:
- Completing challenges
- Reaching milestones
- Helping others
- Streaks

### 5. Financial Calculator
Tools for:
- Budget planning
- Investment projections
- Loan calculations
- Savings goals

---

## 🎨 Customization

### Changing Theme Colors

Edit `src/styles/variables.css`:

```css
:root {
  --primary-500: #your-color;
  --secondary-500: #your-color;
}
```

### Adding Custom Animations

Create animations in `src/styles/animations.css`:

```css
@keyframes myAnimation {
  from { transform: scale(0); }
  to { transform: scale(1); }
}
```

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- **Google Gemini** for AI capabilities
- **GSAP** for animation framework
- **Firebase** for backend services
- **Lucide** for icons
- All open-source contributors

---

## 📞 Support

For support, email support@dhyangyan.com or join our Discord community.

---

**Made with ❤️ by the DhyanGyan Team**
