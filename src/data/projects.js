// Social Network images
import hexaAvif from '../assets/hexa.avif'
import hexaWebp from '../assets/hexa.webp'
import hexaJpg from '../assets/hexa.jpg'
import HexaSlider1 from '../assets/hexa-slider1.jpg'
import HexaSlider2 from '../assets/hexa-slider2.jpg'
import HexaSlider3 from '../assets/hexa-slider3.jpg'
import HexaSlider4 from '../assets/hexa-slider4.jpg'
// Movies images
import moviesSlider1 from '../assets/movies-slider1.jpg'
import moviesSlider2 from '../assets/movies-slider2.jpg'
import moviesSlider3 from '../assets/movies-slider3.jpg'
import moviesSlider4 from '../assets/movies-slider4.jpg'
import moviesWebp from '../assets/movies.webp'
import moviesAvif from '../assets/movies.avif'
import moviesJpg from '../assets/movies.jpg'
// Portfolio images
import portfolioJpg from '../assets/portfolio.jpg'
import portfolioWebp from '../assets/portfolio.webp'
import portfolioAvif from '../assets/portfolio.avif'
import portfolioSlider1 from '../assets/portfolio-slider1.jpg'
import portfolioSlider2 from '../assets/portfolio-slider2.jpg'
import portfolioSlider3 from '../assets/portfolio-slider3.jpg'
// Dashboard images
import dashboardJpg from '../assets/dashboard.jpg'
import dashboardAvif from '../assets/dashboard.avif'
import dashboardWebp from '../assets/dashboard.webp'
import dashboardSlider1 from '../assets/dashboard-slider1.jpg'
import dashboardSlider2 from '../assets/dashboard-slider2.jpg'
import dashboardSlider3 from '../assets/dashboard-slider3.jpg'
import dashboardSlider4 from '../assets/dashboard-slider4.jpg'
// Ciscenje D&D images
import ddJpg from '../assets/dd.jpg'
import ddAvif from '../assets/dd.avif'
import ddWebp from '../assets/dd.webp'
import ddSlider1 from '../assets/dd-slider1.jpg'
import ddSlider2 from '../assets/dd-slider2.jpg'
import ddSlider3 from '../assets/dd-slider3.jpg'
import ddSlider4 from '../assets/dd-slider4.jpg'
import ddSlider5 from '../assets/dd-slider5.jpg'
// MobilneDizalice images
import mobilnedizaliceJpg from '../assets/mobilnedizalice.jpg'
import mobilnedizaliceAvif from '../assets/mobilnedizalice.avif'
import mobilnedizaliceWebp from '../assets/mobilnedizalice.webp'
import mobilneSlider1 from '../assets/mobilne-slider1.jpg'
import mobilneSlider2 from '../assets/mobilne-slider2.jpg'
import mobilneSlider3 from '../assets/mobilne-slider3.jpg'
import mobilneSlider4 from '../assets/mobilne-slider4.jpg'
import mobilneSlider5 from '../assets/mobilne-slider5.jpg'
import mobilneSlider6 from '../assets/mobilne-slider6.jpg'
// BuyForDrive images
import buyForDriveJpg from '../assets/buy-for-drive.jpg'
import buyForDriveAvif from '../assets/buy-for-drive.avif'
import buyForDriveWebp from '../assets/buy-for-drive.webp'
import buyForDrive1 from '../assets/buyfordrive-1.jpg'
import buyForDrive2 from '../assets/buyfordrive-2.jpg'
import buyForDrive3 from '../assets/buyfordrive-3.jpg'
import buyForDrive4 from '../assets/buyfordrive-4.jpg'
import buyForDrive5 from '../assets/buyfordrive-5.jpg'
// Skedua images
import skeduaJpg from '../assets/skedua.jpg'
import skeduaAvif from '../assets/skedua.avif'
import skeduaWebp from '../assets/skedua.webp'
import skedua1 from '../assets/skedua-1.jpg'
import skedua2 from '../assets/skedua-2.jpg'
import skedua3 from '../assets/skedua-3.jpg'
import skedua4 from '../assets/skedua-4.jpg'

