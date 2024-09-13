import Backend from "../../components/images/backend-icon.jpeg";
import Frontend from "../../components/images/frontend-icon.png"; 
import Tools from "../../components/images/tools_icon.png";
import Softskills from "../../components/images/softskills_icon.png";

export const SKILLS = [
    {
        title: "Frontend",
        icon: Frontend,
        skills: [
            { skills: "HTML", percentage: "80%" },
            { skills: "CSS3 (Sass/SCSS)", percentage: "90%" },  
            { skills: "JavaScript", percentage: "75%" },  
            { skills: "React", percentage: "80%" },
            { skills: "Vue.js", percentage: "70%" }  
        ],
    },
    {
        title: "Backend",
        icon: Backend,
        skills: [
            { skills: "Node.js", percentage: "70%" },
            { skills: "Express.js", percentage: "65%" },
        ],
    },
    {
        title: "Tools",
        icon: Tools,
        skills: [
            { skills: "Git & GitHub", percentage: "85%" },  // Fixed ampersand
            { skills: "Visual Studio Code", percentage: "75%" },
            { skills: "Webpack", percentage: "60%" },
            { skills: "Responsive Design", percentage: "70%" },
        ],
    },
    {
        title: "Soft skills",
        icon: Softskills,
        skills: [
            { skills: "Problem solving", percentage: "80%" },
            { skills: "Collaboration", percentage: "85%" },
            { skills: "Attention to Detail", percentage: "70%" },
        ],
    },  
];

export const WORK_EXPERIENCE = [
    {
        title: "Senior Frontend Developer at Tech Innovators",
        date: "September 2024 - Present",
        responsibilities: [
            "Led a team of frontend developers in the redesign of the company's flagship product, resulting in a 30% increase in user satisfaction.",
            "Implemented advanced CSS animations and transitions to enhance the overall user experience.", 
            "Collaborated with UI/UX designers to translate wireframes and mockups into responsive and interactive web applications.",  
            "Introduced and integrated Vue.js into the tech stack, improving code maintainability and development efficiency.",  
        ],
    },
    {
        title: "Junior Web Developer at Digital Solution",
        date: "May 2023 - May 2024",  
        responsibilities: [
            "Developed and maintained client websites, ensuring high quality standards and timely project delivery.",  
            "Implemented SEO best practices, leading to a 25% increase in organic search traffic for key clients.",
            "Worked closely with the design team to create pixel-perfect, cross-browser compatible web pages.", 
            "Conducted code reviews and mentored junior developers in adopting best coding practices.",  
        ],
    },
    {
        title: "Frontend Intern at Web Studio",  
        date: "January 2024 - May 2024",  
        responsibilities: [
            "Assisted in the development of a new e-commerce platform, contributing to the implementation of frontend features using React.js.",
            "Conducted performance optimization tasks, resulting in a 15% improvement in page load times.",
            "Participated in daily stand-up meetings and collaborated with senior developers to troubleshoot and resolve coding issues.",
            "Gained hands-on experience with version control systems, specifically Git, in a collaborative development environment.",  // Fixed grammar
        ],
    },
];
