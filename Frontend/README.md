# Medicine Recommendation System - Frontend Documentation

## Overview

The frontend of the Medicine Recommendation System is built using React with TypeScript and Vite, providing a modern, responsive, and user-friendly interface for disease prediction and health recommendations.

## Technology Stack

- **React 18** with TypeScript for robust type safety
- **Vite** for fast development and optimized builds
- **Chakra UI** for responsive and accessible components
- **React Router v6** for client-side routing
- **React Helmet** for dynamic document head management
- **NProgress** for page loading indicators
- **Supabase** for authentication and data storage

## Project Structure

```
Frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React context providers
│   ├── pages/         # Route-level components
│   ├── services/      # API and external service integrations
│   ├── styles/        # Global styles and theme customization
│   ├── lib/           # Utility functions and helpers
│   ├── theme/         # Chakra UI theme configuration
│   ├── App.tsx        # Root application component
│   ├── router.tsx     # Application routing configuration
│   └── main.tsx       # Application entry point
├── public/            # Static assets
└── package.json       # Project dependencies and scripts
```

## Key Features

### 1. User Authentication

- Secure login and signup functionality
- Protected routes for authenticated users
- Profile management capabilities

### 2. Disease Prediction Interface

- Interactive symptom selection
- Real-time form validation
- Clear presentation of prediction results

### 3. Personalized Recommendations

- Medication suggestions based on predicted conditions
- Customized diet and exercise recommendations
- Detailed health precautions

### 4. User Experience

- Responsive design for all device sizes
- Progress indicators for loading states
- Intuitive navigation with React Router
- SEO optimization with React Helmet

## Component Architecture

### Core Components

1. **Navbar**

   - Site navigation
   - Authentication state management
   - Responsive mobile menu

2. **PrivateRoute**

   - Authentication protection
   - Route access control
   - Redirect handling

3. **Prediction Form**
   - Dynamic symptom selection
   - Form state management
   - API integration

### Page Components

1. **Home**

   - Landing page with system overview
   - Quick access to key features

2. **About**

   - System information
   - Technical details
   - Feature highlights

3. **Predict**

   - Main prediction interface
   - Results display
   - Recommendation presentation

4. **Profile**
   - User information management
   - Prediction history
   - Account settings

## State Management

- **AuthContext**: Global authentication state
- **React Hooks**: Local component state
- **Form State**: Controlled components with validation

## API Integration

### Backend Communication

- RESTful API consumption
- Axios for HTTP requests
- Error handling and loading states

### Authentication Flow

1. User credentials validation
2. JWT token management
3. Protected route access

## Styling and Theming

- **Chakra UI** components for consistent design
- Responsive layout with Flexbox and Grid
- Custom theme configuration
- Dark mode support

## Performance Optimization

1. **Code Splitting**

   - Route-based chunking
   - Lazy loading of components

2. **Asset Optimization**
   - Image compression
   - Font optimization
   - Bundle size management

## Development Setup

### Using Docker

1. **Build and run the container**

   ```bash
   docker build -t medicine-frontend .
   docker run -p 5173:80 medicine-frontend
   ```

2. **Using Docker Compose (Recommended)**
   ```bash
   docker-compose up frontend
   ```
   The frontend will be available at http://localhost:5173

### Manual Setup

1. **Installation**

   ```bash
   npm install
   ```

2. **Environment Configuration**

   - Copy `.env.example` to `.env`
   - Configure environment variables
   - Set VITE_API_URL to match your backend URL (default: http://localhost:5000)

3. **Development Server**

   ```bash
   npm run dev
   ```

   Access the application at http://localhost:5173

4. **Build for Production**
   ```bash
   npm run build
   ```

## Security Considerations

1. **Authentication**

   - Secure token storage
   - XSS prevention
   - CSRF protection

2. **Data Protection**
   - Input sanitization
   - Secure API communication
   - Environment variable management
