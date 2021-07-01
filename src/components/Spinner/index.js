import React from 'react';
import styled, { keyframes } from 'styled-components';

const circle = keyframes`
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`;

const Core = styled.div``;

const Wrapper = styled.div`
  display: inline-block;
  transform: translate3D(-50%, -50%, 1px);
  position: fixed;
  top: 50%;
  left: 50%;

  > ${Core} {
    display: inline-block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    background: #fff;
    animation: ${circle} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
`;

const Spinner = () => (
  <Wrapper>
    <Core></Core>
  </Wrapper>
);

export default Spinner;
