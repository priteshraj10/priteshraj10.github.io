export interface WorkExperience {
  title: string;
  period: string;
  role: string;
  description: string;
  achievements: string[];
  images: {
    src: string;
    alt: string;
  }[];
}

export const workExperience: WorkExperience[] = [
  {
    title: "2025 - Present",
    period: "2025 - Present",
    role: "Founder at Langtrain",
    description: "AI Fine-tuning Platform",
    achievements: [
      "Building privacy-first AI fine-tuning platform for custom language models",
      "Enabling users to train models on their own data with enterprise-grade security",
      "Developing scalable infrastructure with Next.js, Python, PyTorch, and AWS",
      "Creating intuitive UI for non-technical users to fine-tune AI models"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        alt: "AI Platform"
      }
    ]
  },
  {
    title: "2023 - 2025",
    period: "2023 - 2025",
    role: "Founder at CliniQX (QuadTree.ai)",
    description: "Healthcare AI Platform",
    achievements: [
      "Founded AI-powered EHR/EMR platform for unified healthcare records",
      "Developed custom medical LLM using Hugging Face & LangChain for clinical insights",
      "Secured 5 Lakh INR seed funding from ISB's iVenture program",
      "Built scalable cloud architecture with FastAPI, MongoDB, and Docker"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
        alt: "Healthcare AI"
      }
    ]
  },
  {
    title: "2021 - 2023",
    period: "2021 - 2023",
    role: "Data Scientist at ThrivePass",
    description: "Data Analytics & Automation",
    achievements: [
      "Engineered scalable data pipeline using Python, Flask, and SQL",
      "Automated report generation and delivery using cron jobs",
      "Implemented OCR system for automated document processing"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        alt: "Data Science"
      }
    ]
  },
  {
    title: "2020",
    period: "2020",
    role: "Machine Learning Engineer at Pretpick",
    description: "E-commerce AI",
    achievements: [
      "Built ML-powered product recommendation engine",
      "Developed real-time analytics dashboards with React.js",
      "Implemented A/B testing framework for ML models"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        alt: "ML Engineering"
      }
    ]
  },
  {
    title: "2018",
    period: "2018",
    role: "Data Analyst (ML Research) at Cognitensor",
    description: "Computer Vision",
    achievements: [
      "Developed advanced surveillance system with OpenCV & TensorFlow",
      "Implemented real-time object detection and tracking",
      "Built face recognition and license plate detection systems"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        alt: "Computer Vision"
      }
    ]
  }
];