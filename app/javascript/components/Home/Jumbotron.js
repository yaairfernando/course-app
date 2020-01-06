import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #005BA9;
  min-height: 550px;
  padding: 150px 0;
  color: #fff;
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

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  background: #fff;
  padding: 10px 20px;
  font-size: 18px;
  box-shadow: -1px -2px 10px rgba(255,255,255,0.7), 
  3px 2px 10px rgba(200,200,200,0.7);
  color: #005BA9 !important;
`


const Jumbotron = () => {
  return(
    <Section className="home-section--1">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              <Header>React with Ruby and Rails</Header>
              <Subhead>Boost your skills with react and rails!!!.</Subhead>
              <div className="cta-wrapper">
                <Button className="btn fancy-btn">Get Started!!</Button>
              </div>
            </div>
          </div>
          <div className="col col-sm-12 col-md-7">
            <div className="pt-4 mt-4 text-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/DLX62G4lc44" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
};

export default Jumbotron;