import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import ProjectItem from '../components/ProjectItem';

const ProjectStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    gap: 5rem;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
  }
`;

export default function Projects() {
  return (
    <>
      <ProjectStyle>
        <div className="container">
          <SectionTitle
            heading="Projects"
            subheading="some of my recent works"
          />

          <div className="projects__allItems">
            {ProjectsInfo.map((item) => (
              <ProjectItem key={item.id} title={item.name} desc={item.desc} />
            ))}
          </div>
        </div>
      </ProjectStyle>
    </>
  );
}
