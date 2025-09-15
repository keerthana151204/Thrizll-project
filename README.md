# Thrizll

## A Living Scrapbook for Your Shared Memories

**Live Demo**: [https://thrizll.lovable.app/](https://thrizll.lovable.app/)

Thrizll transforms scattered photos and moments into an emotionally rich, AI-powered memory experience that grows stronger with every shared story. Built to bond, Thrizll helps couples and close relationships create deeper connections through collaborative storytelling and memory curation.

## Features

### AI-Powered Curation
- Intelligent organization of your memories
- Smart suggestions for memory connections
- Automated mood and sentiment analysis

### Collaborative Storytelling
- Shared diary functionality
- Interactive memory games
- Real-time memory sharing and collaboration

### Emotional Connections
- Love languages integration
- Mood-based memory filtering
- Personalized memory recommendations

### Core Features
- **Dashboard**: Central hub for all your memories
- **Memory Upload**: Easy photo and story uploads
- **Location Memories**: GPS-tagged memory experiences
- **Memory Games**: Interactive bonding activities
- **Time Capsule**: Scheduled memory reveals
- **Surprise Drops**: Unexpected memory gifts
- **Memory Re-enactment**: Recreate special moments
- **Memory Scoring**: Track your relationship growth

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui with Radix UI primitives
- **Backend**: Supabase (Authentication, Database, Storage)
- **State Management**: React Context + Custom Hooks
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Supabase account (for backend services)

### Installation

1. **Clone the repository**
   ```bash
   git clone 
   cd thrizll
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Database Setup
The app uses Supabase for authentication and data storage. Make sure to:
- Set up authentication in your Supabase project
- Configure Row Level Security (RLS) policies
- Set up storage buckets for memory uploads

## Design System

Thrizll uses a comprehensive design system built on Tailwind CSS with:
- **Semantic color tokens** for consistent theming
- **Custom gradients** for emotional warmth
- **Responsive typography** scales
- **Interactive animations** using CSS transitions
- **Dark/light mode** support

## Authentication

The app requires authentication before accessing any features:
- **Sign Up**: Create new accounts with email verification
- **Sign In**: Secure login with Supabase Auth
- **Protected Routes**: All feature pages require authentication
- **Session Management**: Automatic session handling and persistence

## Responsive Design

Thrizll is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile devices
- Various screen sizes and orientations

## Deployment

### Lovable Deployment
1. Open your [Lovable project](https://lovable.dev/projects/e5b56bf6-50f2-4e42-b826-944460b1d606)
2. Click "Share" → "Publish"
3. Your app will be live at `thrizll.lovable.app`

### Custom Domain
Connect your own domain through Project Settings → Domains in Lovable.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is built with Lovable and follows modern web development best practices.

## Links

- **Live App**: [https://thrizll.lovable.app/](https://thrizll.lovable.app/)
- **Lovable Project**: [Edit in Lovable](https://lovable.dev/projects/e5b56bf6-50f2-4e42-b826-944460b1d606)

---

**"Build to Bond"** - Thrizll helps create stronger relationships through the power of shared memories.tips-tricks/custom-domain#step-by-step-guide)
