import styled from 'styled-components';
import {motion} from 'framer-motion'

export const NurseryWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin-top: 300px;
margin-bottom: 1500px;

`;

export const NurseryImg = styled(motion.img)`
  background-image: url(${({ image }) => image});
  width: 700px;
  height: 700px;
  background-size: cover;
  background-position: top center;
  border-radius: 20px;
  animation: animate  3s infinite ease;
  margin-right: 150px;

@keyframes animate {
    0%{ 
        transform: rotate(0deg);
    }
    50%{ 
        transform: rotate(10deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
`;

export const NurseryContent = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
    /* width: 40%; */
    width: 600px;
    padding: 10px;
    max-height: 930px;
    overflow: scroll;
    border-radius: 10px;
    margin-right: auto;
`;

export const NurseryTitle = styled(motion.h1)`
    font-size: 30px;
    text-align: center;
    margin-bottom: 40px;
`

export const NurseryText = styled(motion.p)`
    margin-bottom: 20px;

`
export const NurseryTextWrapper = styled(motion.div)`
font-size: 20px;

`