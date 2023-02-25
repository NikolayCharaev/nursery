import React from 'react';

import { Container, Title } from '../../globalStyle';

import {
  YourselfItem,
  YourselfWrapper,
  YourselfImageWrapper,
  YourselfImage,
  YourselfContent,
  PetName,
  PetEyesColor,
  PetWoolType,
} from './TakeYourselfStyle';


import { data } from '../../data/YourselfData';


const TakeYourself = () => {
  return (
    <Container>
      <Title>Я ищу дом</Title>
      <YourselfWrapper>
        {data.map((elem, index) => {
        return  <YourselfItem>
            <YourselfImageWrapper>
              <YourselfImage bgimage={elem.imageUrl}/>
            </YourselfImageWrapper>
            <YourselfContent>
              <PetName></PetName>
              <PetEyesColor></PetEyesColor>
              <PetWoolType></PetWoolType>
            </YourselfContent>
          </YourselfItem>;
        })}
      </YourselfWrapper>
    </Container>
  );
};

export default TakeYourself;
