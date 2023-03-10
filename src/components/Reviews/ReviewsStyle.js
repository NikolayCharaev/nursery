import styled, { css } from 'styled-components';

import { motion } from 'framer-motion';

export const ReviewsWrapper = styled.div`
  width: 100%;
  height: 600px;
  scroll-snap-type: y mandatory;
  margin-bottom: 100px;
  border-radius: 10px;

  overflow: scroll;

  @media screen and (max-width: 998px) {
    height: 400px;
  }

  @media screen and (max-width: 562px) {
    height: 350px;
  }

  @media screen and (max-width: 509px) {
    height: 250px;
  }
`;

const bgStyles = css`
  background-image: url(${({ bgimage }) => bgimage || ''});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
`;

const positionStyles = css`
  position: absolute;
  top: 50%;
  left: 35%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export const ReviewsItem = styled.div`
  scroll-snap-align: center;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReviewBlur = styled(motion.img)`
  ${bgStyles}
  width: 100%;
  filter: blur(10px);
  display: block;
  height: 600px;
`;

export const ReviewsImage = styled.img`
  width: 400px;
  height: 400px;
  position: relative;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: 1390px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 883px) {
    width: 250px;
    height: 250px;
  }


  @media screen and (max-width: 694px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 509px) {
    width: 150px;
    height: 150px;
  }
`;

export const ReviewsInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 15px;
  width: 400px;
  height: 400px;
  overflow: scroll;

  @media screen and (max-width: 1390px) {
    width: 300px;
    height: 300px;

    font-size: 15px;
  }

  @media screen and (max-width: 883px) {
    width: 250px;
    height: 250px;
  }

  @media screen and (max-width: 694px) {
    width: 200px;
    height: 200px;
    font-size: 13px;
  }


  @media screen and (max-width: 509px) {
    width: 150px;
    height: 150px;
    font-size: 10px;
  }
`;

export const ReviewsContent = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 18%;
  left: 23%;
  gap: 20px;



  @media screen and (max-width: 998px) {
    left: 20%;
  }

  @media screen and (max-width: 998px) {
    left: 17%;
  }

  @media screen and (max-width: 562px) {
    left: 10%;
  }

  @media screen and (max-width: 509px) {
    left: 12%;
    gap: 10px;
  }

  @media screen and (max-width: 509px) {
    left: 15%;
  }

  @media screen and (max-width: 423px) {
    left: 12%;
  }
  @media screen and (max-width: 396px) {
    left: 6%;
  }

`;

// export const ReviewsImages = styled.div``;

export const HumanName = styled.div`
  margin: 10px 0 20px;
  font-weight: 700;
  text-align: center;



  @media screen and (max-width: 694px) {
    margin-top: 5px;
   margin-bottom: 10px;
  }
`;

export const ReviewText = styled.div`
  line-height: 1.3;
`;
