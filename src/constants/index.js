import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  logo,
  shopify,
  solar,
  derma,
  face,
  threejs,
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
    title: "React Developer",
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
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "E-commerce Website Development",
    company_name: "Web Developer",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2021 - Nov 2021",
    points: [
      "Developed and maintained a fully functional e-commerce website using HTML, CSS, and SQL to manage the product database.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Integrated secure database connections for product management, including adding, updating, and deleting items in the inventory.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Ensured cross-browser compatibility and worked on optimizing website load time for better performance.",
      "Gained hands-on experience in front-end and back-end development, as well as database management.",
    ],
  },
  {
    title: "Automated Face Recognition Attendance System",
    company_name: "ML Engineer",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - May 2022",
    points: [
      "Designed and developed a face recognition-based attendance system using Python and OpenCV, focusing on real-time image processing and machine learning algorithms to enhance recognition accuracy.",
      "Implemented machine learning techniques to improve the model's accuracy and efficiency in recognizing faces under varying lighting and environmental conditions.",
      "Integrated a user-friendly interface for seamless interaction and data retrieval, allowing easy attendance tracking and management.",
      "Optimized the system for scalability and speed, ensuring it could handle large data sets and multiple users simultaneously.",
      "Collaborated with cross-functional team members to refine system functionality, ensuring high performance and accuracy.",
      "Worked on improving the accuracy of facial recognition by fine-tuning algorithms and optimizing the training data set.",
    ],
  },
  {
    title: "Elevate Discernable Over Formation Retardant in Neural Network",
    company_name: "DL Engineer, Full-stack Developer",
    icon: logo,
    iconBg: "#383E56",
    date: "Dec 2022 - April 2023",
    points: [
      "Developed an advanced medical image recognition system utilizing Python, Convolutional Neural Networks (CNN), and R-CNN (Region-based CNN) to assist in diagnosing diseases from scanned medical reports.",
      "Focused on improving image classification accuracy by leveraging deep learning techniques for better image processing and analysis.",
      "Designed a neural network architecture that efficiently processes complex patient scan images, specifically targeting fields such as neurology and dermatology for disease detection.",
      "Implemented data pre-processing techniques to enhance the quality of input data, making the system robust for accurate image recognition.",
      "Trained the model with extensive datasets to ensure precision in detecting disease impact levels and providing appropriate treatment recommendations.",
      "Built a website using HTML, CSS, and JavaScript to showcase the entire project, allowing users to view system outputs, interact with the neural network, and access the results in a user-friendly interface.",
      "This project demonstrated the efficiency of CNNs in adaptive image processing, creating a scalable and secure platform for medical diagnosis powered by deep learning.",
    ],
  },
  {
    title: "Solar Marketplace Website",
    company_name: "Full-stack Developer",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - March 2024",
    points: [
      "Developed an e-commerce platform for solar products using HTML, CSS, JavaScript, and SQL.",
      "Created a responsive and user-friendly interface for browsing and purchasing solar products.",
      "Managed product database and inventory with SQL.",
      "Integrated secure payment gateway and order management system.",
      "Implemented product filtering and search functionality for easy navigation.",
      "Optimized website performance and ensured cross-browser compatibility.",
    ],
  },
];



const projects = [
  {
    name: "Solar Marketplace",
    description:
      "Web-based platform that allows users to search, compare, and purchase solar panels, accessories, and services from various providers, offering a seamless and efficient solution for transitioning to renewable energy.",
    tags: [
      {
        name: "HTML & CSS",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: solar,
    source_code_link: "https://github.com/gireesh34/Solar-Marketplace",
  },
  {
    name: "Elevate Discernable Over Formation Retardant in Neural Network",
    description:
      "Developed a web-based platform utilizing neural network models for providing enhanced diagnostic and tracking capabilities. Integrated features for doctors to analyze patient data, lab assistants to upload reports, and patients to track their health progress.",
    tags: [
      {
        name: "HTML & CSS",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: derma,
    source_code_link: "https://github.com/",
  },
  {
    name: "Automated Face Recognition Attendance System ",
    description:
      "Web-based solution for automating attendance tracking using facial recognition technology, streamlining the attendance process for educational institutions and workplaces.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "machine learning",
        color: "pink-text-gradient",
      },
    ],
    image: face,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };


