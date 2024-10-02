import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a dedicated tech enthusiast with a focus on building impactful solutions in Data Science, Machine Learning, and Cloud Computing. Exploring the data-driven frontier, I have hands-on experience in Python, SQL, tools like Power Bi and cloud platform like Microsoft Azure, developing robust projects.My passion for problem-solving drives me to continuously improve and innovate with scalable, real-world applications.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "CLI weather tool",
    image: project1,
    description:
      "The CLI Weather Tool is a command-line interface program that fetches real-time weather data using the OpenWeatherMap API.",
    technologies: ["Python", "Azure Blob storage", "OpenWatherMap API"],
  },
  {
    title: "Dogs Breed Claasification",
    image: project2,
    description:
      "The objective is to classify images of dogs into one of 120 different breeds using a pre-trained neural network model, specifically MobileNetV2 from TensorFlow Hub.",
    technologies: ["Python", "Deep Learning", "Tensorflow"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "Lingosync- Dubbing and Subtitling Software",
    image: project3,
    description:
      "Lingosync is a Python-based tool designed to automate the process of dubbing and subtitling videos.",
    technologies: ["Python", "Flask", "React", "Google Cloud API"],
  },
];

export const CONTACT = {
  address: "Greater Noida",
  phoneNo: "+91 7505691451 ",
  email: "pratibhpratap29@gmail.com",
};
