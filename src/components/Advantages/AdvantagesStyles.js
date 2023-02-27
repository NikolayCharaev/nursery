import styled from 'styled-components';

import { motion } from 'framer-motion';

export const AdvantagesWrapper = styled(motion.div)`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 100px;

  @media screen and (max-width: 924px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 569px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const AdvantagesItem = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  border-radius: 10px;
  text-align: left;
  user-select: none;
`;

export const AdvantagesIcon = styled(motion.div)``;

export const AdvantagesTitle = styled(motion.h4)`
  margin-bottom: 20px;
`;

export const AdvantagesSubtitle = styled(motion.h5)`
  margin-bottom: 20px;
`;

export const AdvantagesImageTop = styled(motion.div)`
  background-image: url(${({ setbg }) => setbg || ''});
  width: 400px;
  height: 400px;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  border-radius: 5px;

  @media screen and (max-width: 1338px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 1115px) {
    width: 250px;
    height: 250px;
  }


  @media screen and (max-width: 565px) {
    width: 200px;
    height: 200px;
  }


  @media screen and (max-width: 451px) {
   max-width: 400px;
    min-height: 400px;

    width: 100%;
    /* height: 100%; */
  }
`;

export const AdvantagesTopWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-top: -220px;

  @media screen and (max-width: 1171px) {
    margin-top: -318px;
  }
`;

export const AdvantagesImagesWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-width: 100%;
  margin: 200px 0;

  @media screen and (max-width: 1650px) {
    justify-content: space-around;
  }

  @media screen and (max-width: 1338px) {
    max-width: 1000px;
  }
  @media screen and (max-width: 1115px) {
    max-width: 800px;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 451px) {
    /* max-height: 500px; */
    flex-direction: column;
    align-items: center;
    gap: 180px;
  }
`;
