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
        description: 'This portfolio was developed using Vue 3 Composition API. It serves as a personal project to demonstrate my technical skills, design approach, and overall experience in frontend development.',
        highlightText: "Click the card for more information",
        image: new URL("@/assets/images/portfolio.svg", import.meta.url).href,
        details: [
            "I have redone my portfolio multiple times to showcase my growth as a developer and designer. And I had a hard time landing on a design that I really liked. But after a lot of iterations I finally landed on this design that I am really happy with.",
            "I have tried my best to implement a smooth and clean layout. that focus on the journey thorugh the site. I have also tried to implement a lot of small details that makes the site feel more alive and interactive.",
            "The portfolio is mostly Vue.js and a bit of plaine Javascript. I have used bootstrap for my containers, and other reponsive elements. I have also used FontAwesome for the icons. and Bootstrap icons. I should have chosen a only one, but i feel like thats an clean up task for later. I have used pinia for state management and vue-router for routing. and vue transition for my trainsitons. and github for version control.",
            "The code is not perfect, but I am happy with the result. and I am always looking for ways to improve my code and design skills. So if you have any feedback or suggestions, please feel free to contact me."
        ],
        extraImages: [
          new URL("@/assets/images/portfolioImages/portOne.svg", import.meta.url).href,
          new URL("@/assets/images/portfolioImages/portTwo.svg", import.meta.url).href,
          new URL("@/assets/images/portfolioImages/portThree.svg", import.meta.url).href
        ],
        techIcons: [
          "fa-brands fa-vuejs",
          "fa-brands fa-js",
          "fa-brands fa-bootstrap",
          "fa-brands fa-github"
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
            "I made this project in Canva, where i made different designs for brochures and posters. I focused on creating a cohesive visual identity that aligns with the brand's values and target audience.",
            "I made sure to incorporate the brand's color palette and typography throughout the designs to maintain consistency.",
            "I also paid attention to the layout and composition of each design, ensuring that the information was presented clearly and effectively."
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
            "This Project was made in a group of 2 people, me and my school mate. I handled the frontend and some of the backend. The project is made in Laravel and Vue.js.",
            "The Saas platform is made for small and medium sized buisnesses who wanted an dashboard with a way to setup their own calculations to which kinda statistics they wanted to see.",
            "As the project grew, we found out we had choosen a very big and complex project for our bachelors, which ended up with a lot of the features not being implemented. But we still managed to get a working prototype up and running, with a lot of the core features implemented. we could with aggreated functions make stastics over sales from a mockup comapany we created.",
            "The project is not live, but the code is available on github. The backend is not included in the repo, but the frontend is. The backend is made in Laravel and the frontend is made in Vue.js.",
            "The projected included using bootstrap, chart.js, gridstack, html2canvas, pinia, and vue-router."
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