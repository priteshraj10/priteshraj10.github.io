export const SITE_CONFIG = {
  name: "Pritesh Raj",
  title: "Pritesh Raj - AI Architect & Data Scientist",
  description: "Passionate about building intelligent systems and innovative solutions that bridge the gap between AI and real-world impact.",
  url: "https://priteshraj10.github.io",
  ogImage: "/me.jpeg",
  links: {
    linkedin: "https://www.linkedin.com/in/priteshraj",
    github: "https://github.com/priteshraj10",
    twitter: "https://x.com/10Priteshraj",
    kaggle: "https://www.kaggle.com/priteshraj10",
    medium: "https://medium.com/@priteshraj",
    huggingface: "https://huggingface.co/priteshraj",
    gravatar: "https://gravatar.com/priteshraj",
  },
} as const;

export const ANIMATION_CONFIG = {
  hero: {
    duration: 0.9,
    delay: 0.2,
  },
  textFlip: {
    interval: 3000,
    animationDuration: 700,
  },
  timeline: {
    scrollOffset: ["start 10%", "end 50%"],
  },
} as const;

export const HERO_WORDS = [
  "Entrepreneur",
  "AI Architect", 
  "Data Scientist",
  "Innovator"
] as const;

export const GITHUB_CONFIG = {
  username: "priteshraj10",
  reposPerPage: 6,
  sortBy: "updated" as const,
} as const;
