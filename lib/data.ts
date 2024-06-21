import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cryptoCrowdImg from "@/public/cryptocrowd2.png";
import ozdevsImg from "@/public/ozdevs-two.png";
import assetTradingImg from "@/public/asset-trading.jpg";
import euphorusImg from "@/public/euphorus-two.png";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/techprowl-two.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";
import cloudNotes from "@/public/Cloud_Notes.png"
import expence from "@/public/Expence_Tracker.png"
import news from "@/public/News_Shila.png"
import text_utils from "@/public/Text-Utils.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Achievements",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Font-end battle (Hackathon)",
    location: "IIT - Bhubaneswar",
    description:
      "I reached the semi-final round in the prestigious Front-end Battle at IIT Bhubaneswar, showcasing my advanced skills in web development and exceptional competitive problem-solving abilities.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024",
  },
  {
    title: "Ideathon-2.0 | Flagship Innovation Challenge",
    location: "IIM - Bengaluru",
    description:
      "I progressed to the final round of the competition conducted by the Indian Institute of Management (IIM), Bangalore, showcasing my skills and expertise in businesses & enterprises and AI & product Design" ,
    icon: React.createElement(CgWorkAlt),
    date: "June 2024",
  },
  {
    title: "Copmitative Programming | DSA with C++",
    location: "Leetcode, Codeforces, GFG, etc",
    description:
      "I have actively engaged in competitive programming and successfully solved over 300+ coding problems across diverse platforms such as LeetCode, CodeChef, Codeforces, GeeksforGeeks, and Code360.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2024 - Present",
  },
  // {
  //   title: "Software Engineer",
  //   location: "Humanforce",
  //   description:
  //     "Software engineer in the intelliHR platform team. We are a feature enablement team dedicated to developing features for developers, ensuring they are easier to create. We also look after issues of scale and technical debt for developers and the platform.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "January 2024 - Present",
  // },
] as const;

export const projectsData = [
  {
    title: "Cloud_Notes",
    description:
      "Cloud_Notes is a robust and intuitive web-based note-taking application designed to provide users with a seamless experience for managing their personal notes. This application supports full CRUD (Create, Read, Update, Delete) functionality, allowing users to easily create new notes, view existing notes, update content, and delete notes when no longer needed. By leveraging cloud storage, Cloud_Notes ensures that all user notes are securely stored and accessible from any device with an internet connection.",
    tags: ["JavaScript", "React", "Express.js", "MongoDb"],
    icons: [
      "logos:mongodb",
      "logos:javascript",
      "logos:react",
      "logos:express",
    ],
    imageUrl: cloudNotes,
    githubLink: "https://github.com/ben04rogers/cab432-assignment-2",
    demoLink: "https://www.youtube.com/watch?v=uhyC0M4WIl4",
  },
  {
    title: "Expence_Tracker",
    description:
      "Expense Tracker is a web application designed to help users monitor and manage their daily and professional expenses. Built with React.js, Vanilla.js, Bootstrap, and JavaScript, it offers a user-friendly interface for logging expenditures and tracking the remaining balance via a virtual wallet. Users can categorize expenses with tags for better organization and analysis. This application provides an efficient and reliable solution for personal and professional financial management.",
    tags: ["React", "Bootstrap", "JavaScript", "MySQL"],
    icons: [
      "logos:javascript",
      "devicon:bootstrap",
      "logos:mysql",
      "logos:react",
    ],
    imageUrl: expence,
    urlLink: "https://clownfish-app-48u2r.ondigitalocean.app/",
    githubLink: "https://github.com/ben04rogers/ozdevs-v2",
  },
  {
    title: "News_Shila",
    description:
      "News_Shila is a daily news web application designed to provide users with the latest updates through an infinite scroll feature. Built for seamless browsing, it categorizes news into various sections, allowing users to easily access topics of interest. This application ensures a continuous and organized flow of information, enhancing the news consumption experience.",
    tags: ["react", "MongoDb",],
    icons: ["logos:react", "logos:bootstrap",],
    imageUrl: news,
    githubLink: "https://github.com/ben04rogers/organisation-asset-trading",
  },
  {
    title: "Text_Utils",
    description:
      "Text-Utils is a web application that offers a range of text utility services, allowing users to edit text and check the length of paragraphs in terms of words and characters. Built with React, HTML, CSS, and JavaScript, the application provides a simple and intuitive interface for efficient text ",
    tags: ["react",'html', 'css', 'javascript',],
    icons: ["logos:javascript", "logos:HTML", "logos:sqlite"],
    imageUrl: text_utils,
    githubLink: "https://github.com/ben04rogers/computer-auction",
    urlLink: "https://techprowl.herokuapp.com",
  },
  // {
  //   title: "Task Manager Console App",
  //   description:
  //     "Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.",
  //   tags: ["C#"],
  //   icons: ["devicon:csharp"],
  //   imageUrl: taskManagerImg,
  //   githubLink: "https://github.com/ben04rogers/task-manager",
  // },
  // {
  //   title: "Family Tree Shortest Path",
  //   description:
  //     "Python program that implements a breadth-first search algorithm to generate a minimal spanning tree. Problem was to calculate a shortest path from a starting vertex in a graph to each other vertex. The vertices represent people and each person is related to every other person through parent-child relationships. A person can see how they are related to each other person in the tree",
  //   tags: ["Python"],
  //   icons: ["logos:python"],
  //   imageUrl: familyTreeImg,
  //   githubLink: "https://github.com/ben04rogers/breadth-first-search",
  //   demoLink: "https://www.youtube.com/watch?v=VXCZKsqupxA",
  // },
  // {
  //   title: "Arduino Binary Game",
  //   description:
  //     "Binary game written in C that runs on an Arduino Uno using Tinkercad. The game aims to help users learn binary by challenging them to input different integers in their binary form within a time limit.",
  //   tags: ["C"],
  //   icons: ["devicon:c"],
  //   imageUrl: binaryGameImg,
  //   githubLink: "https://github.com/ben04rogers/binary-game-microcontroller",
  //   demoLink: "https://www.youtube.com/watch?v=A6n6XDk4Unw&feature=youtu.be",
  // },
] as const;

export const skillsData = [
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "MongoDB",
    icon: "logos:mongodb-icon",
  },
  {
    name: "Tailwind",
    icon: "logos:tailwindcss-icon",
  },
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "Github",
    icon: "logos:github-icon",
  },
  {
    name: "BootStrap",
    icon: "logos:bootstrap",
  },
  // {
  //   name: "Docker",
  //   icon: "logos:docker-icon",
  // },
  // {
  //   name: "Jenkins",
  //   icon: "devicon:jenkins",
  // },
  // {
  //   name: "Shopify",
  //   icon: "logos:shopify",
  // },
] as const;
