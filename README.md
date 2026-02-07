<div align="center">

# 🌟 Dhan Gyan - Financial Literacy Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.7-38B2AC.svg)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-10.12.5-FFCA28.svg)](https://firebase.google.com/)

**Empowering Women and Youth with Financial Literacy through AI-Powered Learning**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## 📖 About Dhan Gyan

**Dhan Gyan** (धन ज्ञान) is a revolutionary financial literacy platform designed to bridge the gap in financial education, especially for women and youth. Our mission is to provide accessible, engaging, and personalized learning experiences through innovative AI-powered courses, interactive challenges, and a supportive community.

### 🎯 Our Vision

To create a financially literate society where everyone has the knowledge and tools to make informed financial decisions and achieve financial independence.

### 💡 Key Highlights

- 🤖 **AI-Powered Learning** - Personalized financial education with AI assistance
- 🎮 **Gamified Experience** - Learn through interactive challenges and quests
- 🌐 **Multi-language Support** - Available in English, Spanish, French, German, and Hindi
- 👥 **Community-Driven** - Connect with peers and mentors for guidance
- 📊 **Progress Tracking** - Monitor your financial literacy journey with detailed analytics

---

## ✨ Features

### 🤖 AI Chat Assistant
- **Gyan AI** - Your personal financial assistant powered by Google Gemini API
- Voice recognition and text-to-speech capabilities
- Image analysis for visual financial queries
- Real-time weather integration
- Syntax highlighting for code snippets
- Dark/Light theme support

### 📝 Financial Quiz
- **Multi-language support** (English, Spanish, French, German, Hindi)
- **Three difficulty levels** (Easy, Medium, Hard)
- **Timed challenges** with streak bonuses
- **Category-based scoring** with radar chart visualization
- **Hint system** with point penalties
- **Confetti celebrations** for achievements

### 🏰 Guild System
- **Three specialized communities**:
  - 💰 **Savings Champions** - Budgeting & Saving (Beginner)
  - 📈 **Investment Wizards** - Investing strategies (Intermediate)
  - 🏆 **Financial Freedom Seekers** - Debt Management (Advanced)
- **3D animated emblems** using React Three Fiber
- **Community perks** and shared resources
- **Member rankings** and progress tracking

### 📅 Daily Challenges
- **Dynamic quest system** with varying difficulty
- **Financial IQ tracking** with level progression
- **Streak bonuses** for consecutive completions
- **Particle animations** and confetti rewards
- **Time-limited challenges** for engagement

### 👤 Player Profile
- **Comprehensive stats dashboard** with radar charts
- **Quest tracking** with progress bars
- **Achievement system** with milestones
- **Timeline view** of player journey
- **Guild information** and perks display
- **Friend comparison** mode

### 🛒 AI Marketplace
- **Multi-category listings** (Courses, Skills, Cooking, Coding, Services, etc.)
- **Shopping cart** with checkout functionality
- **Favorites system** for saved items
- **Search and filter** capabilities
- **User-generated listings** with image uploads
- **Payment integration** (Card, UPI)

### 📚 Financial Literacy Learning
- **YouTube integration** for curated financial content
- **Course playlists** with video playback
- **Infinite scroll** for continuous learning
- **Quiz generation** based on content
- **Learning goals** with progress tracking
- **Discussion forums** for community engagement
- **Leaderboard** for competitive learning

### ✍️ AI Scribble
- **Hand gesture recognition** using TensorFlow.js
- **Gesture-based drawing** controls:
  - 👆 **Point** - Draw mode
  - ✌️ **Peace** - Color picker
  - 🖐️ **Palm** - Eraser mode
  - ✊ **Fist** - Move mode
  - 👍 **Thumbs Up** - Shape recognition
  - 🤏 **Pinch** - Toggle writing mode
- **Shape recognition** (circle, rectangle, triangle, line, arrow)
- **Undo/Redo** functionality
- **Layer management** system
- **Download drawings** as PNG

### 📁 Live File Sharing
- **Drag & drop** file upload
- **UploadCare integration** for cloud storage
- **URL shortening** with TinyURL API
- **QR code generation** for easy sharing
- **Dark/Light mode** support
- **Animated particle effects**

### 🔐 Authentication
- **Login/Signup** with Firebase
- **User profile management**
- **Session persistence**

