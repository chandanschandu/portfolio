import {
  mobile,
  backend,
  creator,
  web,
  car,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  django,

  starbucks,
  tesla,
  shopify,
  carrent,
  vs,
  jobit,
  tripguide,
  threejs,
  voice,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python FullStack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [

  {
    name: "python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "HTML 5",
    icon: html,
  },
 
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  { 
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  
];

const experiences = [
  {
    title: "AI Model Trainer Outlier (Remote Part-Time)",
    company_name: "Outlier",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2024 - Present",
    points: [
      "Trained scalable AI models using Python, focusing on enhancing accuracy and performance optimization.",
      "Leveraged machine learning frameworks such as PyTorch and TensorFlow to create innovative solutions.",
       "Designed and implemented data pipelines to streamline the model training process.",

    ],
  },
  {
    title: "Python Fullstack Intern",
    company_name: "kodenest",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Sep 2024",
    points: [
      
      "Worked on full-stack development projects, blending Django for backend efficiency and React for dynamic, responsive frontend interfaces.",
      "Developed REST APIs to ensure smooth communication between application layers, facilitating seamless data flow and interaction.",
      "Designed scalable systems that improve overall user experience and application performance.",
      "Collaborated closely with cross-functional teams to refine project requirements and deliver solutions that align with client needs and goals.",
    
    
    ],
  },
  {
    title: "Web Developer",
    company_name: "Free Lanccer",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Amdocs GenAI Graduate Hackathon 2024 (Ongoing).",
    // name: "Sara Lee",
    // designation: "CFO",
    // company: "Acme Co",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "TCS CodeVita Season 12 Participant.",
    // name: "Chris Brown",
    // designation: "COO",
    // company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Video Sumarization with Transformer Model",
    description:
      "This project aims to achieve a highly advanced video summarizing system to create a meaningful narrative based on visual content. It is designed to build an efficient automated tool that can analyze, summarize, and retrieve video information effectively.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Transformers",
        color: "pink-text-gradient",
      },
    ],
    image: vs,
    source_code_link: "https://github.com/chandanschandu/VIDEO-SUMMARIZATION-WITH-TRANSFORMER-MODELS",
  },
  {
    name: "Voice-Activated Assistant with Speech Recognition and Task Automation",
    description:
      "Built a voice-controlled assistant using Python that listens to user commands, performs web searches, opens websites and applications, retrieves information, and provides Wikipedia summaries.",
    tags: [
      {
        name: ": Python",
        color: "blue-text-gradient",
      },
      {
        name: ": pyttsx3",
        color: "green-text-gradient",
      },
      {
        name: "Speech Recognition",
        color: "pink-text-gradient",
      },
    ],
    image: voice,
    source_code_link: "https://github.com/chandanschandu/Voice-Activated-Assistant-with-Speech-Recognition-and-Task-Automation",
  },
  {
    name: "Full Spectrum Car Booking Application using Django",
    description:
      "•	Developed a comprehensive platform using Django for users and business owners to facilitate vehicle bookings, sales, and services. Implemented key functionalities such as user authentication, vehicle listing, booking management.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Rest API",
        color: "pink-text-gradient",
      },
    ],
    image: car,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
