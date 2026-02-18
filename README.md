# AI Trip Planner

**AI-powered Trip Planning Application** that generates complete, personalized travel itineraries using **LangChain Agents + LangGraph Workflows**.

This project combines:

- **FastAPI Backend**
- **LangGraph Multi-Agent System**
- **Google Places + Tavily Search Integration**
- **React Frontend with Modern UI**

It is designed to deliver an end-to-end intelligent travel planning experience.

---

## 🚀 Key Features

✅ AI-generated personalized itineraries  
✅ Multi-agent workflow using **LangGraph**  
✅ Real-time place recommendations via **Google Places API**  
✅ Smart travel search with **Tavily Tool**  
✅ Modern interactive frontend using **React + Framer Motion**  
✅ Modular backend architecture for scalability  

---

## 🧠 Project Architecture

This system works with multiple AI modules:

- **Agent Layer** → Handles user trip requirements  
- **Workflow Layer** → LangGraph manages agent execution  
- **Tools Layer** → Google Places + Tavily Search APIs  
- **Frontend Layer** → React-based travel planner UI  

---

## 🛠️ Tech Stack

### Backend

- **FastAPI**
- **LangChain**
- **LangGraph**
- **Groq / OpenAI Models**
- **Google Places API**
- **Tavily Search**
- **Pydantic**
- **Uvicorn**

### Frontend

- **React.js**
- **React Router**
- **Framer Motion Animations**
- **React Markdown Rendering**

---

## 📂 Folder Structure

```bash
AI_Trip_Planner/
│
├── agent/                  # AI agents for planning & execution
│   ├── agent.py
│   ├── workflow.py
│   └── tools/
│
├── config/                 # Configuration & environment setup
│   ├── config.yaml
│   └── exception/
│
├── frontend/               # React UI for Trip Planner
│   ├── public/
│   ├── src/
│   └── package.json
│
├── logger/                 # Logging module
│
├── notebook/               # Experimentation notebooks
│
├── prompt_library/         # Prompt templates for agents
│
├── schema/                 # Pydantic schemas for request/response
│
├── utils/                  # Helper utilities (currency, location, etc.)
│
├── main.py                 # Main entry point
├── streamlit_app.py        # Streamlit version (optional UI)
├── requirements.txt        # Backend dependencies
└── README.md               # Project documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Rajatkpaliwal/AI_Trip_Planner.git
cd AI_Trip_Planner
```

---

### 2️⃣ Backend Setup (FastAPI + LangChain)

#### Create Virtual Environment

```bash
python -m venv venv
source venv/bin/activate     # Linux/Mac
venv\Scripts\activate        # Windows
```

#### Install Requirements

```bash
pip install -r requirements.txt
```

---

### 3️⃣ Environment Variables

Create a `.env` file in root:

```env
OPENAI_API_KEY=your_key_here
GROQ_API_KEY=your_key_here
TAVILY_API_KEY=your_key_here
GOOGLE_API_KEY=your_key_here
```

---

### 4️⃣ Run Backend Server

```bash
uvicorn main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

## 🎨 Frontend Setup (React)

Go to frontend folder:

```bash
cd frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🎯 Example Workflow

1. User enters destination + duration + preferences  
2. LangGraph triggers multi-agent planning workflow  
3. Google Places fetches attractions  
4. Tavily provides real-time travel insights  
5. AI generates a structured itinerary  
6. React frontend displays plan beautifully  

---

## 📌 Future Enhancements

🚀 Hotel & Flight booking integration  
🚀 User authentication & saved trips  
🚀 Map visualization using Google Maps  
🚀 Multi-language itinerary support  
🚀 Deployment on AWS / Vercel  

---

## 👨‍💻 Author

**Rajat Kumar Paliwal**  
🎓 Computer Science Engineer | AI/ML Engineer 

🔗 GitHub: [Rajatkpaliwal](https://github.com/Rajatkpaliwal)

---

## ⭐ Support

If you find this project useful, please give it a ⭐ on GitHub.  
It motivates me to build more AI-powered applications!

