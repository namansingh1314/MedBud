# Medicine Recommendation System - Backend Documentation

## Overview

This is a machine learning-based medicine recommendation system that predicts diseases based on symptoms and provides personalized recommendations for medications, diet, and workouts.

## System Architecture

### Backend Components

1. **Flask API Server** (`main.py`)

   - Handles HTTP requests for disease prediction
   - Provides RESTful endpoints for symptom analysis
   - Manages data processing and model inference

2. **Machine Learning Model**

   - Support Vector Machine (SVM) classifier
   - Trained on a comprehensive dataset of symptoms and diseases
   - Model file: `models/svc.pkl`

3. **Dataset Files**
   - `Training.csv`: Main training dataset with 4920 samples and 133 features
   - `symtoms_df.csv`: Symptom descriptions and details
   - `precautions_df.csv`: Disease-specific precautions
   - `medications.csv`: Recommended medications for each disease
   - `diets.csv`: Diet recommendations
   - `workout_df.csv`: Exercise recommendations
   - `description.csv`: Detailed disease descriptions

## Machine Learning Implementation

### Data Processing

- **Feature Engineering**: 132 binary symptom features (0/1 encoding)
- **Target Variable**: 41 unique disease classes
- **Dataset Size**: 4,920 training samples

### Model Architecture

- **Algorithm**: Support Vector Machine (SVM) Classifier
- **Implementation**: scikit-learn's SVC
- **Feature Space**: 132-dimensional binary vector

### Model Training

1. **Data Preparation**

   - Binary encoding of symptoms (presence/absence)
   - Feature standardization
   - Label encoding for disease classes

2. **Training Process**
   - Model: Support Vector Machine (SVM)
   - Input: 132 symptom features
   - Output: Disease prediction among 41 classes

## API Endpoints

### Disease Prediction

```
Endpoint: /predict
Methods: GET, POST
Input: Comma-separated symptoms
Output: JSON response with
  - Predicted disease
  - Disease description
  - Recommended precautions
  - Recommended medications
  - Diet recommendations
  - Workout suggestions
```

## Dependencies

```
flask==2.3.3
flask-cors==4.0.0
numpy==1.24.3
pandas==2.0.3
scikit-learn==1.4.2
```

## Docker Setup

### Using Docker

1. **Build and run the container**

   ```bash
   docker build -t medicine-backend .
   docker run -p 5000:5000 medicine-backend
   ```

2. **Using Docker Compose (Recommended)**
   ```bash
   docker-compose up backend
   ```
   The backend API will be available at http://localhost:5000

### Environment Variables

- FLASK_APP: main.py (default)
- FLASK_ENV: production/development

## System Workflow

1. **Symptom Input**

   - User provides symptoms via API
   - System validates and processes input

2. **Disease Prediction**

   - Symptoms converted to binary feature vector
   - SVM model predicts most likely disease

3. **Recommendation Generation**
   - System retrieves disease-specific information
   - Compiles personalized recommendations
   - Returns comprehensive JSON response

## Error Handling

- Input validation for symptoms
- Proper error messages for invalid inputs
- Graceful handling of model prediction errors
- Comprehensive error logging

## Performance and Scalability

- Efficient model inference
- Optimized data loading and caching
- Error handling and logging for production use
- RESTful API design for scalability

## Security Considerations

- Input sanitization
- Error message sanitization
- Proper exception handling
- No sensitive data exposure



Package	Role in Project
flask	Runs the API web server
flask-cors	Allows API access from frontend (e.g. React)
numpy	Math & array creation for model input
pandas	CSV reading & data processing
scikit-learn	ML model loading and prediction
