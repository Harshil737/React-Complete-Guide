import React from "react";
import styled from "styled-components";
import './Person.css';

const StyledDiv = styled.div`
  width: 60%;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px 3px #cccccc;
  margin: 16px auto;
  padding: 16px;
  text-align: center;
  @media (min-width: 500px): {
      width: '450px'
  }`


const person = (props) => {

  return (
    // <div className='Person' style={style}>
    <StyledDiv>
      <p onClick={props.click}>Im a {props.name} and I am {props.age} years old.!</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </StyledDiv>
    // </div>
  )
}

export default person;
