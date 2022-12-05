import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: center;
    position: relative;
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .left {
      max-width: 100%;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+44 7405858811" />
            <ContactInfoItem icon={<MdEmail />} text="sr.yeerekar@gmail.com" />
            <ContactInfoItem text="London, United Kingdom" />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
