import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Per trumpas!")
    .max(50, "Per ilgas!")
    .required("Privalomas laukelis"),
  email: Yup.string()
    .email("Netinkamas el. paštas")
    .required("Privalomas laukelis"),
  age: Yup.number()
    .typeError("Amžius turi būti skaičius")
    .min(18, "Amžius turi būti bent 18 metų")
    .max(120, "Amžius negali viršyti 120 metų")
    .required("Įveskite amžių"),
  password: Yup.string()
    .min(8, "Slaptažodis per trumpas - minimalus ilgis yra 8 simboliai")
    .required("Privalomas laukelis"),
  passwordConfirmation: Yup.string()
    .required("Privalomas laukelis")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Įveskite el.paštą")
    .required("Privalomas laukelis"),
  password: Yup.string().required("Privalomas laukelis"),
});
