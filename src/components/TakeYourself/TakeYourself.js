import React from 'react';

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

const TakeYourself = () => {
  console.log(data);
  return (
    <Container  maxWidth="100%" bgColor={'rgba(0,0,0,0.2);'} p="40px">
      <Title mb="20px">Забери меня</Title>

      <Container>
        <YourselfWrapper>
          {data
            .sort(() => Math.random() - 0.5)
            .map((elem, index) => {
              return (
                <YourselfItem key={index}>
                  <YourselfImage bgImage={elem.imageUrl} />
                  <YourselfContent>
                    <YourselfTitle>{elem.title}</YourselfTitle>
                    <YourselfText>{elem.text}</YourselfText>
                  </YourselfContent>
                </YourselfItem>
              );
            })}
        </YourselfWrapper>
      </Container>
    </Container>
  );
};

export default TakeYourself;
