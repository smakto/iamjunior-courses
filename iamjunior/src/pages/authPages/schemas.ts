import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Per trumpas!")
    .max(50, "Per ilgas!")
    .required("Privalomas laukelis"),
  email: Yup.string()
    .email("Netinkamas el. paštas")
    .required("Privalomas laukelis"),
  age: Yup.string()
    .matches(/^[0-9]+$/)
    .typeError("Amžius turi būti skaičius")
    .required("Įveskite amžių")
    .test("min-age", "Amžius turi būti bent 18 metų.", (value: string) => {
      const minAge = parseInt(value, 10);
      return minAge >= 18;
    })
    .test(
      "max-age",
      "Amžius turi būti ne daugiau, nei 120 metų.",
      (value: string) => {
        const maxAge = parseInt(value, 10);
        return maxAge <= 120;
      }
    ),
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
