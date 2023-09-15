import * as Yup from 'yup';
const phoneRegex = /\d{10}$/;

export const FormValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  email: Yup.string().email('Correo inválido').required('Campo requerido'),
  phone: Yup.string()
    .matches(phoneRegex, 'Telefono inválido')
    .required('Campo requerido'),
  msg: Yup.string()
    .max(500, 'Máximo de 500 caracteres').required('Campo requerido'),
});