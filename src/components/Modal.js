import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { PrimaryButton } from "./Button";
import { illustrations, CloseIcon } from "../assets";
import { useSpring, animated, config } from "react-spring";

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  background: ${props => props.theme.formElementBackground};
  & img{
    width: 350px;
    height: 300px;
  }
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    config: config.slow
  });
  return (
    <animated.div style={animation}>

      <ModalWrapper>
        <img src={illustrations.Signup} alt="Sign up for an account!" />
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>
          Sign up today to get access to all of our content and features!
        </SignUpText>
        <PrimaryButton onClick={() => console.log("You signed up!")}>
          Sign Up
        </PrimaryButton>
        <CloseModalButton onClick={() => setShowModal(false)} aria-label="Close Modal">
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};

export const SignInModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    config: config.slow
  });
  return (
    <animated.div style={animation}>

      <ModalWrapper>
        <img src={illustrations.Signup} alt="Sign up for an account!" />
        <SignUpHeader>Sign In</SignUpHeader>
        <SignUpText>
          Sign in today.
        </SignUpText>
        <PrimaryButton onClick={() => console.log("You signed up!")}>
          Sign In
        </PrimaryButton>
        <CloseModalButton onClick={() => setShowModal(false)} aria-label="Close Modal">
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};