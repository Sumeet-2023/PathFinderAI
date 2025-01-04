# PathFinderAI

**PathFinderAI** is an AI-powered career coaching platform designed to help job seekers optimize their career paths. This platform provides AI-driven tools for improving resumes, preparing for interviews, crafting personalized cover letters, and receiving career advice.

### Key Features:
1. **AI Resume Analysis and Feedback**: Upload a resume to receive suggestions on structure, keywords, and tailoring to specific job roles.
2. **Mock Interview Practice**: Use conversational AI to simulate interview scenarios and provide real-time feedback.
3. **Sentiment Analysis for Cover Letters**: Analyze the tone and sentiment of cover letters to ensure professionalism and engagement.
4. **Cover Letter Personalization**: Automatically generate a personalized cover letter by extracting information from job descriptions, resumes, and company websites.
5. **Chatbot as Virtual Career Assistant**: A conversational assistant offering job tips, guidance on features, and career-related advice.

---

## Table of Contents
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)

---

## Technologies

### Frontend:
- **Next.js**: A React framework for building optimized and fast web applications.
- **Material-UI**: A design system to speed up development with pre-built components.
- **Draft.js or Quill**: Rich text editor for user inputs like cover letters.
  
### Backend:
- **Node.js + Express**: Backend server to handle API requests, process user data, and integrate with AI services.
- **MongoDB**: NoSQL database for storing user profiles, uploaded documents, and generated content.
  
### AI and NLP:
- **OpenAI GPT-3.5/4**: For generating cover letters, resume suggestions, and mock interview interactions.
- **Hugging Face Transformers**: For NLP tasks such as sentiment analysis, resume parsing, and keyword extraction.
- **Rasa**: For building conversational AI and chatbot features.
- **Google Cloud Speech-to-Text**: Convert voice input to text for mock interviews.

### Scraping:
- **Puppeteer**: For scraping company websites to gather insights into their mission, values, and achievements.
  
### Deployment:
- **Vercel**: Hosting the frontend Next.js app.
- **Railway**: Hosting the backend and managing server-side processes.

---

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/PathFinderAI.git
cd PathFinderAI
```

### 2. Install Dependencies for Frontend
```bash
cd frontend
npm install
```

### 3. Install Dependencies for Backend
```bash
cd backend
npm install
```

### 4. Configure Environment Variables
Create a `.env` file in the root of both the frontend and backend directories, and add the following variables:

- **Frontend**:
  - `NEXT_PUBLIC_API_URL=http://localhost:5000`
  
- **Backend**:
  - `OPENAI_API_KEY=your_openai_api_key`
  - `MONGODB_URI=your_mongodb_connection_string`
  - `GOOGLE_SPEECH_API_KEY=your_google_speech_api_key`
  - `RASA_URL=http://localhost:5005` (if using Rasa for chatbot)

### 5. Run the Application
To run both frontend and backend:

1. **Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

2. **Backend**:
   ```bash
   cd backend
   npm start
   ```

---

## Usage

Once the application is running, users can:

1. **Upload their Resume**: To receive feedback on structure and tailoring suggestions.
2. **Prepare for Mock Interviews**: Engage with the chatbot to simulate real interview scenarios and receive feedback.
3. **Paste a Job Description**: To generate a tailored cover letter based on the provided job role, resume, and company URL.
4. **Interact with the Virtual Career Assistant**: Ask questions or get advice about career-related topics.

---

## API Documentation

### **POST /api/analyze-resume**
- **Description**: Analyzes an uploaded resume and provides suggestions for improvements.
- **Request Body**: 
  ```json
  {
    "resume": "base64_encoded_resume"
  }
  ```
- **Response**: 
  ```json
  {
    "feedback": "Suggestions for improving resume structure and keyword optimization."
  }
  ```

### **POST /api/mock-interview**
- **Description**: Simulates an interview and provides feedback on user answers.
- **Request Body**:
  ```json
  {
    "question": "Tell me about yourself",
    "answer": "My name is..."
  }
  ```
- **Response**: 
  ```json
  {
    "feedback": "Improve tone, add specific skills, and increase confidence."
  }
  ```

### **POST /api/sentiment-analysis**
- **Description**: Analyzes the sentiment of a provided cover letter.
- **Request Body**:
  ```json
  {
    "cover_letter": "Your text here"
  }
  ```
- **Response**: 
  ```json
  {
    "sentiment": "Positive, Professional"
  }
  ```

---

## Contributing

We welcome contributions! Please follow the steps below to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---