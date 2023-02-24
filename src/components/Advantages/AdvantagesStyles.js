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
  background-image: url(${({bgImage}) => bgImage || ''});
  width: 400px;
  height:400px;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  border-radius: 5px;
`;


export const AdvantagesTopWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-top: -220px;
`