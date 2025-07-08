export interface EducationEntry {
  institution: string;
  program: string;
  period: string;
  image: string; // Path to institution logo
}

export const education: EducationEntry[] = [
  {
    institution: "Indian School of Business, Hyderabad",
    program: "i-venture Immersive Program",
    period: "2025",
    image: "/isb-logo1.webp",
  },
  {
    institution: "Indian Space Research Organization (ISRO)",
    program: "Spatial Data Science",
    period: "2021",
    image: "/ISRO.svg",
  },
  {
    institution: "Birla Institute of Technology, Mesra",
    program: "Computer Science",
    period: "2018",
    image: "/BIT mesra.png",
  },
]; 