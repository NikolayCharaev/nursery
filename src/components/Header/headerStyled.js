import styled from 'styled-components';


import { motion } from 'framer-motion';


export const HeaderWrapper = styled(motion.header)`
  background-color: ${({bgColor }) => bgColor };
  top: 0;
  width: 100%;
  position: fixed;
  z-index: 100;
  transition: all .2s ease;
  
`;

export const HeaderElements = styled.div`
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled(motion.div)`
    cursor: pointer;

`;

export const HeaderMenu = styled.ul`
  display: flex;
  width: 700px;
  justify-content: flex-end;
  gap: 10px;
  align-items: center;
`;

export const HeaderItem = styled(motion.li)`
cursor: pointer;
`;
