import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NurseryWrapper = styled.div`
  margin-top: 230px;
  margin-bottom: 200px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 1021px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    gap: 50px;
  }
  @media screen and (max-width: 624px) {
    margin-top: 130px;
  }
`;

export const NurseryImagesWrapper = styled.div`
  display: flex;
`;

export const NurseryImg = styled(motion.div)`
  background-image: url(${({ image }) => image});
  width: 700px;
  height: 700px;
  background-size: cover;
  position: absolute;
  display: block;
  background-position: top center;
  border-radius: 20px;
  animation: animate 3s infinite ease;
  margin-right: 150px;
  z-index: 10;

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @media screen and (max-width: 1490px) {
    width: 500px;
    height: 500px;
  }

  @media screen and (max-width: 1198px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 1021px) {
    margin-right: 0;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
    height: 300px;
  }
`;

export const NurseryMask = styled.div`
  width: 700px;
  height: 700px;
  background-color: aquamarine;
  opacity: 0.5;
  animation: animateMask 3s infinite ease;
  position: relative;
  border-radius: 20px;
  z-index: 0;
  top: 0;
  left: 0;
  @keyframes animateMask {
    0% {
      transform: rotate(10deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(10deg);
    }
  }

  @media screen and (max-width: 1490px) {
    width: 500px;
    height: 500px;
  }
  @media screen and (max-width: 1198px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
    height: 300px;
  }
`;

export const NurseryContent = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  width: 600px;
  padding: 10px;
  max-height: 710px;
  overflow: scroll;
  border-radius: 10px;
  /* margin-right: auto; */

  @media screen and (max-width: 1490px) {
    width: 500px;
    height: 500px;
  }
  @media screen and (max-width: 1198px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 1021px) {
    width: 100%;
  }
`;

export const NurseryTitle = styled(motion.h1)`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 40px;
`;

export const NurseryText = styled(motion.p)`
  margin-bottom: 20px;

  @media screen and (max-width: 1490px) {
    font-size: 15px;
  }
`;
export const NurseryTextWrapper = styled(motion.div)`
  font-size: 20px;
`;
