import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    docker,
    guanlin,
    csiro,
    on9,
    flask,
    python,
    aws,
    postgres,
    fsnd,
    fyyur,
    trivia,
    ht,
    career
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  export const personalInfo = [
    {
      id: "selfie",
      icon: ht
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "CMS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Tester",
      icon: creator,
    }
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Flask",
      icon: flask,
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
      name: "Postgres",
      icon: postgres,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "docker",
      icon: docker,
    }
  ];
  
  const experiences = [
    {
      title: "Web Developer and CMS Developer",
      company_name: "On9 Pty Ltd, Australia",
      icon: on9,
      iconBg: "#E6DEDD",
      date: "Apr 2023 – July 2023",
      points: [
        "Customizing frontend solutions and domain/data hosting for small and medium-sized local businesses.",
        "Designing and developing backend endpoints based on third-party APIs, including user ordering and user management features.",
        "Offering SEO optimization services to clients.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "CSIRO, Australia",
      icon: csiro,
      iconBg: "#383E56",
      date: "Mar 2017 – Nov 2017",
      points: [
        "Business analysis for HRPPC and our “PODD” project.",
        "Scheduled meetings with stakeholders and developed requirements through questionnaires.",
        "Documented project plans and user Requirements Specifications according to the institute’s soft engineering standards.",
        "Created testing documents from ‘use’ cases and prototypes, including our decision-making cycles.",
        "Frontend modules development.",
        "Designed and developed a new data management system which provided features allowing a more interactive and improved user experience.",
        "Functionality testing of modules."
      ],
    },
    {
      title: "Technical Department Employee & Manager",
      company_name: "Guanlin Intelligent System Ltd, China",
      icon: guanlin,
      iconBg: "#E6DEDD",
      date: "Sep 2009 – Dec 2013",
      points: [
        "Ensured strict adherence to daily and weekly protocols, ensuring high code quality and robust data security throughout the development of CCTV monitoring software.",
        "Executed computer networking engineering projects for banks, supermarkets, and medium-sized stores.",
        "Actively participated in marketing activities, establishing strong relationships with bank customers.",
        "Collected and resolved technical issues encountered during various stages of CCTV engineering construction.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Casting Agency Models",
      description:
        "The Casting Agency is a web platform that manages movies and assigns actors, allowing users to search, modify, and manage movie-actor assignments efficiently. It provides an interface ensuring smooth operations for casting agencies and directors.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript & jQuery",
          color: "blue-text-gradient",
        },
        {
          name: "Postgres",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
        {
          name: "Cloud Deployment on Render",
          color: "pink-text-gradient",
        },
        {
          name: "Auth0",
          color: "pink-text-gradient",
        },
      ],
      image: fsnd,
      source_code_link: "https://render-deployment-fsnd-ytc3.onrender.com/",
    },
    {
      name: "Fyyur: Artist Booking Site",
      description:
        "Fyyur is a musical venue and artist booking site that facilitates the discovery and bookings of shows between local performing artists and venues. This site lets you list new artists and venues, discover them, and list shows with artists as a venue owner.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap3",
          color: "green-text-gradient",
        },
        {
          name: "Postgres",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        }
      ],
      image: fyyur,
      source_code_link: "https://github.com/DylanZhang25/fullstack_webproject_fyyur",
    },
    {
      name: "Trivia App",
      description:
        "The Trivia API app lets users view, add, or delete questions, categorized or as a whole. Each question shows its details with an option to reveal answers. It has a search feature for text queries and a quiz mode with random or category-specific questions, concluding with a final score.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: trivia,
      source_code_link: "https://github.com/DylanZhang25/fullstack-webproject-trivia",
    },
  ];
  
  export { services, technologies, experiences, projects };