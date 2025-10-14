import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        id: 1,
        title: "TES ToolTracker",
        author: "Nikolai H Jensen",
        date: "2025",
        description: 'Developed in Google AppSheet, ToolTracker is an internal tool inventory and loan system designed to simplify equipment booking, tracking, and maintenance processes.',
        highlightText: "Click the card for more information",
        image: new URL("@/assets/images/tooltrackerImg.svg", import.meta.url).href,
        details: [
            "I developed the entire solution from the ground up, gaining hands-on experience with AppSheet's application structure, database integration, and automation features. Through this project, I learned how to design efficient data models, implement conditional logic, and automate key workflows such as sending notification emails and archiving completed loans.",
            "Beyond development, I designed the logo, defined the app's overall structure and layout, and created a user guide to make onboarding straightforward and efficient.",
            "The app is currently deployed internally, and I'm finalizing the documentation and fine-tuning the last details. Once real-world usage data and feedback are available, I'll update this page with new insights and screenshots."
        ],
        extraImages: [
          new URL("@/assets/images/toolTrackerimages/ttOne.svg", import.meta.url).href,
          new URL("@/assets/images/toolTrackerimages/ttTwo.svg", import.meta.url).href,
          new URL("@/assets/images/toolTrackerimages/ttThree.svg", import.meta.url).href
        ],
        link: "",
        disabled: false
      },
      {
        id: 2,
        title: "This Portfolio",
        author: "Nikolai H Jensen",
        date: "2025",
        description: 'This portfolio was developed using Vue 3 and the Composition API. It serves as a personal project to demonstrate my technical skills, design approach, and overall experience in frontend development.',
        highlightText: "Click the card for more information",
        image: new URL("@/assets/images/portfolio.svg", import.meta.url).href,
        details: [
            "Paragraph one text here.",
            "Paragraph two text here.",
            "Paragraph three text here."
        ],
        extraImages: [
          new URL("@/assets/images/portfolioImages/portOne.svg", import.meta.url).href,
          new URL("@/assets/images/portfolioImages/portTwo.svg", import.meta.url).href,
          new URL("@/assets/images/portfolioImages/portThree.svg", import.meta.url).href
        ],
        techIcons: [
          "fa-brands fa-vuejs",
          "fa-brands fa-js",
          "fa-brands fa-html5",
          "fa-brands fa-css3-alt"
        ],
        link: "",
        disabled: false
      },
      {
        id: 3,
        title: "TES Design Project",
        author: "",
        date: "",
        description: "This Canva project showcases my expertise in graphic design and practical use of design theory in developing brochures and posters.",
        highlightText: "Click the card for more information",
        image: new URL("@/assets/images/tesBrochurer.svg", import.meta.url).href,
                details: [
            "Paragraph one text here.",
            "Paragraph two text here.",
            "Paragraph three text here."
        ],
        extraImages: [
          new URL("@/assets/images/tesBrochureAndPosters/ttpOne.svg", import.meta.url).href,
          new URL("@/assets/images/tesBrochureAndPosters/ttpTwo.svg", import.meta.url).href,
          new URL("@/assets/images/tesBrochureAndPosters/ttpThree.svg", import.meta.url).href
        ],
        link: "https://www.canva.com/design/DAGpY4iLOR0/VaFxSh98Pgb3hfck2yxtKQ/view?utm_content=DAGpY4iLOR0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h89c592f781#1",
        disabled: false
      },

      {
        id: 4,
        title: "Bachelor Project",
        author: "",
        date: "",
        description: "This is my bachelor project that I worked on during my studies as a web-developer and it's made as a group project where i mainly handled the frontend.",
        highlightText: "Click the card for more information",
        image: new URL("@/assets/images/Biezy.svg", import.meta.url).href,
                details: [
            "Paragraph one text here.",
            "Paragraph two text here.",
            "Paragraph three text here."
        ],
        extraImages: [
          new URL("@/assets/images/biezyBachelor/beOne.svg", import.meta.url).href,
          new URL("@/assets/images/biezyBachelor/beTwo.svg", import.meta.url).href,
          new URL("@/assets/images/biezyBachelor/beThree.svg", import.meta.url).href
        ],
        techIcons: [
          "fa-brands fa-laravel",
          "fa-brands fa-php",
          "fa-brands fa-vuejs",
          "fa-brands fa-html5",
          "fa-brands fa-js",
          "fa-brands fa-css3-alt"
          
        ],
        link: "https://github.com/Nikolaihoej/BA-BI-frontend",
        disabled: false
      },
      {
        id: 5,
        title: "Soon to come",
        author: "",
        date: "",
        description: "More projects are on the way! Im currently working on some exciting new projects that I can't wait to share with you. Stay tuned for updates!",
        image: new URL("@/assets/images/comingSoon.svg", import.meta.url).href,
        disabled: true
      },
      // Add more projects as needed
    ]
  }),
  getters: {
    getProjectById: (state) => (id) => state.projects.find(p => p.id === id)
  }
});