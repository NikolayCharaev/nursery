import React, { useEffect } from 'react';
import { data } from '../../data/AdvantagesData';
import {
  AdvantagesWrapper,
  AdvantagesItem,
  AdvantagesIcon,
  AdvantagesTitle,
  AdvantagesSubtitle,
  AdvantagesImageTop,
  AdvantagesTopWrapper,
} from './AdvantagesStyles';

import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import * as animationList from './AdvantagesAnimation';

import { Container, Title } from '../../globalStyle';

const Advantages = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [inView, control]);
  return (
    <Container>
      <AdvantagesTopWrapper>
        <AdvantagesImageTop animate={control} variants={animationList.animateImg} bgImage={'https://koshka.top/uploads/posts/2021-12/1638771511_1-koshka-top-p-milogo-kotika-v-shapochke-1.jpg'}/>
        <Title ref={ref} initial="hidden" animate={control} variants={animationList.titleAnimation}>
          Преимущества
        </Title>
      </AdvantagesTopWrapper>

      <AdvantagesWrapper initial='hidden' animate={control} variants={animationList.itemsContainer}>
        {data.map((elem, index) => {
          return (
            <AdvantagesItem
              key={elem.id}
              variants={animationList.itemAnimation}>
              <AdvantagesIcon >{elem.icon}</AdvantagesIcon>
              <AdvantagesTitle>{elem.title}</AdvantagesTitle>
              <AdvantagesSubtitle>{elem.subtitle}</AdvantagesSubtitle>
            </AdvantagesItem>
          );
        })}
      </AdvantagesWrapper>
    </Container>
  );
};

export default Advantages;
