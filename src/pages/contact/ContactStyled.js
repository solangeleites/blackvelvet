import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { tablet } from '../../queries/MediaQueries';

export const SectionStyled = styled.section`
  background-color: var(--black);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${tablet} {
    flex-direction: column;
  }
`;

export const TitleStyled = styled.h2`
  display: flex;
  top: 0;
  font-size: 18px;
  font-weight: 400;
  color: var(--dark-beige);
  z-index: 1;
`;

export const Image = styled.img`
  display: flex;
  height: 600px;
  width: 700px;
  object-fit: cover;
  position: relative;

  ${tablet} {
    display: none;
  }
`;
export const ContainerForm = styled(Formik)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Formulario = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 600px;
`;
