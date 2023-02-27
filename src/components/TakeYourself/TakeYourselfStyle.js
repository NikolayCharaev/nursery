import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import Slider from 'react-slick';

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const YourselfWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 1475px) {
    /* grid-template-columns: repeat(1, 1fr); */
    gap: 30px;
    font-size: 13px;
    justify-items: center;

    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 977px) {
    /* font-size: 15px; */
  }
`;

export const YourselfItem = styled.div`
  padding: 20px 10px;
  display: grid !important;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(0, 0, 0, 0.2);
  grid-gap: 20px;

  @media screen and (max-width: 714px) {
    /* grid-template-columns: repeat(1, 1fr); */
  }
`;

export const YourselfImageWrapper = styled.div`
  width: 400px;
  height: 400px;

  @media screen and (max-width: 1475px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 714px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 676px) {
    align-items: center;
    justify-content: flex-start;

    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 564px) {
    width: 150px;
    height: 200px;
  }
`;
export const YourselfImage = styled.img`
  background-image: url(${({ bgimage }) => bgimage || ''});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  background-position: top center;
  outline: none;
  border: none;

  @media screen and (max-width: 714px) {
    width: 250px;
    height: 250px;
  }

  @media screen and (max-width: 676px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 564px) {
    width: 150px;
    height: 150px;
  }
`;

export const YourselfContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  svg {
    width: 20px;
    vertical-align: middle;
    margin-right: 10px;
  }

  @media screen and (max-width: 564px) {
    font-size: 10px;
  }
`;

const defaultStyled = css`
  height: 0;
  margin-bottom: 25px;
`;

export const PetName = styled.p`
  text-align: center;
  ${defaultStyled}
`;

export const PetEyesColor = styled.p`
  ${defaultStyled}
`;
export const PetWoolType = styled.p`
  ${defaultStyled}
  margin-bottom: 140px;

  @media screen and (max-width: 676px) {
    margin-bottom: 50px;
  }
`;

export const PetText = styled.p`
  margin-bottom: 50px;

  @media screen and (max-width: 564px) {
    margin-bottom: 10px;
  }
`;

export const StyledSlider = styled(Slider)`
  padding: 0 15px;
  max-width: 900px;

  @media screen and (max-width: 1475px) {
    font-size: 13px;
    /* max-width: 900px; */
  }
  @media screen and (max-width: 994px) {
    max-width: 800px;
  }
  @media screen and (max-width: 866px) {
    max-width: 700px;
  }
  @media screen and (max-width: 768px) {
    max-width: 600px;
  }
  @media screen and (max-width: 674px) {
    max-width: 500px;
  }

  @media screen and (max-width: 564px) {
    max-width: 400px;
  }
`;

export const YourselfBanner = styled.div`
  background-color: ${({ bgcolor }) => bgcolor || ''};
  /* max-width: 500px; */
  margin-left: 40px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 1475px) {
    max-width: 860px;
    margin-left: 0px;
    display: none;
  }
`;
