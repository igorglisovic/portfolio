import Container from '../UI/Container'
import classes from './Cv.module.css'

import personalImageWebp from '../../assets/igorglisovicCv.webp'
import personalImagePng from '../../assets/igorglisovicCv.png'
import personalImageAvif from '../../assets/igorglisovicCv.avif'
import personalImageJpg from '../../assets/igorglisovic.jpg'

import birthIcon from '../../assets/birth-icon.png'
import emailIcon from '../../assets/email-icon.png'
import flagIcon from '../../assets/flag-icon.png'
import codeIcon from '../../assets/code-icon.png'
import aboutIcon from '../../assets/about-icon.png'
import skillsIcon from '../../assets/skills-icon.png'
import capIcon from '../../assets/cap-icon.png'

import computerIcon from '../../assets/computer-icon.png'

import languageIcon from '../../assets/language-icon.png'
import personIcon from '../../assets/person-icon.png'
import otherIcon from '../../assets/other-icon.png'
import homeIcon from '../../assets/home-icon.png'
import udemyIcon from '../../assets/udemy-icon.png'
import cvPdf from '../../assets/cv.pdf'

const Cv = () => {
  return (
    <section className={classes.cv} data-scroll-section>
      <Container>
        <div className={classes['cv-wrapper']}>
          <aside className={classes['cv-sidebar']}>
            <div className={classes['picture']}>
              <picture>
                <source type="image/avif" srcSet={personalImageAvif} />
                <source type="image/webp" srcSet={personalImageWebp} />

                <source type="image/jpeg" srcSet={personalImagePng} />

                <source type="image/jpeg" srcSet={personalImageJpg} />

                <img
                  alt="Igor Glisovic Frontend Developer"
                  width={330}
                  height={330}
                  src={personalImagePng}
                />
              </picture>
            </div>
            <div className={`${classes['sidebar-section']} ${classes.path}`}>
              <h2>Igor Glisovic</h2>
              <h3>Front-end Web Developer</h3>
            </div>
            <div className={`${classes['sidebar-section']} ${classes.group}`}>
              <div className={classes['sidebar-row']}>
                <div className={classes['sidebar-title']}>
                  <img src={birthIcon} alt="Birth icon" />
                  <span>LinkedIn:</span>
                </div>
                <h4>
                  <a
                    aria-label="linkedin profile igor glisovic"
                    target="_blank"
                    href="https://linkedin.com/in/igor-glisovic/"
                  >
                    linkedin.com/in/igor-glisovic
                  </a>
                </h4>
              </div>
              <div className={classes['sidebar-row']}>
                <div className={classes['sidebar-title']}>
                  <img src={birthIcon} alt="Birth icon" />
                  <span>Date of birth:</span>
                </div>
                <h4>
                  June 10<sup>th</sup> 2003
                </h4>
              </div>
              <div className={classes['sidebar-row']}>
                <div className={classes['sidebar-title']}>
                  <img src={emailIcon} alt="Email icon" />
                  <span>E-mail address:</span>
                </div>
                <h4>contact@igorglisovic.com</h4>
              </div>
              <div className={classes[classes['sidebar-row']]}>
                <div className={classes['sidebar-title']}>
                  <img
                    src={flagIcon}
                    className={classes.nationality}
                    alt="Flag icon"
                  />
                  <span>Nationality:</span>
                </div>
                <h4>Serbian</h4>
              </div>
            </div>
            <div className={`${classes['sidebar-section']} ${classes.group}`}>
              <div className={classes['sidebar-row']}>
                <div className={classes['sidebar-title']}>
                  <img
                    src={codeIcon}
                    className={classes.code}
                    alt="Code icon"
                  />
                  <span>Next.js</span>
                </div>
                <h4>6+ Months</h4>
              </div>
              <div className={classes['sidebar-row']}>
                <div className={classes['sidebar-title']}>
                  <img
                    src={codeIcon}
                    className={classes.code}
                    alt="Code icon"
                  />
                  <span>React.js</span>
                </div>
                <h4>1+ Years</h4>
              </div>
              <div className={classes['sidebar-row']}>
                <div className={classes['sidebar-title']}>
                  <img
                    src={codeIcon}
                    className={classes.code}
                    alt="Code icon"
                  />
                  <span>JavaScript</span>
                </div>
                <h4>2+ Year</h4>
              </div>
              <div className={classes[classes['sidebar-row']]}>
                <div className={classes['sidebar-title']}>
                  <img
                    src={codeIcon}
                    className={classes.code}
                    alt="Code icon"
                  />
                  <span>HTML/CSS</span>
                </div>
                <h4>3+ Years</h4>
              </div>

              <div className={classes[classes['sidebar-row']]}>
                <div className={classes['sidebar-title']}>
                  <img
                    src={codeIcon}
                    className={classes.code}
                    alt="Code icon"
                  />
                  <span>WordPress</span>
                </div>
                <h4>3+ Years</h4>
              </div>
            </div>
            <div className={`${classes['sidebar-section']}`}>
              <a
                className={classes.btn}
                target="_blank"
                aria-label="Print cv"
                href={cvPdf}
              >
                Download CV
              </a>
            </div>
          </aside>
          <main className={classes['cv-main']}>
            <div className={classes['main-section']}>
              <div
                className={`${classes['main-content']} ${classes['about-paragraph']}`}
              >
                <p className={classes['about-text']}>
                  Developer valued for driving high-performance accessible web
                  experiences. I design quality, user-friendly, and scalable
                  products regardless of stack.
                </p>
              </div>
              <div className={classes['main-title']}>
                <img
                  src={aboutIcon}
                  className={classes.about}
                  alt="Contact icon"
                />

                <h4>Personal Projects</h4>
              </div>
              <div className={classes['main-content']}>
                <div className={classes.project}>
                  <h4>
                    <a target="blank" href="/project:task-master">
                      TaskMaster
                    </a>
                  </h4>
                  <p>
                    Using React, Tailwind, Syncfusion, and Context API, I
                    created an admin dashboard application. This project allowed
                    me to showcase my ability to create a functional and
                    user-friendly application using modern web technologies.
                  </p>
                  <p>
                    The admin dashboard application is a simulation of a real
                    admin panel and includes features such as an overview of
                    employees, a calendar for reminders, and a kanban board.
                  </p>
                  <p>
                    This project required strong problem-solving skills and an
                    understanding of responsive design principles to ensure that
                    the application is optimized for various screen sizes. My
                    role in this project involved creating and implementing the
                    frontend design, as well as collaborating with the backend
                    team to ensure proper integration of the application.
                  </p>
                </div>
                <div className={classes.project}>
                  <h4>
                    <a target="blank" href="/project:movie-match">
                      MovieMatch
                    </a>
                  </h4>
                  <p>
                    Developed a user-friendly web application using HTML, CSS,
                    and JavaScript to allow users to easily search and find
                    their desired movies. The application features a search
                    engine for movies and actors and provides details about
                    upcoming and popular movies. Implemented features to view
                    trailers of each movie and access information about the
                    actors and crew. Through this project, gained experience in
                    developing responsive and dynamic web applications, as well
                    as utilizing third-party APIs for data integration.
                  </p>
                </div>
                <div className={classes.project}>
                  <h4>
                    <a target="blank" href="/project:social-sphere">
                      SocialSphere
                    </a>
                  </h4>
                  <p>
                    SocialSphere is a social media web application that I
                    developed using HTML, CSS, and JavaScript. The app allows
                    users to register for an account, log in, and interact with
                    other users by creating posts and leaving comments on
                    existing posts. I utilized Mockapi as a database to store
                    all user and post data.
                  </p>
                  <p>
                    I implemented object-oriented programming principles in the
                    development of the project and utilized Git for version
                    control throughout the development process. The project
                    provided me with valuable experience in front-end web
                    development and working with RESTful APIs.
                  </p>
                </div>
              </div>
            </div>
            <div className={classes['main-section']}>
              <div className={classes['main-title']}>
                <img src={skillsIcon} alt="Skills icon" />
                <h4>Skills</h4>
              </div>
              <div className={classes['main-content']}>
                <div className={classes['main-row']}>
                  <div className={classes['main-row__title']}>
                    <img
                      src={codeIcon}
                      className={classes.code}
                      alt="Code icon"
                    />
                    <span>Profession-related</span>
                  </div>
                  <ul>
                    <li>
                      • Advanced programming skills and experience in
                      JavaScript;
                    </li>
                    <li>
                      • Advanced coding skills and experience in HTML, CSS, and
                      Tailwind;
                    </li>
                    <li>
                      • Good programming skills and experience in React.js,
                      Next.js, and Redux;;
                    </li>
                    <li>
                      • Good experience and skills with Git, GitHub, APIs, and
                      SASS;
                    </li>
                    <li>
                      • Good experience and skills with Jest and React Testing
                      Library;
                    </li>
                    <li>• Good experience and skills with ChatGPT;</li>
                    <li>
                      • Good Raster and Vector graphics skills (Adobe Photoshop,
                      Figma);
                    </li>
                  </ul>
                </div>
                {/* <div className={classes['main-row']}>
                  <div className={classes['main-row__title']}>
                    <img
                      src={computerIcon}
                      className={classes.computer}
                      alt="Computer icon"
                    />
                    <span>Computer</span>
                  </div>
                  <ul>
                    <li>
                      • Excellent skills of use of Microsoft Office and Libre
                      Office suites
                    </li>
                    <li>
                      • Good operating system usage skills (Windows/Linux
                      systems)
                    </li>

                    <li>
                      • Excellent Raster and Vector graphics skills (Adobe
                      Photoshop, Figma)
                    </li>

                    <li>
                      • Good computer hardware servicing skills (onboard part
                      replacement – soldering techniques)
                    </li>
                  </ul>
                </div> */}
                <div className={classes['main-row']}>
                  <div className={classes['main-row__title']}>
                    <img
                      src={languageIcon}
                      className={classes.language}
                      alt="Language icon"
                    />
                    <span>Languages</span>
                  </div>
                  <ul>
                    <li>• Serbian (native)</li>
                    <li>• English (learned during high school)</li>
                  </ul>
                </div>
                <div className={classes['main-row']}>
                  <div className={classes['main-row__title']}>
                    <img
                      src={personIcon}
                      className={classes.person}
                      alt="Person icon"
                    />
                    <span>Personality</span>
                  </div>
                  <ul>
                    <li>
                      • I thrive in collaborative environments and believe that
                      the best results are achieved through teamwork.
                    </li>
                    <li>
                      • I am driven by a passion for creating impactful and
                      innovative solutions.
                    </li>
                    <li>
                      • I have a natural curiosity and love to learn new things.
                    </li>
                    <li>
                      • I take ownership of my work and am committed to
                      delivering high-quality results.
                    </li>
                    <li>
                      • I have a knack for identifying challenges and coming up
                      with effective solutions.
                    </li>
                  </ul>
                </div>
                <div className={classes['main-row']}>
                  <div className={classes['main-row__title']}>
                    <img src={otherIcon} alt="Other icon" />
                    <span>Other</span>
                  </div>
                  <ul>
                    <li>• Driving license: B, AM (EU Directive 2020)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={classes['main-section']}>
              <div className={classes['main-title']}>
                <img src={capIcon} alt="Cap icon" />
                <h4>Education and training</h4>
              </div>
              <div className={classes['main-content']}>
                <div className={`${classes['main-row']} ${classes.education}`}>
                  <div className={classes['main-row__title']}>
                    <span>Sep 2021 - July 2022</span>
                  </div>
                  <div>
                    <h5>
                      React - The Complete Guide (incl Hooks, React Router,
                      Redux)
                    </h5>
                    <div className={classes['main-row__subtitle']}>
                      <img src={udemyIcon} alt="Udemy icon" />
                      <span>Udemy Course - Maximilian Schwarzmüller</span>
                    </div>
                  </div>
                </div>
                <div className={`${classes['main-row']} ${classes.education}`}>
                  <div className={classes['main-row__title']}>
                    <span>July 2019 - Apr 2020</span>
                  </div>
                  <div>
                    <h5>
                      The Complete JavaScript Course: From Zero to Expert!
                    </h5>
                    <div className={classes['main-row__subtitle']}>
                      <img src={udemyIcon} alt="Udemy icon" />
                      <span>Udemy Course - Jonas Schmedtmann</span>
                    </div>
                  </div>
                </div>
                <div className={`${classes['main-row']} ${classes.education}`}>
                  <div className={classes['main-row__title']}>
                    <span>Sep 2018 - June 2022</span>
                  </div>
                  <div>
                    <h5>Technical High School - Information Tehnology</h5>

                    <div className={classes['main-row__subtitle']}>
                      <img
                        src={homeIcon}
                        className={classes.home}
                        alt="Building icon"
                      />
                      <span>High school in Serbia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <span className={classes.edit}>Last edit: February 2023.</span>
          </main>
        </div>
      </Container>
    </section>
  )
}

export default Cv
