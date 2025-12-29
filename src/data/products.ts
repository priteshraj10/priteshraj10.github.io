export interface Product {
    href: string;
    title: string;
    description: string;
    thumbnail: string;
    stack: string[];
}

export const products: Product[] = [
    {
        href: "https://github.com/quadtree-ai",
        title: "CliniQX",
        description:
            "AI-powered EHR/EMR platform for unified healthcare records. Built with custom medical LLM using Hugging Face & LangChain for clinical insights.",
        thumbnail: "/window.svg",
        stack: ["Python", "LangChain", "FastAPI", "MongoDB"],
    },
    {
        href: "https://langtrain.space",
        title: "LangTrain",
        description:
            "Privacy-first AI fine-tuning platform enabling users to train custom language models on their own data with enterprise-grade security.",
        thumbnail: "/window.svg",
        stack: ["Next.js", "Python", "PyTorch", "AWS"],
    },
    {
        href: "https://github.com/priteshraj10",
        title: "ML Research Projects",
        description:
            "Computer vision systems with OpenCV & TensorFlow including real-time object detection, face recognition, and license plate detection.",
        thumbnail: "/window.svg",
        stack: ["TensorFlow", "OpenCV", "Python", "Docker"],
    },
    {
        href: "https://kaggle.com/priteshraj10",
        title: "Data Science Portfolio",
        description:
            "Kaggle competitions and data science projects covering NLP, time-series forecasting, and recommendation systems.",
        thumbnail: "/window.svg",
        stack: ["Python", "Pandas", "Scikit-learn", "XGBoost"],
    },
];
