export interface EducationEntry {
  institution: string;
  program: string;
  period: string;
  image: string; // Path to institution logo
  website?: string;
  location?: string;
  degree?: string;
  achievements?: string[];
}

export const education: EducationEntry[] = [
  {
    institution: "Indian School of Business, Hyderabad",
    program: "i-venture Immersive Program",
    period: "2025",
    image: "/isb-logo1.webp",
    website: "https://www.isb.edu/",
    location: "Hyderabad, India",
    degree: "Entrepreneurship Immersive",
    achievements: [
      "Selected for elite i-venture program",
      "Collaborated with top founders and VCs",
      "Developed a scalable AI startup idea"
    ]
  },
  {
    institution: "Indian Space Research Organization (ISRO)",
    program: "Spatial Data Science",
    period: "2021",
    image: "/ISRO.svg",
    website: "https://www.isro.gov.in/",
    location: "India",
    degree: "Certification in Spatial Data Science",
    achievements: [
      "Completed advanced geospatial analytics training",
      "Worked on satellite data projects"
    ]
  },
  {
    institution: "Birla Institute of Technology, Mesra",
    program: "Computer Science",
    period: "2018",
    image: "/BIT mesra.png",
    website: "https://www.bitmesra.ac.in/",
    location: "Ranchi, India",
    degree: "B.E. in Computer Science",
    achievements: [
      "Graduated with First Class Honors",
      "President, Coding Club",
      "Top 5% in class"
    ]
  },
]; 