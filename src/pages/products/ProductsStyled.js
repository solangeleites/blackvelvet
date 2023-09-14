import { styled } from 'styled-components';

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 70px 0;
  background-color: var(--black);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--black);
  width: 100%;
  height: 100%;
  padding: 30px 0px;
  flex-wrap: wrap;
  flex: 1;
`;

export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
border: 1px solid var(--dark-beige);
border-radius: 10px;
padding: 20px 0px;
height: 400px;
width: 350px;
margin: 0px 0px 50px 0px;
background-color: var(--black);
`;
export const Image = styled.img`
object-fit: cover;
height: 300px;
width: 300px;
border-radius: 10px;
`

export const Title = styled.h2`
font-size: 20px;
color: white;
`
export const Price = styled.p`
font-size: 18px;
color: lightgray;
font-weight: strong;
`