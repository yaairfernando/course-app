import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import styled from 'styled-components';

// const Button = styled.a `
//   display: inline-block;
//   -webkit-text-decoration: none;
//   text-decoration: none;
//   font-weight: bold;
//   cursor: pointer;
//   color: #d24d57 !important;
//   padding: 15px 35px;
//   border-radius: 4px;
//   background-color: #fff;
//   font-size: 18px;
//   border: 2px solid #d24d57;
// `
const Button = styled(
  styled.a({
    display: "inline-block",
    webkitTextDecoration: "none",
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#d24d57 !important",
    padding: "15px 35px",
    borderRadius: "4px",
    backgroundColor: "#fff",
    fontSize: "18px",
    border: "2px solid #d24d57"
  })
)`
  &:hover{
    background: #d24d57;
    color: #fff !important;
    text-decoration: none;
  }
`
const ActiveItem = (props) => {
  return(
    <div className="row pt-4 pb-4">
      <div className="col-md-10 offset-md-1">
        <div>
          <div className="card px-5">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <Thumbnail />
                <div className="pt-4 pb-4">
                  <h4>{props.title}</h4>
                  <p>{props.description}</p>
                  <div className="cta-wrapper">
                    <Button className="btn cta-btn">Watch this video</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ActiveItem;