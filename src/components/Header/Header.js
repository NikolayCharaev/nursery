import React, { useState, useEffect } from 'react';
import { HeaderWrapper, HeaderLogo, HeaderMenu, HeaderItem, HeaderElements } from './headerStyled';
import { Container } from '../../globalStyle';

import { data } from '../../data/HeaderData';
import { headerIcon } from '../../data/HeaderData';

import { motion } from 'framer-motion';

const Header = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log(scroll);
  }, []);

  return (
    <HeaderWrapper
      bgColor={() => {
        if (window.scrollY > 100) {
          return 'rgba(0, 0, 0, 0.8)';
        } else {
          return 'rgba(0, 0, 0, 0.2)';
        }
      }}>
      <Container>
        <HeaderElements>
          <HeaderLogo
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
            {headerIcon}
          </HeaderLogo>
          <HeaderMenu>
            {data.map((item, index) => {
              return (
                <HeaderItem whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} key={index}>
                  {item.icon}
                </HeaderItem>
              );
            })}
          </HeaderMenu>
        </HeaderElements>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
