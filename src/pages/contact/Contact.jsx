import React from 'react';
import { Image, SectionStyled, TitleStyled, ContainerForm, Formulario } from './ContactStyled';
import { FormInitialValues } from '../../formik/initialValues';
import { FormValidationSchema } from '../../formik/ValidationSchema';
import {Input} from '../../components/UI/input/Input'
import {Button} from '../../components/UI/button/Button'
import {TextArea} from '../../components/UI/textarea/TextArea'



const Contact = () => {
  return (
    <SectionStyled>
        <Image src='/assets/contact.jpg'></Image>

        <ContainerForm
          initialValues={FormInitialValues}
          validationSchema={FormValidationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log({ values });
            resetForm();
          }}
        >
          {({ touched, errors }) => (
            <Formulario>
              <Input
                name="name"
                label="Nombre"
                type="text"
                isError={touched.name && errors.name}
              ></Input>
              <Input
                name="email"
                label="Correo Electronico"
                type="email"
                isError={touched.email && errors.email}
              ></Input>
              <Input
                name="phone"
                label="Telefono"
                type="tel"
                isError={touched.phone && errors.phone}
              ></Input>
              <TextArea
                name="msg"
                label="Mensaje"
                isError={touched.msg && errors.msg}
              />
              <Button />
            </Formulario>
          )}
        </ContainerForm>
    </SectionStyled>
  );
};

export default Contact;
