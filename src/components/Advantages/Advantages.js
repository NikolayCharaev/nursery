import React, { useEffect, useState, useRef } from 'react';
import { data } from '../../data/AdvantagesData';
import {
  AdvantagesWrapper,
  AdvantagesItem,
  AdvantagesIcon,
  AdvantagesTitle,
  AdvantagesSubtitle,
  AdvantagesImageTop,
  AdvantagesTopWrapper,
  AdvantagesImagesWrapper,
} from './AdvantagesStyles';

import { useAnimation, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import * as animationList from './AdvantagesAnimation';

import { Container, Title } from '../../globalStyle';

const Advantages = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const visibleBlock = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      control.start('visible');
      console.log(inView);
      setVisible(true);
    } else {
      control.start('hidden');
    }
  }, [inView, control]);
  return (
    <Container>
      <AdvantagesTopWrapper>
        <AdvantagesImagesWrapper>
          <AdvantagesImageTop
            animate={control}
            variants={animationList.animateImgReverse}
            setbg={
              'https://gisher.org/gallery/oboi-rabochego-stola-a6/sobachka-i10449.jpg'
            }/>
          <AdvantagesImageTop
            animate={control}
            variants={animationList.animateImg}
            setbg={
              'https://koshka.top/uploads/posts/2021-12/1638771511_1-koshka-top-p-milogo-kotika-v-shapochke-1.jpg'
            }
          />
        </AdvantagesImagesWrapper>
        <Title ref={ref} initial="hidden" animate={control} variants={animationList.titleAnimation}>
          Преимущества
        </Title>
      </AdvantagesTopWrapper>

      <AdvantagesWrapper
        animate={visible ? '' : control}
        variants={animationList.itemsContainer}
        ref={visibleBlock}>
        {data.map((elem, index) => {
          return (
            <AdvantagesItem
              whileHover={{ scale: 1.02 }}
              key={elem.id}
              variants={animationList.itemAnimation}>
              <AdvantagesIcon>{elem.icon}</AdvantagesIcon>
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
