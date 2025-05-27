# Med bud

## Overview

The Medicine Recommendation System is an intelligent healthcare application that combines machine learning with a modern web interface to predict diseases based on symptoms and provide personalized health recommendations. The system consists of two main components:

- **Frontend**: A responsive React-based web application
- **Backend**: A Flask-based API server with machine learning capabilities

## System Architecture

### Frontend (React + TypeScript)

- Built with React 18 and TypeScript for robust type safety
- Modern development setup using Vite
- Responsive UI with Chakra UI components
- Client-side routing with React Router v6
- SEO optimization using React Helmet
- Real-time loading indicators with NProgress
- Secure authentication via Supabase

### Backend (Flask + Machine Learning)

- Flask API server for handling HTTP requests
- Support Vector Machine (SVM) classifier for disease prediction
- Comprehensive dataset integration
- RESTful API endpoints for symptom analysis
- Efficient data processing and model inference

## Key Features

### Disease Prediction

- Interactive symptom selection interface
- Real-time form validation
- Machine learning-based disease prediction
- Comprehensive health recommendations

### Personalized Recommendations

- Medication suggestions
- Customized diet plans
- Tailored exercise recommendations
- Detailed health precautions

### User Experience

- Responsive design for all devices
- Intuitive navigation
- Progress indicators
- SEO optimization
- Secure authentication


## Project Structure

```
Medicine-Recommendation-System/
├── Frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── contexts/        # React context providers
│   │   ├── pages/          # Route-level components
│   │   ├── services/       # API integrations
│   │   ├── styles/         # Global styles
│   │   ├── theme/          # UI theme configuration
│   │   └── App.tsx         # Root component
│   └── public/             # Static assets
│
├── Backend/                 # Flask backend server
│   ├── main.py             # API server implementation
│   ├── models/             # ML model files
│   │   └── svc.pkl         # Trained SVM model
│   └── data/               # Dataset files
│       ├── Training.csv
│       ├── medications.csv
│       ├── diets.csv
│       └── workout_df.csv
```

## Machine Learning Implementation

- **Algorithm**: Support Vector Machine (SVM) Classifier
- **Feature Space**: 132 binary symptom features
- **Disease Classes**: 41 unique diseases
- **Training Data**: 4,920 samples

## API Endpoints

### Disease Prediction

```
Endpoint: /predict
Methods: GET, POST
Input: Comma-separated symptoms
Output: JSON with disease prediction and recommendations
```

## Setup Instructions

### Using Docker (Recommended)

1. **Prerequisites**

   - Docker
   - Docker Compose

2. **Run the entire application stack**

   ```bash
   docker-compose up --build
   ```

   This will start:

   - Frontend at http://localhost:5173
   - Backend API at http://localhost:5000
   - input command ipconfig ,copy the ipv4 (for example IPv4 Address. . : 172.22.192.1) then put this in browser with port number as
    [http://172.22.192.1:5173/] now you can do hot reload also which is not possible in localhost.

3. **Stop the application**
   ```bash
   docker-compose down
   ```

### Manual Setup

#### Frontend Setup

1. Install dependencies:

   ```bash
   cd Frontend
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at http://localhost:5173

### Backend Setup

1. Install Python dependencies:

   ```bash
   cd Backend
   pip install -r requirements.txt
   ```

2. Start Flask server:
   ```bash
   python main.py
   ```

## Security Considerations

- Secure authentication implementation
- Input sanitization
- Error message sanitization
- Protected API endpoints
- No sensitive data exposure

## Performance Optimization

### Frontend

- Code splitting and lazy loading
- Asset optimization
- Bundle size management

### Backend

- Efficient model inference
- Optimized data loading
- Response caching
- Scalable API design

## Contributing

Please read our contributing guidelines before submitting pull requests to the project.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
