import React from 'react';
import styled from 'styled-components';
import Presentation from '../components/Presentation';
import withOnboardService from '../components/withOnboardService';

const AcknowledgementContainer = styled.section`
  label {
    line-height: 30px;
    display: block;
    margin-bottom: 15px;
    
    :hover {
      cursor: pointer;
      
      span {
        background-color: #85cc85;
        color: #fff;
      }
    }
  }
  
  label > span {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: #eee;
    margin-right: 10px;
    float: left;
    
    span {
      display: none;
    }
  }
  
  label > span.checked {
    > span {
      background-color: #85cc85;
      color: #fff;
      display: inline-block;
      width: 100%;
      text-align: center;
    }
  }
`;

function Acknowledgement(props) {
  return (
    <Presentation
      title="Acknowledgement"
      action={props.moveForward}
      actionLabel="Next"
      cancel={props.stepBack}
      cancelLabel="Go Back"
    >
      <AcknowledgementContainer>
        <p>Regarding the copyright, do you acknowledge not to publish the article elsewhere without Auth0's consent?</p>
        <label onClick={props.toggleCopyright}>
              <span className={props.ackCopyright ? 'checked' : ''}>
                <span>✔</span>
              </span>
          Yes, <strong>I acknowledge that I can't publish the article elsewhere</strong>.
        </label>
        <p>Regarding plagiarism, do you acknowledge not to copy content from other resources without giving the due credits?</p>
        <label onClick={props.togglePlagiarism}>
              <span className={props.ackPlagiarism ? 'checked' : ''}>
                <span>✔</span>
              </span>
          Yes, <strong>I acknowledge that I cannot commit plagiarism</strong>.
        </label>
      </AcknowledgementContainer>
    </Presentation>
  );
}

export default withOnboardService(Acknowledgement);