const projectsData = [
  {
    id: 'skedua',
    title: 'Skedua',
    skills: [
      'Next.js',
      'Mongoose',
      'MongoDB',
      'Tailwind CSS',
      'Context API',
      'Framer motion',
      'Server Components',
    ],
    description: [
      'Skedua is a powerful web application designed to streamline appointment scheduling for business clients. With a user-friendly interface, it serves both clients and administrators, providing a seamless experience for organizing and managing appointments.',
      'Currently used by 10 businesses with around 300 active users per client, Skedua ensures efficiency and scalability for any organization. The platform includes an intuitive client-side for easy appointment booking, and a robust admin panel for controlling user access, managing employees, and monitoring appointment statistics.',
      'Built with modern web technologies, Skedua highlights my expertise in delivering scalable, business-focused solutions that cater to real-world needs.',
    ],
    role: [
      'Created a responsive, user-friendly interface for both client-side and back-office',
      'Developed secure, scalable server-side logic, handling appointment bookings, real-time data updates, and user authentication',
      'Coordinated with clients to gather requirements, managed development timelines, and deployed updates on Vercel for the smooth operation of the app',
    ],
    github: '',
    link: 'https://demo.skedua.app/',
    img: { avif: skeduaAvif, webp: skeduaWebp, jpg: skeduaJpg },
    imgSlider: [skedua1, skedua2, skedua3, skedua4],
  },
  {
    id: 'buy-for-drive',
    title: 'BuyForDrive',
    skills: [
      'Next.js',
      'Mongoose',
      'MongoDB',
      'Tailwind CSS',
      'Context API',
      'Framer motion',
      'Server Components',
    ],
    description: [
      'BuyForDrive is an innovative platform that revolutionizes the car buying experience. It offers a wide range of features, including a comprehensive overview of available cars, a user-friendly interface for buying and selling cars, and advanced search options to help users find their dream car.',
    ],
    role: [
      'Created whole UI/UX for Web application where users can buy, sell, and explore a diverse range of cars',
      'Implemented Google and credentials login and register logic',
      'Created the structure of the MongoDB database and connected it through the backend part of the application',
    ],
    github: 'https://github.com/igorglisovic/buy-for-drive',
    link: 'https://buyfordrive.com/',
    img: { avif: buyForDriveAvif, webp: buyForDriveWebp, jpg: buyForDriveJpg },
    imgSlider: [buyForDrive1, buyForDrive2, buyForDrive3, buyForDrive4, buyForDrive5],
  },
  // {
  //   id: 'trim-creative',
  //   title: 'TrimCreative',
  //   skills: ['Next.js', 'Tailwind CSS', 'Framer motion'],
  //   description: [
  //     'TaskMaster is, as the name suggests, a simulation of a real admin panel. It contains functions such as an overview of employees, a calendar for the purpose of reminders, kanban and many other cool things.',
  //     'It also has options to change themes and change from dark to light mode. The settings are remembered so that every time the user returns to the application, he can enjoy the design he chose.',
  //   ],
  //   role: [
  //     "Designed and developed the entire UX/UI of the company's marketing site",
  //     'Built custom and outstanding page transitions',
  //     'Collaborated closely with the design team to create an attractive UI',
  //   ],
  //   link: 'https://igorglisovic.netlify.app/',
  //   img: { avif: dashboardAvif, webp: dashboardWebp, jpg: dashboardJpg },
  //   imgSlider: [
  //     dashboardSlider1,
  //     dashboardSlider2,
  //     dashboardSlider3,
  //     dashboardSlider4,
  //   ],
  // },
  {
    id: 'task-master',
    title: 'TaskMaster',
    skills: ['React', 'Tailwind CSS', 'Syncfusion', 'Context API'],
    description: [
      'TaskMaster is, as the name suggests, a simulation of a real admin panel. It contains functions such as an overview of employees, a calendar for the purpose of reminders, kanban and many other cool things.',
      'It also has options to change themes and change from dark to light mode. The settings are remembered so that every time the user returns to the application, he can enjoy the design he chose.',
    ],
    link: 'https://igorglisovic.netlify.app/',
    github: 'https://github.com/igorglisovic/admin-dashboard',
    img: { avif: dashboardAvif, webp: dashboardWebp, jpg: dashboardJpg },
    imgSlider: [dashboardSlider1, dashboardSlider2, dashboardSlider3, dashboardSlider4],
  },
  {
    id: 'mobilne-dizalice',
    title: 'MobilneDizalice',
    skills: ['React', 'CSS Modules', 'Swiper', 'Figma'],
    description: [
      'MobilneDizalice is a website designed for a startup company, offering a seamless user experience for exploring a range of mobile cranes. Users can easily navigate through the site to find the most suitable crane for their needs.',
      'The design focuses on simplicity and functionality, ensuring a smooth user experience from browsing to selection.',
    ],
    role: [
      'Designed and developed the entire UX/UI of the website',
      'Collaborated closely with the client to understand business goals and design preferences',
    ],
    link: 'https://mobilnedizalice.com/',
    github: 'https://github.com/igorglisovic/mobilnedizalice',
    img: {
      avif: mobilnedizaliceAvif,
      webp: mobilnedizaliceWebp,
      jpg: mobilnedizaliceJpg,
    },
    imgSlider: [
      mobilneSlider1,
      mobilneSlider2,
      mobilneSlider3,
      mobilneSlider4,
      mobilneSlider6,
      mobilneSlider5,
    ],
  },
  {
    id: 'ciscenje-dd',
    title: 'Ciscenje D&D',
    skills: ['WordPress', 'Elementor'],
    description: [
      "Website designed to showcase the services and expertise of a cleaning company. Offering a clean and intuitive user experience, the site presents comprehensive information about the company's cleaning solutions.",
    ],
    role: [
      "Developed the entire UX/UI of the company's marketing site",
      'Collaborated closely with the design team to create an attractive UI',
    ],
    link: 'https://www.ciscenjedd.rs/',
    img: { avif: ddAvif, webp: ddWebp, jpg: ddJpg },
    imgSlider: [ddSlider1, ddSlider2, ddSlider3, ddSlider4, ddSlider5],
  },
  {
    id: 'movie-match',
    title: 'MovieMatch',
    skills: ['HTML', 'CSS', 'Javascript', 'APIs', 'Rest', 'Git'],
    description: [
      'MovieMatch is an application that allows users to find the right movie for them to watch. The application contains a search engine for movies and actors. On the home page, upcoming movies and popular movies are highlighted. The user can view the trailer of each movie as well as information about the actors and crew of the movie.',
    ],
    link: 'https://igorglisovic.github.io/MoviesApp/',
    github: 'https://github.com/igorglisovic/igorglisovic.github.io/tree/master/MoviesApp',
    img: { avif: moviesAvif, webp: moviesWebp, jpg: moviesJpg },
    imgSlider: [moviesSlider1, moviesSlider2, moviesSlider3, moviesSlider4],
  },
  {
    id: 'social-sphere',
    title: 'SocialSphere',
    skills: ['HTML', 'CSS', 'Javascript', 'Mockapi', 'Rest', 'Git'],
    description: [
      'When you enter the SocialSphere Social Network for the first time, you need to register. Each subsequent time you will be able to log in with that account. After you create a SocialSphere account, you can publish a post or leave a comment on a post. You can also change your account information such as email and username.',
      ,
      'It is built in OOP Javascript and uses mockapi.io as a database where all posts, users, and comments of the social network are located.',
    ],
    link: 'https://igorglisovic.github.io/SocialNetwork/',
    github: 'https://github.com/igorglisovic/igorglisovic.github.io/tree/master/SocialNetwork',
    img: { avif: hexaAvif, webp: hexaWebp, jpg: hexaJpg },
    imgSlider: [HexaSlider1, HexaSlider2, HexaSlider3, HexaSlider4],
  },

  {
    id: 'portfolio',
    title: 'My Portfolio',
    skills: ['React', 'CSS Modules', 'Framer Motion', 'Git', 'Locomotive Scroll'],
    description: ['Just try it :)'],
    link: 'https://igorglisovic.com',
    github: 'https://github.com/igorglisovic/portfolio',
    img: { avif: portfolioAvif, webp: portfolioWebp, jpg: portfolioJpg },
    imgSlider: [portfolioSlider1, portfolioSlider2, portfolioSlider3],
  },
  // {
  //   id: 'bankist-app',
  //   title: 'Bankist App',
  //   skills: ['HTML', 'CSS', 'Javascript', 'Git'],
  //   description: [
  //     'Bankist is a fictitious and minimalistic online banking application that allows the user to:',
  //     '- Log in with a username and password',
  //     '- View and sort their monetary movements',
  //     '- Transfer money to another account',
  //     '- Request a loan from the bank',
  //     '- Delete their account',
  //   ],
  //   link: 'https://igorglisovic.github.io/BankistApp/',
  //   github:
  //     'https://github.com/igorglisovic/igorglisovic.github.io/tree/master/BankistApp',
  //   img: { avif: bankistAvif, webp: bankistWebp, jpg: bankistJpg },
  //   imgSlider: [bankistSlider1, bankistSlider2],
  // },
  // {
  //   id: 'recipe-app',
  //   title: 'Recipe app',
  //   skills: ['HTML', 'Sass', 'Javascript', 'APIs', 'Rest', 'Git'],
  //   description: [
  //     'RecipeApp is a fictitious and minimalistic application where the user can explore new recipes and save favorite ones. By clicking on his favorite meals, he can see all the details about their preparation.',
  //   ],
  //   link: 'https://igorglisovic.github.io/RecipeApp/',
  //   github:
  //     'https://github.com/igorglisovic/igorglisovic.github.io/tree/master/RecipeApp',
  //   img: { avif: recipeAvif, webp: recipeWebp, jpg: recipeJpg },
  //   imgSlider: [recipeSlider1, recipeSlider2],
  // },
]

const featuredProjectsData = [projectsData[0], projectsData[1], projectsData[2], projectsData[3]]

export { projectsData, featuredProjectsData }
