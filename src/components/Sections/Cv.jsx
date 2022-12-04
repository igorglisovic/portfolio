import Container from '../UI/Container'
import classes from './Cv.module.css'
import personalImageWebp from '../../assets/igorglisovic.webp'
import personalImageJpg from '../../assets/igorglisovic.jpg'
import personalImageAvif from '../../assets/igorglisovic.avif'
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
                <source type="image/jpeg" srcSet={personalImageJpg} />
                <img
                  alt="Igor Glisovic Frontend Developer"
                  width={330}
                  height={330}
                  src={personalImageJpg}
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
                  <span>Date of birth:</span>
                </div>
                <h4>
                  June 10<sup>th</sup> 2003
                </h4>
              </div>
              <div className={classes['sidebar-row']}>
                <div className={classes['sidebar-title']}>
                  <img src={emailIcon} alt="Email icon" />
                  <span>E-mail adress:</span>
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
                  <span>Javascript</span>
                </div>
                <h4>3+ Years</h4>
              </div>
              <div className={classes['sidebar-row']}>
                <div className={classes['sidebar-title']}>
                  <img
                    src={codeIcon}
                    className={classes.code}
                    alt="Code icon"
                  />
                  <span>React JS</span>
                </div>
                <h4>1+ Year</h4>
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
                <h4>4+ Years</h4>
              </div>
              <div className={classes[classes['sidebar-row']]}>
                <div className={classes['sidebar-title']}>
                  <img
                    src={codeIcon}
                    className={classes.code}
                    alt="Code icon"
                  />
                  <span>Wordpress</span>
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
              <div className={classes['main-title']}>
                <img
                  src={aboutIcon}
                  className={classes.about}
                  alt="Contact icon"
                />
                <h4>About me</h4>
              </div>
              <div className={classes['main-content']}>
                <p className={classes['about-text']}>
                  Enthusiastic, responsible, and hard-working IT person. Working
                  on different projects helped me adapt to the changes quickly
                  and made me a mature team worker. Ability to think through a
                  problem coupled with the confidence to make ideas heard.
                  Excited to pursue new companies to grow my skills while
                  facilitating the empowerment and vocalization of marginalized
                  communities.
                </p>
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
                      JavaScript, Node.js;
                    </li>
                    <li>
                      • Advanced coding skills and experience in HTML, CSS,
                      SASS, Bootstrap;
                    </li>
                    <li>
                      • Advanced skills and experience in Wordpress, WebFlow;
                    </li>
                    <li>
                      • Good programming skills and experience in React.js;
                    </li>
                    <li>
                      • Good programming skills and experience in C/C++ and C#;
                    </li>
                    <li>
                      • Good experience and skills with APIs (Http requests);
                    </li>
                    <li>• Good experience and skills with Git;</li>
                  </ul>
                </div>
                <div className={classes['main-row']}>
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
                </div>
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
                    <li>• Serbian native</li>
                    <li>• English - B2 (learned during high school)</li>
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
                    <li>• Team player</li>
                    <li>• Motivated</li>
                    <li>• Always curious</li>
                    <li>• Responsible</li>
                    <li>• A problem solver</li>
                    <li>• Very organised</li>
                    <li>• Honest</li>
                  </ul>
                </div>
                <div className={classes['main-row']}>
                  <div className={classes['main-row__title']}>
                    <img src={otherIcon} alt="Other icon" />
                    <span>Other</span>
                  </div>
                  <ul>
                    <li>• Driving licence: B, M, AM (EU Directive 2020)</li>
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
            <span className={classes.edit}>Last edit: October 2022.</span>
          </main>
        </div>
      </Container>
    </section>
  )
}

export default Cv
