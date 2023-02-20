import React, {useEffect} from 'react';
import { data } from '../../data/AdvantagesData';
import {
  AdvantagesWrapper,
  AdvantagesItem,
  AdvantagesIcon,
  AdvantagesTitle,
  AdvantagesSubtitle,
} from './AdvantagesStyles';

import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import * as animationList from  './AdvantagesAnimation'


import { Container, Title } from '../../globalStyle';

const Advantages = () => {
  const control = useAnimation()
  const [ref,inView] = useInView()


useEffect(() => { 
    if (inView) { 
      control.start('visible')
      console.log(control)
    }else { 
      control.start('hidden')
    }

}, [inView, control])
  return (
    <Container>
      <Title ref={ref} initial='hidden' animate={control} variants={animationList.titleAnimation}>Преимущества</Title>
      <AdvantagesWrapper>
        {data.map((elem,index) => { 
          return <AdvantagesItem key={elem.id}> 
            <AdvantagesIcon>{elem.icon}</AdvantagesIcon>
            <AdvantagesTitle>{elem.title}</AdvantagesTitle>
            <AdvantagesSubtitle>{elem.subtitle}</AdvantagesSubtitle>
          </AdvantagesItem>
        })}
      </AdvantagesWrapper>
    </Container>
  );
};

export default Advantages;
