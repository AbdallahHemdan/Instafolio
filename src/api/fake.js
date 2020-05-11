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
import me1 from "./../assets/images/1.jpeg"
import me2 from "./../assets/images/2.jpeg"
import me3 from "./../assets/images/3.jpeg"
import me4 from "./../assets/images/4.jpeg"
import me5 from "./../assets/images/5.jpg"

const aboutData = {
  title: "Hey, I'm ",
  myName: "Hemdan",
  description: [
    "Computer Engineering Student at Faculty of Engineering Cairo University from Cairo, EG.",
    "I am passionate about Front-End, Competitive programming and Computer Vision. I participated in many programming competitions like ACM ACPC, ACM ECPC, Google CodeJam, ...etc.",
    "I am seeking a challenging opportunity in which I can demonstrate my passion for software engineering and apply my skills fully to assist in the success of the company."
  ],
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
};

const hemdanImages = [me1, me2, me3, me4, me5];
const flatImages = [one, two, three, four, five, six, seven, eight, nine, ten];
const myImages = (true) ? flatImages : hemdanImages;


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

export { aboutData, myImages, mySkills }