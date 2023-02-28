import styled, { css } from 'styled-components';

import { motion } from 'framer-motion';

export const ReviewsWrapper = styled.div`
  width: 100%;
  /* height: 600px; */
  /* height: 80vh; */
  scroll-snap-type: y mandatory;
  margin-bottom: 100px;
  border-radius: 10px;

  overflow: scroll;
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
  /* height: 600px; */

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
`;

export const ReviewsContent = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  /* position: relative; */
  top: 18%;
  left: 23%;

  gap: 20px;
`;

export const ReviewsInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 15px;
  width: 400px;
  height: 400px;
  overflow: scroll;
`;

// export const ReviewsImages = styled.div``;

export const HumanName = styled.div`
    margin: 10px 0 50px;
    font-weight: 700;
    text-align: center;
`;

export const ReviewText = styled.div`
    line-height: 1.3;
`;
