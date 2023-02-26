import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

export const Global = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;

    }
   
    body{
        color: white;
        background: -webkit-linear-gradient(90deg, #ae5fab,#9c55a5,#894ba0,#75429a,#5f3a94);
        background: linear-gradient(90deg, #ae5fab,#9c55a5,#894ba0,#75429a,#5f3a94);
        font-family:sans-serif ;
        font-size: 20px;
        
   
    }

  

    h1,h2,h3,h4,h5,h6 {
        padding: 0;
        margin: 0;
    }

    ul,li{
        list-style: none;
    }

    a{ 
        text-decoration: none;
        color: inherit;
    }

`;

export const Container = styled.div`
  max-width: ${({ maxWidth }) => maxWidth || '1400px'};
  height: ${({ height }) => height || ''};
  background-color: ${({ bgcolor }) => bgcolor || ''};
  padding: ${({ p }) => p || 0} 15px;
  margin: 0 auto;
`;

export const Title = styled.h3`
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  margin-bottom: ${({ mb }) => mb || ''};
  margin-top: ${({ mt }) => mt || 'auto'};
  padding-top: ${({ pt }) => pt || 'auto'};
  border-radius: 10px;
  max-width: 600px;
`;

export const Button = styled(motion.button)`
  color: white;
  padding: 20px 50px;
  border: none;
  background-color: ${({ bgcolor }) => bgcolor || ''};
  border-radius: 10px;
  cursor: pointer;
  margin-top: auto;
`;
