import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.jpeg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      filter: grayscale(100%);
      &:hover {
        filter: grayscale(60%);
      }
      transition: all 2s;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Shaenraj Yeerekar </span>
              </p>
              <h2 className="about__heading">A Full Stack Developer</h2>
              <div className="about__info">
                <PText>
                  Over 4 years of experience as a Front-end Developer, with
                  hands-on experience in Web-based user interactions along with
                  designing & implementing the high-responsive user interface.
                  <br /> <br />
                  I started coding since I was in high school. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="2020 - 2022"
                items={[
                  'MSc in Business Analytics, Northumbria University, London ',
                ]}
              />

              <AboutInfoItem
                title="2014 - 2017"
                items={[
                  'Bachelor of Commerce, Osmania University, Hyderabad, India ',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[
                  'HTML5',
                  'CSS3',
                  'JavaScript',
                  'TypeScript',
                  'Azure',
                  'JQuery',
                  'React.js',
                  'Redux',
                  'Bootstrap',
                ]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node.js', 'Express', 'APIs']}
              />
              <AboutInfoItem title="Database" items={['MySQL', 'MongoDB']} />
              <AboutInfoItem
                title="Tools"
                items={['VS Code', 'Git', 'CI/CD']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2020 - 2022"
                items={['Adison Infotech, UK, London']}
              />
              <AboutInfoItem
                title="2017 - 2019"
                items={[
                  'Banana Apps Ltd, Hyderabad, India                                                                   ',
                ]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
