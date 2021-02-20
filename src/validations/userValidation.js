import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required("Obrigatório"),
  avatar: yup.string().required("Obrigatório"),
  email: yup
    .string()
    .email("E-mail inserido neste formulário está incorreto")
    .required("Obrigatório"),
  birthday: yup.date().required("Obrigatório"),
  gender: yup.boolean().required("Obrigatório"),
  teacher: yup.boolean().required("Obrigatório"),
  password: yup.string().required("Obrigatório"),
});
