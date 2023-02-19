import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;

    }
    body{
        color: black;
        background-image: url('https://img.freepik.com/free-vector/hand-drawn-international-cat-day-background-with-cat-paws_23-2149454621.jpg?w=2000&t=st=1676818266~exp=1676818866~hmac=263733052903e29ac8d7e54d48d88dc01146710bc49c917115822db9d57bea30');
        background-position: top center;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        font-family:sans-serif ;
        font-size: 20px;
        
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
  padding: 0 15px;
  margin: 0 auto;
`;
