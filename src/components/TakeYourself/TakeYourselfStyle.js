import styled from 'styled-components';
import { motion } from 'framer-motion';

export const YourselfWrapper = styled(motion.div)`
  width: 100%;
  height: 900px;
  overflow: scroll;
  scroll-snap-type: y mandatory;
`;

export const YourselfItem = styled(motion.div)`
  position: relative;
  margin: 50px 0;
  scroll-snap-align: start;
`;

export const YourselfImage = styled(motion.div)`
  background-image: url(${({ bgimage }) => bgimage || ''});
  background-position: top center;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  height: 900px;
`;

export const YourselfTitle = styled.h3`
  margin-bottom: 7px;
`;

export const YourselfText = styled.p`
  font-size: 16px;
  border: 1px solid #fff;
  padding: 5px;
  border-radius: 4px;
`;

export const YourselfContent = styled(motion.div)`
  width: 300px;
  padding: 30px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: left;

  position: absolute;
  top: 50%;
  right: 20px;
`;