---

## 🚀 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/batmandevx/DhanGyan.git
   cd DhanGyan
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
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

   # Picovoice (for voice recognition)
   REACT_APP_PICOVOICE_ACCESS_KEY=your_picovoice_key

   # UploadCare
   REACT_APP_UPLOADCARE_PUBLIC_KEY=your_uploadcare_key

   # TinyURL
   REACT_APP_TINYURL_API_KEY=your_tinyurl_key
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000`

---

## 📖 Usage

### Getting Started

1. **Create an Account** - Click on "Sign Up" to create your profile
2. **Complete Your Profile** - Add your details and preferences
3. **Join a Guild** - Choose a community that matches your financial goals
4. **Start Learning** - Explore courses, take quizzes, and complete daily challenges

### Main Navigation

- **Sidebar Menu** - Access all features from the collapsible sidebar
- **AI Chat** - Click the floating chat button to interact with Gyan AI
- **Leaderboard** - View top performers and track your ranking
- **Government Schemes** - Quick access to official financial schemes

### Tips for Success

- 🎯 **Complete daily challenges** to maintain your streak
- 📚 **Watch courses** to increase your knowledge score
- 🏆 **Join a guild** for community support and bonuses
- 🤖 **Use AI Chat** for personalized financial advice
- 📊 **Track your progress** in the player profile

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - UI library
- **React Router DOM 6.26.0** - Client-side routing

### Styling & UI
- **Tailwind CSS 3.4.7** - Utility-first CSS framework
- **Framer Motion 11.3.24** - Animation library
- **DaisyUI 4.12.10** - Component library
- **Radix UI** - Headless UI components

### 3D & Graphics
- **Three.js 0.167.0** - 3D graphics library
- **React Three Fiber 8.16.8** - React renderer for Three.js
- **React Three Drei 9.109.2** - Helper components for R3F
- **React Three Postprocessing 2.16.2** - Post-processing effects

### AI & Machine Learning
- **TensorFlow.js 4.20.0** - Machine learning library
- **@tensorflow-models/handpose 0.1.0** - Hand pose detection
- **Picovoice Leopard 2.0.2** - Speech-to-text
- **Picovoice Picovoice 3.0.3** - Wake word detection

### Charts & Visualization
- **Recharts 2.12.7** - Chart library
- **React Chart.js 2 5.2.0** - Chart.js wrapper
- **Chart.js 4.4.3** - Charting library

### Backend & APIs
- **Firebase 10.12.5** - Backend-as-a-Service
- **Axios 1.7.3** - HTTP client
- **Google Gemini API** - AI chat functionality
- **YouTube Data API v3** - Video content
- **WeatherAPI.com** - Weather data

### File Handling
- **React Dropzone 14.2.3** - File upload
- **UploadCare React Widget 2.4.5** - Cloud storage
- **QRCode.react 3.1.0** - QR code generation

### Utilities
- **Lucide React 0.416.0** - Icon library
- **Canvas Confetti 1.9.3** - Confetti effects
- **React Toastify 10.0.5** - Toast notifications
- **React Syntax Highlighter 15.5.0** - Code highlighting
- **React Colorful 5.6.1** - Color picker
- **js-simplify 1.0.0** - Shape recognition

### Development Tools
- **React Scripts 5.0.1** - Build tooling
- **PostCSS 8.4.40** - CSS processing
- **Autoprefixer 10.4.19** - CSS vendor prefixes

---

## 📁 Project Structure

```
DhanGyan/
├── public/                 # Static assets
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/         # Reusable components
│   │   ├── features/      # Feature-specific components
│   │   │   └── FinancialCalculator.js
│   │   └── ui/           # UI components
│   │       ├── index.js
│   │       └── ParticleBackground.js
│   ├── hooks/             # Custom React hooks
│   │   └── useAnimations.js
│   ├── utils/             # Utility functions
│   ├── AIChat.js          # AI chat assistant
│   ├── AIMarketplace.js   # E-commerce marketplace
│   ├── AIScribble.js      # Gesture-based drawing
│   ├── App.js             # Main application component
│   ├── CareerDevelopment.js
│   ├── DailyChallenge.js   # Daily quest system
│   ├── FinancialCosmos.js
│   ├── FinancialLiteracyLearning.js
│   ├── FinancialQuiz.js    # Quiz system
│   ├── Firebase.js        # Firebase configuration
│   ├── GuildSystem.js     # Community system
│   ├── Homepage.js
│   ├── LeaderboardRow.js
│   ├── LiveFileSharing.js # File sharing feature
│   ├── LoginSignupPage.js
│   ├── PlayerProfile.js    # User profile
│   └── ...
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🎨 Key Components

