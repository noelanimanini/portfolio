import potential from "./images/potential.png";
import div2 from "./images/Group 34.png";
import div3 from "./images/Group 34 (2).png";
import div4 from "./images/Group 34 (3).png";
import div5 from "./images/Group 34 (4).png";
import div6 from "./images/Group 34 (5).png";
import div7 from "./images/Group 34 (6).png";
import div8 from "./images/Group 34 (7).png";

const projects = [
  {
    name: "Potential",
    description:
      "Anatomical systems are hard enough to understand! Potential takes away the difficulty of study anatomical systems by allowing the user to create stacks and to store specific body parts.",
    image: potential,
    technologies: [
      {
        JavaScript: "javascript",
        HTML: "html",
        CSS: "css",
        MaterialUI: "MaterialUI",
        Github: "Github",
        React: "react",
        Ruby: "ruby",
        Rails: "Ruby on Rails",
      },
    ],
    dateCreated: "03-02-2021",
    links: [
      {
        git: "https://github.com/noelanimanini/potential_project_frontend",
        video:
          "https://www.youtube.com/watch?v=AvIr5lI6rSE&t=22s&ab_channel=crystalvillanueva",
      },
    ],
    div: div2,
  },

  {
    name: "Konek | AI",
    description:
      "When the Konek AI bot is downloaded into a Slack channel, users are able to leverage the power of Open AI to refine team research. Users can activate and interact with the bot in channels and group chats in Slack via the slash command.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    technologies: [
      {
        JavaScript: "JavaScript",
        HTML: " HTML",
        CSS: " CSS",
        Figma: "figma",
        Python: "Python",
        Github: "Github",
        React: "React",
        BootStrap: "bootstrap",
      },
    ],
    dateCreated: "05-02-2021",
    links: [
      {
        git: "https://github.com/KonekAI",
        demo: "https://konekai.herokuapp.com/",
        video:
          "https://www.youtube.com/watch?v=C9wP7TfajJY&t=7s&ab_channel=crystalvillanueva",
      },
    ],
    div: div3,
  },
  {
    name: "COVID SafeGuard",
    description:
      "The novel COVID-19 virus been in our lives for the past year and half. Globally, this virus has changed the way we all interact in public settings. However, now that there are vaccines soon to be released to the public, we as a society can now take the precautions necessary to protect our loved ones. COVID SafeGuard is the perfect app you and your family needs in these uncertain times; from finding and navigating vaccine locations that have the vaccines in stock, to reading up on how to protect and maintain healthy behaviors, COVID SafeGuard will keep you rest assured with our mobile app. *Winner (2nd Place and Honorable Hacker (Leadership)) at Knackathon",
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    technologies: [
      {
        JavaScript: "javascript",
        HTML: " HTML",
        CSS: " CSS",
        Figma: "figma",
        Java: " Java",
        AWS: "AWS",
        React: "React",
        Github: "Github",
      },
    ],
    dateCreated: "03-19-2021",
    links: [
      {
        git: "https://github.com/covid-saftyguard/frontend-service",
        video:
          "https://www.youtube.com/watch?v=fV33emUdE3k&t=18s&ab_channel=crystalvillanueva",
      },
    ],
    awards: [
      {
        award: "Winner",
      },
    ],
    div: div4,
  },
  {
    name: "StudyBuddy.tech",
    description:
      "Our app allows users to login or signup to see all study groups available... Additionally, they can enter a room and see all the users in this study group and chat with them as well. A user can also navigate to their profile page to see what study groups they're in. Our front end is built with ReactJS and our backend is built with Node and Express. *Winner at the University of Kansas' HACKKU (3rd place General Track)",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    technologies: [
      {
        JavaScript: "JavaScript",
        HTML: " HTML",
        CSS: " CSS",
        React: "React",
        Heroku: "Heroku",
        Node: "Node",
        Mongo: "Mongo",
        Github: "Github",
      },
    ],
    dateCreated: "05-02-2021",
    links: [
      {
        git: "https://github.com/santiagorendon/study-app",
        demo: "https://devpost.com/software/tbd-45p7jy",
      },
    ],
    awards: [
      {
        award: "Winner",
      },
    ],
    div: div5,
  },
  {
    name: "Notelify",
    description:
      "A Note taking app with full CRUD operations. This app lets users create notes, delete notes, update notes, search through notes and see all notes.",
    image:
      "https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    technologies: [
      {
        JavaScript: "JavaScript",
        HTML: " HTML",
        CSS: " CSS",
        Rails: "Ruby On Rails",
        React: "React",
        Heroku: "Heroku",
        Netlify: "Netlify",
        Github: "Github",
      },
    ],
    dateCreated: "05-02-2021",
    links: [
      {
        demo: "https://suspicious-leavitt-d03963.netlify.app/login",
        git: "https://github.com/noelanimanini/notefrontend",
        video:
          "https://www.youtube.com/watch?v=vwkdQGorwys&feature=youtu.be&ab_channel=crystalvillanueva",
      },
    ],
    div: div6,
  },
  {
    name: "BookStore CLI",
    description:
      "A Command Line Interface app that allows a bookstore worker to check their database to see all the books in their store, stores in their areas, which books belong to which store, if they can order a book, etc.",
    image:
      "https://images.unsplash.com/photo-1537884944318-390069bb8665?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    technologies: [
      {
        ruby: "ruby",
      },
    ],
    dateCreated: "05-02-2021",
    links: [
      {
        video:
          "https://www.youtube.com/watch?v=CVYRnzR-aZw&ab_channel=crystalvillanueva",
        git: "https://github.com/noelanimanini/ruby-project-alt-guidelines",
      },
    ],
    div: div7,
  },
  {
    name: "RANDORECIPE",
    description:
      "A vanilla javascript app where the user can search for recipes, pin recipes, and, refresh and find randomized recipes. This app uses a third party recipe API. I created modals and was able to load recipe information to the modals. I used CSS to style everything and created my HTML tree",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    technologies: [
      {
        javascript: "javascript",
        html: "HTML",
        css: "css",
      },
    ],
    dateCreated: "05-02-2021",
    links: [
      {
        video:
          "https://www.youtube.com/watch?v=-Zc-Sm6rCRg&ab_channel=crystalvillanueva",
        git: "https://github.com/noelanimanini/recipe",
        demo: "https://noelanimanini.github.io/recipe/",
      },
    ],
    div: div8,
  },
  {
    name: "Digi-Clusive",
    description:
      "Although 1 in 5 are disabled, essential platforms, weren't designed with inclusivity in mind. Digi-Clusive mends the digital divide of accessibility and crucial social distancing platforms (Zoom). **Winner (Top 12 / 7th Place) at Hydrgrangea Hacks, the largest Hackathon for Women and Non-Binary individuals",
    image:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    technologies: [
      {
        JavaScript: "JavaScript",
        HTML: " HTML",
        CSS: " CSS",
        Figma: "figma",
        React: "React",
        Heroku: "Heroku",
        Netlify: "Netlify",
        Github: "Github",
        Python: "Python",
      },
    ],
    dateCreated: "05-02-2021",
    links: [
      {
        demo: "https://digiclusive.herokuapp.com/",
        video:
          "https://www.youtube.com/watch?v=sNqDBMQ2D08&feature=emb_title&ab_channel=BarbraT",
        git: "https://github.com/noelanimanini/zoom_app",
      },
    ],
    awards: [
      {
        award: "Winner",
      },
    ],
  },
];

export default projects;
