import React from 'react';
import styled from 'styled-components';
import InputField from './InputField';

const CardContainer = styled.div`
  position: relative;
  width: 350px;
  height: 450px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  gap: 15px;
  border-radius: 15px;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -10px;
    margin: auto;
    width: 370px;
    height: 480px;
    border-radius: 12px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
4}

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  &:hover::after {
    filter: blur(30px);
  }

  &:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }
`;

const Heading = styled.p`
  font-size: 22px;
  color : white;
  text-transform: capitalize;
  font-weight: 700;
  margin: 0; /* Remove default margin */
`;

const Paragraph = styled.p`
  font-size: 15px;
  color : white;
  margin: 0; /* Remove default margin */
`;

const LastParagraph = styled(Paragraph)`
  color: #e81cff;
  font-weight: 600;
`;

const Card = () => {
  return (
    <CardContainer>
      <InputField />
      <LastParagraph>Todo App</LastParagraph>
    </CardContainer>
  );
};

export default Card;