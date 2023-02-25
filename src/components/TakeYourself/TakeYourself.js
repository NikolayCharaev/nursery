import React, { useRef } from 'react';

import { Container, Title } from '../../globalStyle';
import {
  YourselfWrapper,
  YourselfImage,
  YourselfItem,
  YourselfTitle,
  YourselfText,
  YourselfContent,
} from './TakeYourselfStyle';

import { data } from '../../data/YourselfData';

import { useScroll, useTransform } from 'framer-motion';

const TakeYourself = () => {
  function Parallax({ elem }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    console.log(scrollYProgress);
    return (
      <YourselfItem>
        <YourselfImage bgimage={elem.imageUrl} ref={ref} />
        <YourselfContent style={{ y }}>
          <YourselfTitle>{elem.title}</YourselfTitle>
          <YourselfText>{elem.text}</YourselfText>
        </YourselfContent>
      </YourselfItem>
    );
  }
  return (
    <Container maxWidth="100%" bgcolor={'rgba(0,0,0,0.2);'} p="40px">
      <Title mb="20px">Забери меня</Title>
      <Container>
        <YourselfWrapper>
          {data
            .sort(() => Math.random() - 0.5)
            .map((elem, index) => {
              return <Parallax elem={elem} key={index} />;
            })}
        </YourselfWrapper>
      </Container>
    </Container>
  );
};

export default TakeYourself;
