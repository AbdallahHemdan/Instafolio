import one from "./../assets/images/me-1.svg";
import two from "./../assets/images/me-2.svg";
import three from "./../assets/images/me-3.svg";
import four from "./../assets/images/me-4.svg";
import five from "./../assets/images/me-5.svg";
import six from "./../assets/images/me-6.svg";
import seven from "./../assets/images/me-7.svg";
import eight from "./../assets/images/me-8.svg";
import nine from "./../assets/images/me-9.svg";
import ten from "./../assets/images/me-10.svg";


// Project Images
import oudLogo from "./../assets/images/Oud.svg"
import sh from "./../assets/images/Shortest_path.svg";
import sorting from "./../assets/images/technology.svg";
import first from "./../assets/images/cup.svg";
import delivery from "./../assets/images/delivary.png";
import paint from "./../assets/images/interface.svg";
import didUMean from "./../assets/images/round2.svg";
import toolbox from "./../assets/images/algo.png";



const aboutData = {
  title: "👋 Hey, I'm ",
  myName: "Hemdan",
  description: [
    "I am Computer Engineering Student at Faculty of Engineering Cairo University from Cairo, EG.",
    "I am passionate about Front-end, Competitive programming and Computer Vision. I participated in many programming competitions like ACM ACPC, ACM ECPC, Google CodeJam, ...etc.",
    "I am seeking a challenging opportunity in which I can demonstrate my passion for software engineering and apply my skills fully to assist in the success of the company."
  ]
};

const myImages = [one, two, three, four, five, six, seven, eight, nine, ten];

const mySkills = [
  {
    skillName: "HTML-5",
    class: "devicon-html5-plain"
  },
  {
    skillName: "CSS3",
    class: "devicon-css3-plain"
  },
  {
    skillName: "JS",
    class: "devicon-javascript-plain"
  },
  {
    skillName: "REACT JS",
    class: "devicon-react-original"
  },
  {
    skillName: "C++",
    class: "devicon-cplusplus-line"
  },
  {
    skillName: "C",
    class: "devicon-c-line"
  },
  {
    skillName: "PYTHON",
    class: "devicon-python-plain"
  },
  {
    skillName: "BOOTSTRAP",
    class: "devicon-bootstrap-plain"
  },
  {
    skillName: "NODE JS",
    class: "devicon-nodejs-plain"
  },

  {
    skillName: "C#",
    class: "devicon-csharp-line"
  },
  {
    skillName: "FIREBASE",
    class: "fa fa-fire"
  },
  {
    skillName: "GIT",
    class: "devicon-git-plain"
  },
  {
    skillName: "GITHUB",
    class: "devicon-github-plain"
  }
]

const projectsCards = [
  {
    title: "Oud Front-end",
    subtitle: "Online music streaming service which is a mimic of Spotify with all its functionalities.",
    image: oudLogo,
    footerLink: [
      { name: "Github", url: "https://github.com/AbdallahHemdan/oudFrontend" },
    ],
    language: "JavaScript",
    langColor: "yellow",
    stars: 17,
    forks: 2
  },
  {
    title: "Pathfinding Visualizer",
    subtitle: "VanillaJS pathfinding visualizer using bunch of different shortest-path algorithms (A*, DFS, BFS, ...etc.).",
    image: sh,
    footerLink: [
      { name: "Github", url: "https://github.com/AbdallahHemdan/Pathfinding-Visualizer" },
    ],
    language: "JavaScript",
    langColor: "yellow",
    stars: 10,
    forks: 1
  },
  {
    title: "Sorting Visualizer",
    subtitle: "VanillaJS app for visualizing a bunch of well-known sorting algorithms (Selection, Bubble, Merge, ... etc.)",
    image: sorting,
    footerLink: [
      { name: "Github", url: "https://github.com/AbdallahHemdan/Sorting.Visualizer" },
    ],
    language: "JavaScript",
    langColor: "yellow",
    stars: 9,
    forks: 1
  },
  {
    title: "First To Solve",
    subtitle: "Virtual judge website to grab problems from online judges and filter them with the ability of creating groups and contests by selecting some of the problem-set.",
    image: first,
    footerLink: [
      { name: "Github", url: "https://github.com/AbdallahHemdan/FirstToSolve" },
    ],
    language: "JavaScript",
    langColor: "yellow",
    stars: 7,
    forks: 1
  },
  {
    title: "Tayara",
    subtitle: "Simulation of delivery system over multiple branch restaurant, I co-designed the simulation logic, I implemented OOP-based modules including customized ADTs",
    image: delivery,
    footerLink: [
      { name: "Github", url: "https://github.com/AbdallahHemdan/Tayara" },
    ],
    language: "C",
    langColor: "gray",
    stars: 5,
    forks: 2
  },
  {
    title: "Did U Mean",
    subtitle: "Writing assistant application for checking your spelling and recommend words in case of wrong spelling.",
    image: didUMean,
    footerLink: [
      { name: "Github", url: "https://github.com/AbdallahHemdan/DidUMean" },
    ],
    language: "Cpp",
    langColor: "yellow",
    stars: 6,
    forks: 0
  },
  {
    title: "Paint For Kids",
    subtitle: "Fancy colorful educational app to help kids in learning more about different shapes with multiple functionalities of Windows-Paint.",
    image: paint,
    footerLink: [
      { name: "Github", url: "https://github.com/AbdallahHemdan/Paint-For-Kids" },
    ],
    language: "C",
    langColor: "yellow",
    stars: 6,
    forks: 0
  },
  {
    title: "Algorithmic Toolbox",
    subtitle: "My Solutions of Assignments from Coursera - University of California San Diego - With Go In Depth Part Which Contains More Details With Each of The Course Topics",
    image: toolbox,
    footerLink: [
      { name: "Github", url: "https://github.com/AbdallahHemdan/Algorithmic-Toolbox-San-Diego" },
    ],
    language: "Cpp",
    langColor: "yellow",
    stars: 26,
    forks: 23
  }
];

const socialMedia = {
  facebook: "https://www.facebook.com/profile.php?id=100009270028400",
  github: "https://github.com/AbdallahHemdan",
  linkedin: "https://www.linkedin.com/in/abdallah-a-hemdan-4a94a614a/",
  gmail: "abdallah.ahmed.hemdan@gmail.com",
  hackerrank: "https://www.hackerrank.com/Hemdan?hr_r=1",
  twitter: "https://twitter.com/Abdalla80820679",
  instagram: "https://www.instagram.com/abdallah_a_hemdan/"
}

export { aboutData, myImages, mySkills, projectsCards, socialMedia }