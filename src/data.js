export const projects = [
  {
    title: "Life Dashboard",
    subtitle: "MERN Stack",
    description: 
    `
    Full stack application where users can track information about their life such as upcoming tasks, financial stats, and health data.
    The application uses the MERN (MongoDB, Express, React, and Node. js) stack of technologies. MongoDB was used to store information
    about the user such as tasks inputted or log in information. Express was the framework used to code the API calls
    `,

    image: "./life-dashboard.png",
    link: "https://github.com/OvAlexander/life-dashboard",
  },
  {
    title: "Mine Clicker Game",
    subtitle: "HTML, CSS, and Javascript",
    description: 
    `
    A simple clicker game where users mine ore and upgrade their equipment and prestige to get more power. The game
    was coded using simple HTML, CSS, and Javascript. Where the HTML and CSS were used to code a simple frontend, while
    the Javascript handled all the calculations, updates, and data storage.
    `,
    image: "./mine-clicker-game.gif",
    link: "./miner/index.html",
  },
  {
    title: "YouTube ELO Rater",
    subtitle: "Python",
    description: 
    `
    Python application that allows users to determine rankings of videos based on the ELO rating system. The YouTube
    API to collect YouTube playlist info such as Video Titles, Links, and Thumbnails. The program stores the data
    collected into a json file that is save locally to the machine. Tkinter is then used to create a GUI so the users
    can easily rate a click of the button.
    `,
    image: "./youtube-elo-log.png",
    link: "https://github.com/OvAlexander/YoutubePlaylistELO",
  },
  {
    title: "Document Text to Speech",
    subtitle: "Python, Google Cloud APIs",
    description: `
    Python application that converts PDF documents to playable audio files utilizing the Google Cloud API
    `, 
    image: "./tts.png",
    link: "",
  },
];
export const hardware_projects = [
  {
    title: "Battery Transfer Pod",
    subtitle: "Arduino, Autonomous, Motor Control, Python, Raspberry Pi, and Sensors",
    description: 
    `
    Robotic Arm utilizing computer vision and TCP/IP Protocol
    `,
    image: "./pod_white.png",
    link: "https://www.bansheeuav.tech/home",
  },
  {
    title: "Battery Vending Machine",
    subtitle: "Arduino, Autonomous, Motor Control, Python, and Sensors",
    description: 
    `
    Automated battery charging carousel, powered by a stepper motor
    `,
    image: "./3dBVM.png",
    link: "https://www.bansheeuav.tech/home",
  },
  {
    title: "Smart Irrigation System using Microcontrollers",
    subtitle: "Arduino, and Sensors",
    description: 
    `
    Automated plant watering system based on environmental variables to extend life of plants
    `,
    image: "./sism.png",
    link: "./SISM_Report.pdf",
  },
  {
    title: "VEX Robotics In the Zone",
    subtitle: "Autonomous, PID Control, and VEX",
    description: 
    `
    Robot created to place and extract cones to place on goals both autonomously and remote controlled
    `,
    image: "./ITZ.jpg",
    link: "",
  },
  {
    title: "RFID Attendance",
    subtitle: "Arduino, IoT, and Python", 
    description: 
    `
    RFID based attendance system synced to a web app with storing time and data of attendes' entrance
    `,
    image: "./rfid.png",
    link: "./RFID_report.pdf",
  },
  {
    title: "Cat Tree Attachments",
    subtitle: "Arduino, CAD, and VEX",
    description: 
    `
    Toy attachments for cat trees
    `,
    image: "./cat_dome.png",
    link: "./EDD_Poster.pdf",
  },
];
export const skills = ["Javascript", "Python", "C/C++", "Robotics", "Autodesk Inventor", "Microcontrollers"];
export const testimonials = [
  {
    name: "Temp",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    company: "Temp Co",
    image: "./temp.png",
    },
];
