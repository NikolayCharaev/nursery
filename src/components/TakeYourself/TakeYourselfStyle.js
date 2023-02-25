import styled from 'styled-components';
import { motion } from 'framer-motion';

export const YourselfWrapper = styled.div`
  margin-top: 50px;
`;

export const YourselfItem = styled.div``;

export const YourselfImageWrapper = styled.div``;
export const YourselfImage = styled.img`
  background-image: url(${({bgimage}) => bgimage || ''});
  background-repeat: no-repeat;
  background-size: cover;
  width: 300px;
  height: 300px;
  background-position: top center;
`;

export const YourselfContent = styled.div``;

export const PetName = styled.p``;

export const PetEyesColor = styled.p``;
export const PetWoolType = styled.p``;
