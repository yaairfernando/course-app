import React, { Component } from 'react';
import styled from 'styled-components';

// const Section = styled.section`
//   background: #d24d57 url(/assets/logo-jumbotron.jpeg) 50% 0 no-repeat fixed;
//   min-height: 550px;
//   padding: 150px 0;
//   color: #fff;
// `

const Section = styled(
  styled.section({
    background: "url(/assets/logo-jumbotron.jpeg) 50% 0% no-repeat",
    backgroundSize: "cover",
    zIndex: "3",
    height: "550px",
    padding: "150px 0",
    color: "#fff"
  })
)`
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 550px;
    background: #d24d57;
    opacity: 0.75;
  }
`;

const Right = styled.div`
  z-index: 4;
`

const Header = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
`

const Subhead = styled.p`
  font-size: 18px;
  font-weight: 500;
`

const Button = styled(
  styled.a({
    borderColor: "#fff",
    color: "#fff",
    width: "34%",
    margin: "3.75em auto 0 auto",
    fontSize: "1.2em",
    textTransform: "uppercase",
    padding: "1.5em 0",
    transition: "all 0.5s ease-in-out"
  })
)`
  &:hover {
    background: #fff;
    color: #d24d57 !important;
  }
`

const Jumbotron = () => {
  return(
    <Section className="home-section--1">
      <div className="container">
        <div className="row">
          <Right className="col col-sm-12 col-md-12">
            <div className="pt-4 mt-4 text-center">
              <Header>React with Ruby and Rails</Header>
              <Subhead>Boost your skills with react and rails!!!.</Subhead>
              <div className="cta-wrapper">
                <Button className="btn fancy-btn">Get Started!!</Button>
              </div>
            </div>
          </Right>
          {/* <Left className="col col-sm-12 col-md-7">
            <div className="pt-4 mt-4 text-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/DLX62G4lc44" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </Left> */}
        </div>
      </div>
    </Section>
  )
};

export default Jumbotron;