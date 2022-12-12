import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import Project_One from "../../assets/img/1.png";
import Project_Two from "../../assets/img/4.png";
import Project_Three from "../../assets/img/7.png";
import Blue from "../../assets/img/blue-sphere.json";
import Headshot from "../../assets/img/head.png";
import rocket from "../../assets/img/rocket.json";
import Resume from "../../assets/taiyeb_nirjhor_resume.pdf";

function Main() {
  const submitHandler = () => {};

  return (
    <>
      <main className="l-main">
        {/* <!--===== HOME =====--> */}
        <section className="home" id="home">
          <div className="home__container bd-grid">
            <div className="home__data">
              <div className="home__img">
                <img className="ml-[.5rem]" src={Headshot} alt="Headshot" />
              </div>
              <h1 className="home__title">Taiyeb Nirjhor</h1>
              <span className="home__profession">
                Full Stack Developer <br />
              </span>

              <div className="home__social">
                <a href="#" className="home__social-link">
                  {" "}
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a href="#" className="home__social-link">
                  {" "}
                  <i className="bx bxl-github"></i>
                </a>
                <a href="#" className="home__social-link">
                  {" "}
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="home__social-link">
                  {" "}
                  <i className="bx bxl-instagram"></i>
                </a>
              </div>
              <a
                download={"taiyeb_nirjhor_resume.pdf"}
                href={Resume}
                className="button home__button"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* <!--===== ABOUT =====--> */}
        <section className="about section" id="about">
          <span className="section-subtitle">My intro </span>
          <h2 className="section-title"> About Me</h2>

          <div className="about__container bd-grid">
            <div className="about__data">
              <p className="about__description">
                I am Full Stack Developer specialized in MERN stack. I love play
                with different types of technologies and share knowladge. I have
                extensive knowledge of developing ReactJs web applications
                Combined with my communication and problem-solving skill. I if
                you wants to know more about me! Feel free to check my resume
              </p>
              <div className="about__img">
                <Lottie loop={true} animationData={Blue} />
              </div>
            </div>

            <div>
              <div className="about__information">
                <h3 className="about__information-title">Information</h3>

                <div className="about__information-data">
                  <i className="bx bx-user about__information-icon"></i>
                  <span>Taiyeb Nirjhor</span>
                </div>

                <div className="about__information-data">
                  <i className="bx bx-phone about__information-icon"></i>
                  <span>+880 1913152255</span>
                </div>

                <div className="about__information-data">
                  <i className="bx bx-envelope about__information-icon"></i>
                  <span>taiyebnijhor@gmail.com</span>
                </div>
              </div>

              <div className="about__information">
                <h3 className="about__information-title">
                  Achievments and Support
                </h3>

                <div className="about__information-data">
                  <i className="bx bx-medal about__information-icon"></i>
                  <div>
                    <span className="about__information-subtitle">
                      Complete Web Development Course
                    </span>
                    <span className="about__information-subtitle-small">
                      MERN Stack
                    </span>
                  </div>
                </div>

                <div className="about__information-data">
                  <i className="bx bx-briefcase about__information-icon"></i>
                  <div>
                    <span className="about__information-subtitle">
                      20+ Projects
                    </span>
                    <span className="about__information-subtitle-small">
                      Complete
                    </span>
                  </div>
                </div>

                <div className="about__information-data">
                  <i className="bx bx-support about__information-icon"></i>
                  <div>
                    <span className="about__information-subtitle">Support</span>
                    <span className="about__information-subtitle-small">
                      24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--===== SKILLS =====--> */}
        <section className="skills section" id="skills">
          <span className="section-subtitle">Why Choose Me</span>
          <h2 className="section-title">My expertise Area</h2>

          <div className="skills__container bd-grid">
            <div className="skills__content">
              <h3 className="skills__subtitle">Frontend</h3>

              <div className="skills__data">
                <span className="skills__name">Html/css</span>
                <span className="skills__number">80%</span>
                <span className="skills__bar skills__html"></span>
              </div>

              <div className="skills__data">
                <span className="skills__name">Javascript</span>
                <span className="skills__number">90%</span>
                <span className="skills__bar skills__js"></span>
              </div>

              <div className="skills__data">
                <span className="skills__name">React</span>
                <span className="skills__number">70%</span>
                <span className="skills__bar skills__react"></span>
              </div>

              {/* <div className="skills__data">
                <span className="skills__name">Angular</span>
                <span className="skills__number">60%</span>
                <span className="skills__bar skills__angular"></span>
              </div> */}
            </div>

            <div className="skills__content">
              <h3 className="skills__subtitle">Backend</h3>

              {/* <div className="skills__data">
                <span className="skills__name">Php</span>
                <span className="skills__number">80%</span>
                <span className="skills__bar skills__php"></span>
              </div> */}

              <div className="skills__data">
                <span className="skills__name">Express Js</span>
                <span className="skills__number">70%</span>
                <span className="skills__bar skills__node"></span>
              </div>

              <div className="skills__data">
                <span className="skills__name">Firebase authentication</span>
                <span className="skills__number">90%</span>
                <span className="skills__bar skills__firebase"></span>
              </div>

              <div className="skills__data">
                <span className="skills__name">Mongobd atlas</span>
                <span className="skills__number">60%</span>
                <span className="skills__bar skills__python"></span>
              </div>
            </div>
          </div>
        </section>

        {/* <!--===== EDUCATION =====--> */}
        <section className="education section">
          <span className="section-subtitle">Qualification</span>
          <h2 className="section-title">My Education</h2>

          <div className="education__container bd-grid">
            <div className="education__content">
              <div>
                <h3 className="education__year">2020 - Present</h3>
                <span className="education__university">
                  Green University of Bangladesh
                </span>
              </div>

              <div className="education__time">
                <span className="education__rounder"></span>
                <span className="education__line"></span>
              </div>

              <div>
                <h3 className="education__race">bachelor of science</h3>
                <span className="education__specialty">
                  Computer Science Engineering
                </span>
              </div>
            </div>

            <div className="education__content">
              <div>
                <h3 className="education__year">2016 - 2018</h3>
                <span className="education__university">
                  Dr. Mahbubur Rahman Mollah College
                </span>
              </div>

              <div className="education__time">
                <span className="education__rounder"></span>
                <span className="education__line"></span>
              </div>

              <div>
                <h3 className="education__race">Higher Secondary School </h3>
                <span className="education__specialty">science</span>
              </div>
            </div>

            <div className="education__content">
              <div>
                <h3 className="education__year">2014 - 2016</h3>
                <span className="education__university">
                  Bright School And College
                </span>
              </div>

              <div className="education__time">
                <span className="education__rounder"></span>
                <span className="education__line"></span>
              </div>

              <div>
                <h3 className="education__race">Secondary School</h3>
                <span className="education__specialty">Science</span>
              </div>
            </div>
          </div>
        </section>

        {/* <!--===== SERVICES =====--> */}
        {/* <section className="services section" id="services">
          <span className="section-subtitle">What I Offer</span>
          <h2 className="section-title">My Services</h2>

          <div className="services__container bd-grid">
            <div className="services__content">
              <i className="bx bx-code services__icon"></i>
              <h3 className="services__title">Web Design</h3>
              <p className="services__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                urna eu ipsum finibus congue quis at metus. Aenean sodales quam
                a egestas vulputate. Vestibulum dapibus mauris non rhoncus
                venenatis
              </p>
            </div>

            <div className="services__content">
              <i className="bx bx-pen services__icon"></i>
              <h3 className="services__title">Graphic Design</h3>
              <p className="services__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                urna eu ipsum finibus congue quis at metus. Aenean sodales quam
                a egestas vulputate. Vestibulum dapibus mauris non rhoncus
                venenatis
              </p>
            </div>

            <div className="services__content">
              <i className="bx bx-brush services__icon"></i>
              <h3 className="services__title">UI/UX</h3>
              <p className="services__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                urna eu ipsum finibus congue quis at metus. Aenean sodales quam
                a egestas vulputate. Vestibulum dapibus mauris non rhoncus
                venenatis
              </p>
            </div>

            <div className="services__content">
              <i className="bx bx-server services__icon"></i>
              <h3 className="services__title">Backend Development</h3>
              <p className="services__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                urna eu ipsum finibus congue quis at metus. Aenean sodales quam
                a egestas vulputate. Vestibulum dapibus mauris non rhoncus
                venenatis
              </p>
            </div>
            <div className="services__content">
              <i className="bx bx-pencil services__icon"></i>
              <h3 className="services__title">Content Writing</h3>
              <p className="services__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                urna eu ipsum finibus congue quis at metus. Aenean sodales quam
                a egestas vulputate. Vestibulum dapibus mauris non rhoncus
                venenatis
              </p>
            </div>

            <div className="services__content">
              <i className="bx bx-mobile services__icon"></i>
              <h3 className="services__title">Interface Mobile</h3>
              <p className="services__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                urna eu ipsum finibus congue quis at metus. Aenean sodales quam
                a egestas vulputate. Vestibulum dapibus mauris non rhoncus
                venenatis
              </p>
            </div>
          </div>
        </section> */}

        {/* <!--===== PROJECT IN MIND =====--> */}
        <section className="project section">
          <div className="project__container bd-grid">
            <div className="project__data">
              <h2 className="section-title project__title text-white">
                Do you have a project in mind
              </h2>
              <p className="project__description">
                If you have a project that you want to carry out, do not
                hesitate and tell me what it is, and what services I can offer
                you. contact me directly here
              </p>
              <a href="#contact" className="button button__light">
                Contact me
              </a>
            </div>

            <div className="project__img">
              <Lottie loop={true} animationData={rocket} />
            </div>
          </div>
        </section>

        {/* <!--===== WORKS =====--> */}
        <section className="works section" id="works">
          <span className="section-subtitle">My portfolio</span>
          <h2 className="section-title">Recent works</h2>

          <div className="works__container bd-grid">
            <Link to={"/project-details/pathshala"}>
              <div className="works__img">
                <img src={Project_One} alt="" />

                <div className="works__data">
                  <a href="#" className="works__link">
                    {" "}
                    <i className="bx bx-link-alt"></i>{" "}
                  </a>
                  <span className="works__title">Pathshala</span>
                </div>
              </div>
            </Link>
            <Link to={"/project-details/tastebuds"}>
              <div className="works__img">
                <img src={Project_Two} alt="" />

                <div className="works__data">
                  <a href="#" className="works__link">
                    {" "}
                    <i className="bx bx-link-alt"></i>{" "}
                  </a>
                  <span className="works__title">Taste Buds</span>
                </div>
              </div>
            </Link>
            <Link to={"/project-details/koders"}>
              <div className="works__img">
                <img src={Project_Three} alt="" />

                <div className="works__data">
                  <a href="#" className="works__link">
                    {" "}
                    <i className="bx bx-link-alt"></i>{" "}
                  </a>
                  <span className="works__title">Koders</span>
                </div>
              </div>
            </Link>

            {/* <div className="works__img">
              <img src={Project_Four} alt="" />

              <div className="works__data">
                <a href="#" className="works__link">
                  {" "}
                  <i className="bx bx-link-alt"></i>{" "}
                </a>
                <span className="works__title">Work 4</span>
              </div>
            </div>

            <div className="works__img">
              <img src={Project_Five} alt="" />

              <div className="works__data">
                <a href="#" className="works__link">
                  {" "}
                  <i className="bx bx-link-alt"></i>{" "}
                </a>
                <span className="works__title">Work 5</span>
              </div>
            </div>

            <div className="works__img">
              <img src={Project_Six} alt="" />

              <div className="works__data">
                <a href="#" className="works__link">
                  {" "}
                  <i className="bx bx-link-alt"></i>{" "}
                </a>
                <span className="works__title">Work 6</span>
              </div>
            </div> */}
          </div>
        </section>

        {/* <!--===== CONTACT =====--> */}
        <section className="contact section" id="contact">
          <span className="section-subtitle">Contact Me</span>
          <h2 className="section-title">Get In Touch</h2>

          <div className="contact__container bd-grid">
            <form
              action="https://formspree.io/f/xayajrpg"
              method="post"
              className="contact__form"
              onSubmit={submitHandler}
            >
              <div className="contact__inputs">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="contact__input"
                />
                <input
                  type="mail"
                  name="email"
                  placeholder="Email"
                  className="contact__input"
                />
              </div>

              <input
                type="number"
                name="phone"
                placeholder="Phone"
                className="contact__input"
              />

              <textarea
                name="message"
                id=""
                cols="0"
                rows="10"
                placeholder="Message"
                className="contact__input"
              ></textarea>

              <input
                type="submit"
                value="Send Message"
                className="button contact__button"
              />
            </form>

            <div>
              <div className="contact__info">
                <h3 className="contact__subtitle">Call me</h3>
                <span className="contact__text">+880 1913152255</span>
                {/* <span className="contact__text">+880 1913152255</span> */}
              </div>

              <div className="contact__info">
                <h3 className="contact__subtitle">E-mail</h3>
                <span className="contact__text">taiyebnirjhor@gmail.com</span>
                {/* <span className="contact__text">taiyebnijhor.me/#contact</span> */}
              </div>

              <div className="contact__info">
                <h3 className="contact__subtitle">Location</h3>
                <span className="contact__text">Dhaka , Bangladesh</span>
                {/* <span className="contact__text">Dhaka , Bangladesh</span> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
