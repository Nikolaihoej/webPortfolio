import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        id: 1,
        title: "TES ToolTracker",
        author: "Nikolai H Jensen",
        date: "19th June 2024",
        description: 'Developed in Google AppSheet, ToolTracker is an internal tool inventory and loan system designed to simplify equipment booking, tracking, and maintenance processes.',
        highlightText: "Information page under construction",
        image: new URL("@/assets/images/tooltrackerImg.svg", import.meta.url).href,
        content: [
            "Paragraph one text here.",
            "Paragraph two text here.",
            "Paragraph three text here."
        ],
        extraImages: [
          new URL("@/assets/images/toolTrackerimages/toolTrackerApp.jpg", import.meta.url).href,
          new URL("@/assets/images/toolTrackerimages/toolTrackerAppTwo.jpg", import.meta.url).href,
          new URL("@/assets/images/toolTrackerimages/toolTrackerAppThree.jpg", import.meta.url).href
        ],
        techIcons: [
          "fa-brands fa-github",
          "fa-brands fa-js",
          "fa-brands fa-html5",
          "fa-brands fa-css3-alt"
        ],
        link: "",
        disabled: false
      },
      {
        id: 2,
        title: "This Portfolio",
        author: "Nikolai H Jensen",
        date: "",
        description: 'This is my portfolio that I have made in Vue3 composition API and made with the intention of showcasing my skills.',
        highlightText: "Information page under construction",
        image: new URL("@/assets/images/portfolio.svg", import.meta.url).href,
        content: [
            "Paragraph one text here.",
            "Paragraph two text here.",
            "Paragraph three text here."
        ],
        extraImages: [
          new URL("@/assets/images/toolTrackerimages/toolTrackerApp.jpg", import.meta.url).href,
          new URL("@/assets/images/toolTrackerimages/toolTrackerAppTwo.jpg", import.meta.url).href,
          new URL("@/assets/images/toolTrackerimages/toolTrackerAppThree.jpg", import.meta.url).href
        ],
        techIcons: [
          "fa-brands fa-github",
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
        highlightText: "Click the card to see the Design",
        image: new URL("@/assets/images/tesBrochurer.svg", import.meta.url).href,
        link: "https://www.canva.com/design/DAGpY4iLOR0/VaFxSh98Pgb3hfck2yxtKQ/view?utm_content=DAGpY4iLOR0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h89c592f781#1",
        disabled: false
      },

      {
        id: 4,
        title: "Bachelor Project",
        author: "",
        date: "",
        description: "This is my bachelor project that I worked on during my studies as a web-developer and it's made as a group project where i mainly handled the frontend.",
        highlightText: "Click the card to go to the GitHub Repo",
        image: new URL("@/assets/images/Biezy.svg", import.meta.url).href,
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
        link: "http://example.com/project-two",
        disabled: true
      },
      // Add more projects as needed
    ]
  }),
  getters: {
    getProjectById: (state) => (id) => state.projects.find(p => p.id === id)
  }
});