export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'RAG & Agents' | 'Computer Vision' | 'NLP & Deep Learning' | 'Analytics';
  description: string;
  longDescription: string;
  highlights: string[];
  architectureSteps?: { step: string; title: string; desc: string }[];
  metrics?: { label: string; value: string }[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Certification {
  title: string;
  organization: string;
  issuer: string;
  category: 'GenAI & ML' | 'Data Analytics' | 'Big Data';
  skills: string[];
  badge: string;
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Nachiket Rajendra Gadilohar",
    shortName: "Nachiket",
    monogram: "NG",
    title: "AI Engineer | Software Programmer (AI Focused)",
    location: "Pune, India",
    email: "nachiketlohar0306@gmail.com",
    phone: "+91-9881580306",
    experienceYears: "2+",
    github: "https://github.com/nachiket0987",
    linkedin: "https://www.linkedin.com/in/nachiket-gadilohar-profile/",
    bio: "AI Engineer with 2+ years of expertise in developing production AI pipelines for engineering automation. Skilled in applied machine learning, computer vision, NLP, OCR, generative AI, multi-agent RAG systems, and PLC industrial automation.",
    heroStatement: "Building AI Agents, RAG systems, PLC automation engines, and computer vision pipelines that reduce manual effort and solve real-world problems.",
    transitionStory: "My journey started with a B.Sc. in Physics at Fergusson College, Pune, where I built a deep foundation in mathematical modeling and analytical problem-solving. Driven by the desire to apply physics-level mathematical rigor to intelligent systems, I transitioned into an M.Sc. in Data Science / Computer Applications at Symbiosis Institute of Geoinformatics. Today, I turn complex frontier AI models into production-ready software systems.",
  },
  
  impactMetrics: [
    { value: "81%", label: "Turnaround Reduction", sub: "AutoCAD design effort (~370h → ~70h)" },
    { value: "95%", label: "Extraction Accuracy", sub: "PDF-to-XML electrical OCR pipeline" },
    { value: "90%+", label: "Model Accuracy", sub: "Industrial AI deployment environments" },
    { value: "7", label: "Agent RAG Pipeline", sub: "PaperBrain multi-agent architecture" },
    { value: "19+", label: "GitHub Repositories", sub: "AI/ML, RAG & Deep Learning projects" },
  ],

  pillars: [
    {
      index: "01",
      title: "Production-First ML & Industrial AI",
      description: "Engineering resilient AI pipelines grounded in real workflows — from AutoCAD automation to PLC Agent OS ladder logic synthesis and document intelligence.",
      tag: "Enterprise Automation"
    },
    {
      index: "02",
      title: "Retrieval & Multi-Agent Systems",
      description: "Designing multi-agent orchestration systems, FAISS vector search, and real-time SSE token streaming for accurate LLM answers.",
      tag: "LLM Orchestration"
    },
    {
      index: "03",
      title: "Computer Vision & Automation",
      description: "Leveraging OpenCV, PyTorch, and YOLOv5 for real-time visual recognition, sign language translation, and defect detection.",
      tag: "Deep Vision Systems"
    },
  ],

  skillsCategories: [
    {
      id: "ai-llm",
      title: "AI & LLMs",
      count: "10 Techs",
      icon: "Brain",
      skills: [
        { name: "Retrieval-Augmented Generation (RAG)", level: 95 },
        { name: "Multi-Agent LLM & Agent OS", level: 94 },
        { name: "Prompt Engineering", level: 90 },
        { name: "Vector Embeddings (FAISS)", level: 94 },
        { name: "Knowledge Graphs", level: 85 },
        { name: "OpenAI GPT-4 / Claude / Gemini", level: 92 },
        { name: "LangChain", level: 90 },
        { name: "PyTorch", level: 88 },
        { name: "YOLOv5 Object Detection", level: 92 },
        { name: "LSTM Deep Learning", level: 86 }
      ]
    },
    {
      id: "retrieval-data",
      title: "Retrieval & Data Science",
      count: "7 Techs",
      icon: "Database",
      skills: [
        { name: "FAISS Vector Search", level: 95 },
        { name: "PostgreSQL & Complex SQL", level: 90 },
        { name: "Text-to-SQL Systems", level: 92 },
        { name: "OCR Technology (Tesseract/Paddle)", level: 94 },
        { name: "PowerBI Dashboards & DAX", level: 88 },
        { name: "Audio Signal Processing (MFCC)", level: 84 },
        { name: "Spark & Hadoop", level: 80 }
      ]
    },
    {
      id: "backend-cloud",
      title: "Backend & MLOps",
      count: "8 Techs",
      icon: "Server",
      skills: [
        { name: "Python", level: 96 },
        { name: "FastAPI", level: 94 },
        { name: "Flask", level: 90 },
        { name: "REST API Design", level: 92 },
        { name: "Server-Sent Events (SSE Streaming)", level: 90 },
        { name: "Docker Containerization", level: 88 },
        { name: "CircleCI CI/CD Pipelines", level: 86 },
        { name: "AWS EC2 / Azure / GCP", level: 85 }
      ]
    },
    {
      id: "frontend-tools",
      title: "Frontend & Engineering",
      count: "6 Techs",
      icon: "Code",
      skills: [
        { name: "React.js", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "Streamlit AI Apps", level: 94 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Git & GitHub Actions", level: 92 },
        { name: "PLC & Industrial Automation APIs", level: 92 }
      ]
    }
  ],

  marqueeSkills: [
    "PLC Agent OS", "Multi-Agent LLMs", "RAG Pipelines", "FastAPI", "Python", "YOLOv5", 
    "FAISS Vector Search", "Docker", "AWS EC2", "CircleCI", "React.js", "TypeScript", 
    "OpenAI GPT-4", "PyTorch", "Text-to-SQL", "Computer Vision", "PostgreSQL", "PowerBI"
  ],

  certifications: [
    {
      title: "Generative AI (GenAI) Job Simulation",
      organization: "BCG (Boston Consulting Group)",
      issuer: "Forage",
      category: "GenAI & ML",
      skills: ["Generative AI", "LLM Prompting", "Business Strategy"],
      badge: "GenAI"
    },
    {
      title: "Data Science Job Simulation",
      organization: "BCG (Boston Consulting Group)",
      issuer: "Forage",
      category: "GenAI & ML",
      skills: ["Feature Engineering", "Predictive Modeling", "Python"],
      badge: "Data Science"
    },
    {
      title: "Power BI Job Simulation",
      organization: "PwC Switzerland",
      issuer: "Forage",
      category: "Data Analytics",
      skills: ["PowerBI Dashboards", "DAX", "KPI Dashboards"],
      badge: "PowerBI"
    },
    {
      title: "Data Analytics & Visualization",
      organization: "Accenture North America",
      issuer: "Forage",
      category: "Data Analytics",
      skills: ["Data Cleaning", "Visualization", "Insight Synthesis"],
      badge: "Analytics"
    },
    {
      title: "Data Visualization: Empowering Business",
      organization: "Tata Group",
      issuer: "Forage",
      category: "Data Analytics",
      skills: ["Executive Reporting", "Chart Design", "Business Analytics"],
      badge: "Tata"
    },
    {
      title: "Fundamentals of Python Machine Learning",
      organization: "Machine Learning Academy",
      issuer: "Certification",
      category: "GenAI & ML",
      skills: ["Scikit-Learn", "Supervised Learning", "Model Evaluation"],
      badge: "ML"
    },
    {
      title: "Introduction to Big Data with Spark & Hadoop",
      organization: "Big Data Academy",
      issuer: "Certification",
      category: "Big Data",
      skills: ["Apache Spark", "Hadoop Distributed File System", "PySpark"],
      badge: "Big Data"
    }
  ] as Certification[],

  projects: [
    {
      id: "plc-agent-os",
      title: "PLC Agent OS — Industrial Automation AI Engine",
      tagline: "Autonomous multi-agent OS for IEC 61131-3 PLC ladder logic synthesis & SCADA telemetry verification",
      category: "RAG & Agents",
      description: "Autonomous multi-agent system orchestrating LLM agents to parse industrial control specifications, synthesize IEC 61131-3 PLC ladder logic, and verify SCADA telemetry routines.",
      longDescription: "PLC Agent OS bridges modern frontier AI with industrial automation. It converts natural language control descriptions and P&ID diagrams into verified IEC 61131-3 Structured Text and Ladder Logic routines, running real-time OPC UA / Modbus simulation checks before hardware deployment.",
      highlights: [
        "Multi-agent IEC 61131-3 PLC Ladder Logic & Structured Text synthesis",
        "Formal logic verification sandbox eliminating physical commissioning bugs",
        "Industrial SCADA protocol bridging (OPC UA / Modbus / MQTT)",
        "Reduces PLC programming turnaround time by over 80%"
      ],
      architectureSteps: [
        { step: "01", title: "P&ID Intent Agent", desc: "Parses industrial control sequence specs and piping & instrumentation diagrams." },
        { step: "02", title: "PLC Code Synthesizer", desc: "Generates standardized IEC 61131-3 Structured Text and Ladder Logic code." },
        { step: "03", title: "Verification Sandbox", desc: "Executes virtual PLC simulation checks to validate state machine logic." },
        { step: "04", title: "SCADA Telemetry Agent", desc: "Bridges OPC UA / Modbus telemetry to real-time industrial dashboards." }
      ],
      metrics: [
        { label: "Standard", value: "IEC 61131-3" },
        { label: "Protocols", value: "OPC UA & Modbus" },
        { label: "Impact", value: "80% Faster PLC Dev" }
      ],
      techStack: ["Python", "FastAPI", "Multi-Agent", "PLC", "IEC 61131-3", "OPC UA", "Modbus", "Docker"],
      githubUrl: "https://github.com/nachiket0987/plc-agent-os",
      featured: true,
    },
    {
      id: "paperbrain",
      title: "PaperBrain — AI-Powered PDF Intelligence",
      tagline: "7-agent RAG document intelligence pipeline with real-time SSE streaming & multi-provider failover",
      category: "RAG & Agents",
      description: "Built a production-grade RAG document intelligence system with a 7-agent processing pipeline (Extract, Analyze, Preprocess, Optimize, Synthesize, Validate, Assemble).",
      longDescription: "PaperBrain is a multi-agent RAG platform for querying and synthesizing information from complex PDFs. It features FAISS vector search, real-time SSE token streaming, and an automated multi-provider LLM failover fallback engine to guarantee zero downtime.",
      highlights: [
        "7 specialized AI agents for multi-stage document processing",
        "FAISS vector database for sub-100ms context retrieval",
        "Real-time Server-Sent Events (SSE) token streaming",
        "Multi-provider LLM failover engine (OpenAI → Claude → Local)"
      ],
      architectureSteps: [
        { step: "01", title: "Extract Agent", desc: "Parses complex PDF layout structures, tables, and raw text chunks." },
        { step: "02", title: "Analyze Agent", desc: "Determines domain metadata, document intent, and topic distribution." },
        { step: "03", title: "Preprocess Agent", desc: "Cleans noise, normalizes mathematical formulas, and chunks text into embeddings." },
        { step: "04", title: "Optimize Agent", desc: "Executes FAISS hybrid vector search and reranks context passages." },
        { step: "05", title: "Synthesize Agent", desc: "Generates grounded answers via LLM with real-time SSE token streaming." },
        { step: "06", title: "Validate Agent", desc: "Cross-checks facts against source PDF citations to eliminate hallucinations." },
        { step: "07", title: "Assemble Agent", desc: "Formats final markdown response with inline citations and visual tables." }
      ],
      metrics: [
        { label: "Agents", value: "7 Pipeline Stages" },
        { label: "Latency", value: "<100ms Retrieval" },
        { label: "Reliability", value: "99.9% Failover" }
      ],
      techStack: ["React", "TypeScript", "FastAPI", "Python", "FAISS", "LangChain", "Multi-Agent", "SSE"],
      githubUrl: "https://github.com/nachiket0987/paperbrain",
      featured: true,
    },
    {
      id: "hateguard-nlp",
      title: "HateGuard-NLP — Production Hate Speech Classifier",
      tagline: "6-stage MLOps pipeline with LSTM, Docker, CircleCI, and AWS EC2 deployment",
      category: "NLP & Deep Learning",
      description: "Production-grade NLP classification system utilizing LSTM deep learning, automated MLOps pipelines, Docker, CircleCI, and AWS EC2 deployment.",
      longDescription: "HateGuard-NLP implements a strict 6-stage MLOps pipeline (data ingestion, validation, transformation, training, evaluation, model push). Model artifacts are stored in AWS S3, and automated continuous deployment triggers via CircleCI to Docker containers on AWS EC2.",
      highlights: [
        "6-stage automated MLOps pipeline",
        "LSTM Deep Learning text classification model",
        "Automated CI/CD with CircleCI & Docker",
        "Deployed on cloud infrastructure with AWS S3 & EC2"
      ],
      architectureSteps: [
        { step: "01", title: "Ingestion", desc: "Fetches text stream datasets and validates schema boundaries." },
        { step: "02", title: "Transformation", desc: "Tokenizes, removes stopwords, and builds word embedding matrices." },
        { step: "03", title: "LSTM Training", desc: "Trains recurrent neural network classifier with early stopping." },
        { step: "04", title: "Evaluation & Push", desc: "Evaluates accuracy/F1-score and pushes artifacts to AWS S3 & CircleCI Docker image." }
      ],
      metrics: [
        { label: "MLOps", value: "6 Stage Pipeline" },
        { label: "CI/CD", value: "CircleCI + Docker" },
        { label: "Cloud", value: "AWS S3 & EC2" }
      ],
      techStack: ["Python", "LSTM", "Docker", "AWS EC2", "AWS S3", "CircleCI", "Flask", "NLP"],
      githubUrl: "https://github.com/nachiket0987/hateguard-nlp",
      featured: true,
    },
    {
      id: "food-calories-estimation",
      title: "Food Calories & Volume Estimation via Image Processing",
      tagline: "Computer vision & SVM classifier pipeline for nutritional content & volume estimation",
      category: "Computer Vision",
      description: "Computer vision and SVM classification pipeline utilizing Canny edge detection, watershed segmentation, and Gabor filters to identify food items and estimate volume & calorie content.",
      longDescription: "Leverages OpenCV image processing algorithms (edge detection, morphological segmentation, color histograms, and Gabor texture feature extraction) combined with Support Vector Machines (SVM) to accurately measure food volume and calculate total caloric values.",
      highlights: [
        "Canny Edge Detection & Watershed Segmentation for contour extraction",
        "Gabor Filters & Color Histogram feature matrices",
        "SVM Classifier for multi-food item recognition",
        "Volumetric estimation formulas for nutritional breakdown"
      ],
      metrics: [
        { label: "Vision", value: "OpenCV + SVM" },
        { label: "Pipeline", value: "Canny + Watershed" },
        { label: "Task", value: "Calorie & Volume" }
      ],
      techStack: ["Python", "OpenCV", "Scikit-Learn", "SVM", "Image Processing", "Computer Vision"],
      githubUrl: "https://github.com/nachiket0987/Food-Calories-Estimation-Using-Image-Processing",
      featured: true,
    },
    {
      id: "uberdrive-analytics-engine",
      title: "UberDrive Analytics & Intelligence Engine",
      tagline: "End-to-end data analytics dashboard & predictive price engine built with Streamlit & Seaborn",
      category: "Analytics",
      description: "Analytics and intelligence engine for Uber ride data, discovering trip patterns, surge trends, and price factors via Python, Pandas, Seaborn, and Streamlit.",
      longDescription: "Comprehensive data science and analytical engine analyzing thousands of ride-share trips to evaluate distance-cost correlations, peak hour surges, weather impact, and passenger behavior with an interactive Streamlit dashboard.",
      highlights: [
        "End-to-end trip & price analytics dashboard",
        "Weather condition & peak-hour surge correlation modeling",
        "Interactive Streamlit web visualization app",
        "Exploratory Data Analysis (EDA) & insight generation"
      ],
      metrics: [
        { label: "Framework", value: "Streamlit + Pandas" },
        { label: "Visuals", value: "Seaborn + Matplotlib" },
        { label: "Domain", value: "Ride-Share Analytics" }
      ],
      techStack: ["Python", "Pandas", "Streamlit", "Seaborn", "Data Analytics", "Scikit-Learn"],
      githubUrl: "https://github.com/nachiket0987/uberdrive-analytics-engine",
      featured: true,
    },
    {
      id: "weather-prediction-cnn",
      title: "Weather Prediction with Deep CNN",
      tagline: "Deep Convolutional Neural Network for multi-class satellite weather image classification",
      category: "NLP & Deep Learning",
      description: "Deep Learning computer vision system utilizing Convolutional Neural Networks (CNN) for satellite weather image classification and atmospheric pattern recognition.",
      longDescription: "Trained a multi-layer Convolutional Neural Network (CNN) in PyTorch to classify atmospheric satellite imagery into weather categories (cloudy, rainy, sunny, hazardous conditions) with high validation accuracy.",
      highlights: [
        "Deep Convolutional Neural Network (CNN) architecture",
        "Satellite & atmospheric image dataset preprocessing",
        "PyTorch model training & hyperparameter optimization",
        "Confusion matrix & classification report metrics"
      ],
      techStack: ["Python", "PyTorch", "CNN", "Deep Learning", "OpenCV"],
      githubUrl: "https://github.com/nachiket0987/Weather_Prediction_with_CNN",
      featured: false,
    },
    {
      id: "signlens",
      title: "SignLens — Real-Time Sign Language Recognition",
      tagline: "End-to-end computer vision deep learning pipeline using YOLOv5 & Flask",
      category: "Computer Vision",
      description: "End-to-end computer vision pipeline for real-time sign language recognition using custom-trained YOLOv5 and Flask API.",
      longDescription: "SignLens captures video frames, detects hand sign gestures with high precision using a YOLOv5 object detection model, and streams natural language text predictions to the web interface in real time.",
      highlights: [
        "Custom dataset annotated & trained with YOLOv5",
        "Real-time webcam video stream inferencing via OpenCV",
        "Flask web backend with low-latency image processing",
        "High accuracy in variable lighting conditions"
      ],
      metrics: [
        { label: "Inference Speed", value: "30 FPS Realtime" },
        { label: "Model", value: "YOLOv5 PyTorch" },
        { label: "Backend", value: "Flask + OpenCV" }
      ],
      techStack: ["Python", "YOLOv5", "PyTorch", "Flask", "OpenCV", "Computer Vision"],
      githubUrl: "https://github.com/nachiket0987/signlens",
      featured: false,
    },
    {
      id: "tripmind-ai",
      title: "TripMind AI — Multi-Agent Travel Intelligence",
      tagline: "Multi-agent travel planning system deployed via Docker on AWS EC2",
      category: "RAG & Agents",
      description: "Production-grade multi-agent AI system orchestrating specialized LLM agents for travel planning, itinerary synthesis, and real-time data aggregation.",
      longDescription: "Engineered using TaskflowAI and OpenAI GPT models, TripMind AI orchestrates multiple autonomous agents that query flight, weather, and venue APIs simultaneously to generate personalized travel itineraries.",
      highlights: [
        "Multi-agent task orchestration with TaskflowAI",
        "Real-time external API data aggregation",
        "Interactive Streamlit dashboard",
        "Dockerized AWS EC2 deployment with GitHub Actions"
      ],
      techStack: ["Python", "TaskflowAI", "OpenAI", "Streamlit", "Docker", "AWS EC2"],
      githubUrl: "https://github.com/nachiket0987/tripmind-ai",
      featured: false,
    },
    {
      id: "ai-database-query-bot",
      title: "AI Database Query Bot (Text-to-SQL)",
      tagline: "Natural language interface for querying SQL databases via OpenAI & Streamlit",
      category: "RAG & Agents",
      description: "Web-based AI interface translating plain English questions into optimized PostgreSQL queries with automated execution.",
      longDescription: "Eliminates the need for technical SQL knowledge by using LLMs to parse database schemas, construct safe SQL queries, execute them on PostgreSQL, and synthesize analytical text answers and visual charts.",
      highlights: [
        "Schema-aware SQL query generation",
        "PostgreSQL integration with safety validation",
        "Streamlit interactive dashboard",
        "Natural language analytics synthesis"
      ],
      techStack: ["Python", "PostgreSQL", "OpenAI", "Streamlit", "Text-to-SQL", "NLP"],
      githubUrl: "https://github.com/nachiket0987/ai-database-query-bot",
      featured: false,
    },
    {
      id: "cotton-disease-prediction",
      title: "Cotton Disease Prediction (Transfer Learning)",
      tagline: "Deep learning ResNet50 model evaluated on 1,951 labeled agricultural images",
      category: "Computer Vision",
      description: "Compared transfer learning architectures (InceptionV3, ResNet50, ResNet152V2) for 4-class agricultural disease classification.",
      longDescription: "Trained and optimized a ResNet50 deep learning model on 1,951 agricultural images to assist farmers in early detection of leaf diseases, achieving high classification accuracy.",
      highlights: [
        "Comparative evaluation of 3 transfer learning models",
        "1,951 image agricultural dataset pipeline",
        "ResNet50 optimal accuracy fine-tuning",
        "Automated disease identification"
      ],
      techStack: ["Python", "ResNet50", "PyTorch", "OpenCV", "Deep Learning"],
      githubUrl: "https://github.com/nachiket0987/cotton-disease-prediction-deeplearning",
      featured: false,
    },
    {
      id: "speech-emotion-recognition",
      title: "Speech Emotion Recognition System",
      tagline: "Audio signal processing and machine learning classification pipeline",
      category: "NLP & Deep Learning",
      description: "Audio processing system extracting MFCC features from speech signals to classify emotional states using machine learning.",
      longDescription: "Processes raw audio recordings, extracts Mel-Frequency Cepstral Coefficients (MFCCs) and spectral features, and trains classifier models to accurately detect emotional tone in voice recordings.",
      highlights: [
        "Signal processing & MFCC feature extraction",
        "Audio dataset normalization & augmentation",
        "Multi-class emotion classification",
        "Real-time audio clip inferencing"
      ],
      techStack: ["Python", "Audio Signal Processing", "Machine Learning", "Librosa", "Scikit-Learn"],
      githubUrl: "https://github.com/nachiket0987/speech-emotion-recognition",
      featured: false,
    },
    {
      id: "us-healthcare-analysis-powerbi",
      title: "US Healthcare Analysis (PowerBI Dashboard)",
      tagline: "Interactive BI analysis of U.S. hospital performance & patient outcomes (2019-2020)",
      category: "Analytics",
      description: "PowerBI-driven analysis analyzing U.S. healthcare datasets, hospital performance metrics, treatment costs, and patient recovery outcomes.",
      longDescription: "Comprehensive data visualization project analyzing multi-state hospital records to highlight efficiency bottlenecks, cost variations, and clinical outcome metrics across healthcare facilities.",
      highlights: [
        "Multi-page interactive PowerBI dashboards",
        "DAX measures for hospital performance KPIs",
        "Patient outcome & cost analysis",
        "Executive business intelligence reporting"
      ],
      techStack: ["PowerBI", "DAX", "Data Visualization", "Healthcare Analytics", "SQL"],
      githubUrl: "https://github.com/nachiket0987/us-healthcare-analysis-powerbi",
      featured: false,
    }
  ],

  experiences: [
    {
      id: "transtech",
      role: "Software Programmer (AI Focused)",
      organization: "Trans Tech Projects Pvt. Ltd.",
      period: "Apr 2025 – May 2026",
      type: "work",
      location: "Pune, India",
      summary: "Led production AI engineering, PLC automation systems, and AutoCAD pipelines for industrial engineering workflows.",
      bulletPoints: [
        "Architected PLC Agent OS: an autonomous multi-agent operating system for IEC 61131-3 PLC ladder logic synthesis and SCADA telemetry verification, reducing industrial automation programming time by 80%.",
        "Engineered an AI-driven AutoCAD automation pipeline leveraging Python and computer vision, reducing design turnaround time by 81% (from ~370 to ~70 hours) while ensuring over 90% accuracy.",
        "Developed a PDF-to-XML document intelligence system using Python, FastAPI, and OCR technology, achieving 95% data extraction accuracy and eliminating manual data entry in electrical simulation workflows.",
        "Led requirement analysis, model development, API integration, deployment, and cloud monitoring across multiple engineering automation projects.",
        "Mentored 2 junior team members by creating standardized AI documentation templates and conducting hands-on knowledge transfer sessions."
      ],
      technologies: ["Python", "FastAPI", "PLC Agent OS", "IEC 61131-3", "OPC UA", "Computer Vision", "OCR", "AutoCAD API", "Docker"]
    },
    {
      id: "personifwy",
      role: "ASIC Intern",
      organization: "Personifwy",
      period: "Aug 2024 – Sep 2024",
      type: "internship",
      location: "Pune, India",
      summary: "Data analysis & business analytics internship.",
      bulletPoints: [
        "Applied data analysis techniques to real business datasets during a project-based internship while adhering to strict confidentiality and IP protection standards."
      ],
      technologies: ["Python", "Data Analysis", "SQL", "Pandas"]
    },
    {
      id: "drdo",
      role: "Laboratory Assistant (Summer Internship)",
      organization: "DRDO, Ministry of Defence, Govt of India",
      period: "Mar 2020 – May 2020",
      type: "internship",
      location: "Pune, India",
      summary: "Defense laboratory scientific data collection & analytical equipment operation.",
      bulletPoints: [
        "Assisted in scientific data collection and analysis in a defense research laboratory, operating advanced equipment and collaborating with defense scientists to ensure accuracy under strict safety protocols."
      ],
      technologies: ["Data Collection", "Laboratory Analysis", "Scientific Equipment Operation"]
    },
    {
      id: "msc-education",
      role: "M.Sc. Computer Applications / Geoinformatics",
      organization: "Symbiosis Institute of Geoinformatics, Pune",
      period: "2023 – 2025",
      type: "education",
      location: "Pune, India",
      summary: "Advanced specialization in data science, computer science, spatial algorithms, and AI/ML systems.",
      bulletPoints: [
        "Specialized in data science, machine learning models, spatial computing, and scalable software pipelines.",
        "Completed thesis project on multi-agent AI systems and document intelligence."
      ],
      technologies: ["Data Science", "Machine Learning", "Spatial Computing", "Python", "SQL"]
    },
    {
      id: "bsc-physics",
      role: "B.Sc. Physics",
      organization: "Fergusson College, Pune",
      period: "2019 – 2022",
      type: "education",
      location: "Pune, India",
      summary: "Foundational degree in physical sciences, mathematical modeling, and problem-solving.",
      bulletPoints: [
        "Graduated with 74% aggregate.",
        "Built deep mathematical intuition, differential equation modeling, and analytical scientific reasoning that laid the foundation for artificial intelligence and machine learning engineering."
      ],
      technologies: ["Mathematical Modeling", "Statistical Analysis", "Calculus & Linear Algebra", "Scientific Computing"]
    }
  ]
};
