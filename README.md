# Thrizll - A Living Scrapbook for Your Shared Memories

**Live Demo**: [https://thrizll.lovable.app/](https://thrizll.lovable.app/)

## Project Overview

Thrizll is an AI-powered memory experience platform that transforms scattered photos and moments into an emotionally rich, collaborative storytelling platform. Built to strengthen relationships through shared memory curation and interactive experiences.

## Quick Setup for Evaluators

### Prerequisites
- Node.js 18+ and npm
- Modern web browser

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd thrizll
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory with the following:
   ```env
   VITE_SUPABASE_URL=https://loyugrfgnobqfrboobjq.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxveXVncmZnbm9icWZyYm9vYmpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MTE2MzksImV4cCI6MjA3Mjk4NzYzOX0.dKrMuYG-FZaAWEWC3DjrjPWk6KZtc1DUcdSnxsSTzRg
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Open your browser and navigate to `http://localhost:5173`
   - Create a test account using any email (no verification required)
   - Explore the authenticated features and dashboard

## Testing the Application

### Authentication Flow
- Landing page displays marketing content and sign-in/sign-up forms
- Create account with any email (password minimum requirements apply)
- Upon authentication, users are redirected to the main dashboard

### Key Features to Test
- **Dashboard**: Central hub for memory management
- **Memory Upload**: Photo and story upload functionality
- **Navigation**: Responsive navigation with authentication-aware routing
- **Protected Routes**: All feature pages require authentication
- **Responsive Design**: Test across different screen sizes

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui with Radix UI primitives
- **Backend**: Supabase (Authentication, Database, Storage)
- **Routing**: React Router DOM

## Architecture

The application follows a component-based architecture with:
- Protected routing system
- Centralized authentication state management
- Responsive design system
- Modular UI components