### App.js
Main application component containing:
- Navigation and sidebar
- Feature routing
- State management
- User authentication

### AIChat.js
AI-powered chat assistant with:
- Google Gemini API integration
- Voice recognition
- Image analysis
- Weather integration

### FinancialQuiz.js
Interactive quiz system with:
- Multi-language support
- Difficulty levels
- Timer and scoring
- Category-based analytics

### GuildSystem.js
Community features with:
- 3D animated emblems
- Member management
- Guild perks system

### DailyChallenge.js
Daily quest system with:
- Dynamic challenges
- Financial IQ tracking
- Streak bonuses
- Particle animations

### PlayerProfile.js
User profile with:
- Stats dashboard
- Quest tracking
- Achievement system
- Timeline view

---

## 🔧 Configuration

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication (Email/Password)
4. Create a web app
5. Copy the configuration to your `.env` file

### Google Gemini API

1. Go to [Google AI Studio](https://makersuite.google.com/)
2. Create an API key
3. Add it to your `.env` file

### Weather API

1. Sign up at [WeatherAPI.com](https://www.weatherapi.com/)
2. Get your free API key
3. Add it to your `.env` file

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### How to Contribute

1. **Fork the repository**
   ```bash
   git fork https://github.com/batmandevx/DhanGyan.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation as needed

4. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```

5. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Describe your changes
   - Reference any related issues
   - Wait for review

### Contribution Guidelines

- ✅ Follow the existing code style
- ✅ Write meaningful commit messages
- ✅ Add tests for new features
- ✅ Update documentation
- ✅ Be respectful and constructive

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

- **Lead Developer** - [batmandevx](https://github.com/batmandevx)
- **Contributors** - All contributors are welcome!

---

## 🙏 Acknowledgments

- **Google** - For the Gemini AI API
- **Firebase** - For backend services
- **TensorFlow** - For machine learning models
- **React Community** - For amazing libraries and tools
- **Lucide** - For beautiful icons

---

## 📞 Support & Contact

- 📧 Email: support@dhangyan.com
- 🐛 Issues: [GitHub Issues](https://github.com/batmandevx/DhanGyan/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/batmandevx/DhanGyan/discussions)

---

## 🗺️ Roadmap

### Phase 1 - Current Features ✅
- [x] AI Chat Assistant
- [x] Financial Quiz System
- [x] Guild System
- [x] Daily Challenges
- [x] Player Profile
- [x] AI Marketplace
- [x] Financial Learning Hub
- [x] AI Scribble
- [x] Live File Sharing

### Phase 2 - Upcoming Features 🚧
- [ ] Mobile App (React Native)
- [ ] Advanced Financial Calculators
- [ ] Investment Portfolio Tracker
- [ ] Budget Planning Tools
- [ ] Credit Score Monitoring
- [ ] Tax Planning Assistant
- [ ] Retirement Calculator
- [ ] Real-time Market Data

### Phase 3 - Future Enhancements 🔮
- [ ] Blockchain Integration
- [ ] Cryptocurrency Education
- [ ] NFT Marketplace
- [ ] Virtual Financial Advisor
- [ ] AR/VR Learning Experiences
- [ ] Multiplayer Financial Games
- [ ] Certification Programs

---

## 📊 Stats

<div align="center">

![GitHub Stars](https://img.shields.io/github/stars/batmandevx/DhanGyan?style=social)
![GitHub Forks](https://img.shields.io/github/forks/batmandevx/DhanGyan?style=social)
![GitHub Issues](https://img.shields.io/github/issues/batmandevx/DhanGyan)
![GitHub License](https://img.shields.io/github/license/batmandevx/DhanGyan)

</div>

---

<div align="center">

**Made with ❤️ for Financial Literacy**

[⬆ Back to Top](#-dhan-gyan---financial-literacy-platform)

</div>
