import React, { useRef } from 'react';
import { Container, Title } from '../../globalStyle';

import { data } from '../../data/ReviewsData';

import { useScroll, useTransform } from 'framer-motion';

import {
  ReviewsWrapper,
  ReviewsItem,
  ReviewsContent,
  HumanName,
  ReviewText,
  ReviewsInfo,
  ReviewsImage,
  ReviewBlur,
  ReviewsImages,
} from './ReviewsStyle';

function Parallax({ item, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <ReviewsItem key={index} ref={ref} >
      <ReviewBlur bgimage={item.imageUrl} />
      <ReviewsContent >
        <ReviewsImage src={item.imageUrl} />
        <ReviewsInfo>
          <HumanName>{item.humanName}</HumanName>
          <ReviewText>{item.text}</ReviewText>
        </ReviewsInfo>
      </ReviewsContent>
    </ReviewsItem>
  );
}

const Reviews = () => {

  return (
    <Container maxWidth="1700px">
      <Title mb="30px">Отзывы</Title>
      <ReviewsWrapper >
        {data.map((item, index) => (
          <Parallax item={item} key={index} />
        ))}
      </ReviewsWrapper>
    </Container>
  );
};

export default Reviews;
