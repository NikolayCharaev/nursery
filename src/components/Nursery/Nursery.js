import React, { useEffect } from 'react';
import { aboutNursery } from '../../data/NurseryData';
import { Container } from '../../globalStyle';

import { animateCard, animateImg, textItemsContainer, textItem } from './NurseryAnimate';

import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  NurseryWrapper,
  NurseryImg,
  NurseryContent,
  NurseryTitle,
  NurseryText,
  NurseryTextWrapper,
  NurseryMask
} from './nurserySlyled';

const Nursery = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <Container maxWidth="1700px">
      <NurseryWrapper >
        <NurseryImg
          image="https://proza.ru/pics/2016/11/23/1463.jpg"
          initial="hidden"
          animate={control}
          variants={animateImg}
          transition={{ duration: 0.5, type: 'spring' }}
          ref={ref}
        />
        <NurseryMask/>
        <NurseryContent
          initial="hidden"
          animate={control}
          ref={ref}
          variants={animateCard}
          transition={{ duration: 0.5, type: 'tween' }}
          >
          <NurseryTitle>О питомнике</NurseryTitle>
          <NurseryTextWrapper animate={control} variants={textItemsContainer} initial="hidden">
            {aboutNursery.map((item, index) => {
              return (
                <NurseryText key={index} variants={textItem}>
                  {item.text}
                </NurseryText>
              );
            })}
          </NurseryTextWrapper>
        </NurseryContent>
      </NurseryWrapper>
    </Container>
  );
};

export default Nursery;
