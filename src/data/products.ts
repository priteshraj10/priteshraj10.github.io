export interface Product {
    href: string;
    title: string;
    description: string;
    thumbnail: string;
    stack: string[];
}

export const products: Product[] = [
    {
        href: "https://langtrain.xyz",
        title: "Langtrain",
        description:
            "High-performance infrastructure for fine-tuning Large Language Models at scale. Enabling enterprise AI with distributed training pipelines and secure data orchestration.",
        thumbnail: "/window.svg",
        stack: ["Next.js", "Python", "PyTorch", "AWS"],
    },
    {
        href: "https://github.com/quadtree-ai",
        title: "CliniQX",
        description:
            "Domain-specific AI infrastructure featuring a custom medical LLM fine-tuned for clinical reasoning and automated healthcare workflows.",
        thumbnail: "/window.svg",
        stack: ["Python", "LangChain", "FastAPI", "MongoDB"],
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
