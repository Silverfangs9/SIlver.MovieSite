import React from "react";
import styled from "styled-components";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Container = styled.div`
  height: 20vh;
  width: 100%;
  color: white;
  @media screen and (max-width: 900px) {
    height: 100px;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1d1d1d;

`;
const ContactH1 = styled.h1`
  font-size: 26px;
  font-weight: 700;
  background-color: #1d1d1d;

  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`;
const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  background-color: #1d1d1d;

`;
const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #1d1d1d;


`;
const SocialIconLinks = styled.a`
  font-size: 40px;
  color: white;
  padding: 10px;
  background-color: #1d1d1d;

  &:hover {
    scale: 1.2;
    transition: 1s all ease-in-out;
    color: #32cd32;
  }
  @media screen and (max-width: 900px) {
    font-size: 30px;
  }
 
`;
const WebsiteRights = styled.small`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 15%;
  background-color: #1d1d1d;

`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <ContactH1>Contact Me Here!</ContactH1>
        <SocialMediaWrap>
          <SocialIcons>
            <SocialIconLinks
              href="https://github.com/Silverfangs9?tab=repositories"
              target="_blank"
              aerial-label="Github"
            >
              <FaGithub />
            </SocialIconLinks>
            <SocialIconLinks
              href="https://www.instagram.com/ib_dobaa/"
              target="_blank"
              aerial-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLinks>
            <SocialIconLinks
              href="https://twitter.com/DobaIbrahim"
              target="_blank"
              aerial-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLinks>
            <SocialIconLinks
              href="https://www.linkedin.com/in/ibrahim-doba-7b0937226/"
              target="_blank"
              aerial-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconLinks>
          </SocialIcons>
        </SocialMediaWrap>
        <WebsiteRights>
          @ {new Date().getFullYear()} All rights reserved.
        </WebsiteRights>
      </Wrapper>
    </Container>
  );
};

export default Footer;
