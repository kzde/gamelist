import React from 'react';
import styled, { keyframes } from 'styled-components';

const Overlay = styled.div`
  ${props => props.backgroundColor && `
  background-color: ${props.backgroundColor};
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
  `
  }
  
`;

const BounceCircle = styled.div`
  width: ${props => props.size || `40px`};
  height: ${props => props.size || `40px`};
  position: absolute;
  left: 50%;
  top: 50%;
`;

const bounce = keyframes`
  0% {transform: scale(0.0);}
  50% { transform: scale(1.0); }
  100% { transform: scale(0.0);}
`;
const Shared = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => props.color ? props.color : "black"};
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${bounce} 3.0s infinite ease-in-out;
`;

const FirstCircle = styled(Shared)``;
const SecondCircle = styled(Shared)`
  animation-delay: -1.0s;
`

const Loader = (props) => (
  <Overlay backgroundColor={props.backgroundColor}>
    <BounceCircle size={props.size} >
      <FirstCircle color={props.color} />
      <SecondCircle color={props.color} />
    </BounceCircle>
  </Overlay>
)

export default Loader;