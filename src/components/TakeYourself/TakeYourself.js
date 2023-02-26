import React from 'react';
import { Container, Title, Button } from '../../globalStyle';

import {
  YourselfItem,
  YourselfWrapper,
  YourselfImageWrapper,
  YourselfImage,
  YourselfContent,
  YourselfBanner,
  PetName,
  PetEyesColor,
  PetWoolType,
  PetText,
  DogImage,
  CatImage,
  StyledSlider,
} from './TakeYourselfStyle';

import { data, bannerImages } from '../../data/YourselfData';
import { settings } from './TakeYourselfStyle';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TakeYourself = () => {
  return (
    <Container maxWidth="1700px">
      <Title>Я ищу дом</Title>
      <YourselfWrapper>
        <StyledSlider {...settings}>
          {data.map((elem, index) => {
            return (
              <YourselfItem>
                <YourselfImageWrapper>
                  <YourselfImage bgimage={elem.imageUrl} />
                </YourselfImageWrapper>
                <YourselfContent>
                  <PetName>
                    {elem.petName.icon}Имя питомца: {elem.petName.name}
                  </PetName>
                  <PetEyesColor>
                    {elem.colorEyes.icon} Цвет глаз: {elem.colorEyes.color}
                  </PetEyesColor>
                  <PetWoolType>
                    {elem.petCharacter.icon} Характер: {elem.petCharacter.character}
                  </PetWoolType>
                  <PetText>Описание: {elem.text}</PetText>
                  <Button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.8 }}
                    bgcolor="rgba(0,0,0, .4)">
                    Забрать
                  </Button>
                </YourselfContent>
              </YourselfItem>
            );
          })}
        </StyledSlider>
        <YourselfBanner bgcolor={'rgba(0,0,0, .5)'}>
          Дарите любовь и дом бездомным животным! Заберите своего нового друга из приюта сегодня!
          Найдите своего идеального питомца уже сейчас и сделайте свою жизнь и жизнь бездомного
          животного счастливой!
        </YourselfBanner>
      </YourselfWrapper>
    </Container>
  );
};

export default TakeYourself;
