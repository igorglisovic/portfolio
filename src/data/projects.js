// Social Network images
import hexaAvif from '../assets/hexa.avif'
import hexaWebp from '../assets/hexa.webp'
import hexaJpg from '../assets/hexa.jpg'
import HexaSlider1 from '../assets/hexa-slider1.jpg'
import HexaSlider2 from '../assets/hexa-slider2.jpg'
import HexaSlider3 from '../assets/hexa-slider3.jpg'
import HexaSlider4 from '../assets/hexa-slider4.jpg'
// Bankist images
import bankistSlider1 from '../assets/bankist-slider1.jpg'
import bankistSlider2 from '../assets/bankist-slider2.jpg'
import bankistWebp from '../assets/bankist.webp'
import bankistAvif from '../assets/bankist.avif'
import bankistJpg from '../assets/bankist.jpg'
// Movies images
import moviesSlider1 from '../assets/movies-slider1.jpg'
import moviesSlider2 from '../assets/movies-slider2.jpg'
import moviesSlider3 from '../assets/movies-slider3.jpg'
import moviesSlider4 from '../assets/movies-slider4.jpg'
import moviesWebp from '../assets/movies.webp'
import moviesAvif from '../assets/movies.avif'
import moviesJpg from '../assets/movies.jpg'
// Recipe images
import recipeJpg from '../assets/recipe.jpg'
import recipeWebp from '../assets/recipe.webp'
import recipeAvif from '../assets/recipe.avif'
import recipeSlider1 from '../assets/recipe-slider1.jpg'
import recipeSlider2 from '../assets/recipe-slider2.jpg'
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

const projectsData = [
  {
    id: 'task-master',
    title: 'TaskMaster',
    skills: ['React', 'Tailwind', 'Syncfusion', 'Context API'],
    description: [
      'TaskMaster is, as the name suggests, a simulation of a real admin panel. It contains functions such as an overview of employees, a calendar for the purpose of reminders, kanban and many other cool things.',
      'It also has options to change themes and change from dark to light mode. The settings are remembered so that every time the user returns to the application, he can enjoy the design he chose.',
    ],
    link: 'https://igorglisovic.netlify.app/',
    github: 'https://github.com/igorglisovic/admin-dashboard',
    img: { avif: dashboardAvif, webp: dashboardWebp, jpg: dashboardJpg },
    imgSlider: [
      dashboardSlider1,
      dashboardSlider2,
      dashboardSlider3,
      dashboardSlider4,
    ],
  },
  {
    id: 'movie-match',
    title: 'MovieMatch',
    skills: ['HTML', 'CSS', 'Javascript', 'Apis', 'Rest', 'Git'],
    description: [
      'MovieMatch is an application that allows users to find the right movie for them to watch. The application contains a search engine for movies and actors. On the home page, upcoming movies and popular movies are highlighted. The user can view the trailer of each movie as well as information about the actors and crew of the movie.',
    ],
    link: 'https://igorglisovic.github.io/MoviesApp/',
    github:
      'https://github.com/igorglisovic/igorglisovic.github.io/tree/master/MoviesApp',
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
    github:
      'https://github.com/igorglisovic/igorglisovic.github.io/tree/master/SocialNetwork',
    img: { avif: hexaAvif, webp: hexaWebp, jpg: hexaJpg },
    imgSlider: [HexaSlider1, HexaSlider2, HexaSlider3, HexaSlider4],
  },

  {
    id: 'portfolio',
    title: 'My Portfolio',
    skills: [
      'React',
      'CSS Modules',
      'Framer Motion',
      'Git',
      'Locomotive Scroll',
    ],
    description: ['Just try it :)'],
    link: 'https://igorglisovic.com',
    github: 'https://github.com/igorglisovic/portfolio',
    img: { avif: portfolioAvif, webp: portfolioWebp, jpg: portfolioJpg },
    imgSlider: [portfolioSlider1, portfolioSlider2, portfolioSlider3],
  },
  {
    id: 'bankist-app',
    title: 'Bankist App',
    skills: ['HTML', 'CSS', 'Javascript', 'Git'],
    description: [
      'Bankist is a fictitious and minimalistic online banking application that allows the user to:',
      '- Log in with a username and password',
      '- View and sort their monetary movements',
      '- Transfer money to another account',
      '- Request a loan from the bank',
      '- Delete their account',
    ],
    link: 'https://igorglisovic.github.io/BankistApp/',
    github:
      'https://github.com/igorglisovic/igorglisovic.github.io/tree/master/BankistApp',
    img: { avif: bankistAvif, webp: bankistWebp, jpg: bankistJpg },
    imgSlider: [bankistSlider1, bankistSlider2],
  },
  {
    id: 'recipe-app',
    title: 'Recipe app',
    skills: ['HTML', 'Sass', 'Javascript', 'Apis', 'Rest', 'Git'],
    description: [
      'RecipeApp is a fictitious and minimalistic application where the user can explore new recipes and save favorite ones. By clicking on his favorite meals, he can see all the details about their preparation.',
    ],
    link: 'https://igorglisovic.github.io/RecipeApp/',
    github:
      'https://github.com/igorglisovic/igorglisovic.github.io/tree/master/RecipeApp',
    img: { avif: recipeAvif, webp: recipeWebp, jpg: recipeJpg },
    imgSlider: [recipeSlider1, recipeSlider2],
  },
]

const featuredProjectsData = [
  projectsData[0],
  projectsData[1],
  projectsData[2],
  projectsData[3],
]

export { projectsData, featuredProjectsData }
