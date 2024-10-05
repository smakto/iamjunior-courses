import { NavLink, useNavigate } from "react-router-dom";
import styles from "./registerPage.module.scss";
import { useState } from "react";
import { User } from "../../types/types-user";
import axios from "axios";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

type RegisterFormValues = {
  name: string;
  email: string;
  age: string;
  password: string;
  passwordConfirmation: string;
};

const registerValidationSchema = Yup.object().shape({
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

const initialValues: RegisterFormValues = {
  name: "",
  email: "",
  age: "",
  password: "",
  passwordConfirmation: "",
};

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();

  async function handleSubmit(values: RegisterFormValues) {
    const { passwordConfirmation, ...submittedValues } = values;
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        submittedValues
      );
      navigate("/login");
    } catch (error) {
      console.error("Error during user registration:", error);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" placeholder="Enter user name" />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.errorMsg}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" placeholder="Enter email" />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.errorMsg}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="age">Age</label>
            <Field type="number" name="age" placeholder="Enter user age" />
            <ErrorMessage
              name="age"
              component="div"
              className={styles.errorMsg}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.errorMsg}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Confirm Password</label>
            <Field
              type="password"
              name="passwordConfirmation"
              placeholder="Confirm password"
            />
            <ErrorMessage
              name="passwordConfirmation"
              component="div"
              className={styles.errorMsg}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.registerButton}
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export const RegisterPage: React.FC = () => {
  return <RegisterForm />;
};

// Initial without formik / yup
// export const RegisterPage: React.FC = () => {
//   const [passwordsMatch, setPasswordsMatch] = useState<Boolean>(true);
//   const [userToRegister, setUserToRegister] = useState<User>({
//     name: "",
//     email: "",
//     age: 0,
//     password: "",
//   });

//   function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
//     const { name, value } = event.target;

//     setUserToRegister((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   }

//   function checkPasswords(event: React.ChangeEvent<HTMLInputElement>) {
//     if (event.target.value === userToRegister.password) {
//       setPasswordsMatch(true);
//     } else setPasswordsMatch(false);
//   }

//   async function handleSubmit(event: React.FormEvent) {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/auth/register",
//         userToRegister
//       );
//     } catch (error) {
//       console.error("Error during user registration:", error);
//     }
//   }

//   return (
//     <div className={styles.registerContainer}>
//       <div className={styles.registerBox}>
//         <h2>Register</h2>
//         <form onSubmit={handleSubmit}>
//           <div className={styles.inputGroup}>
//             <label>Name</label>
//             <input
//               type="name"
//               name="name"
//               value={userToRegister.name}
//               placeholder="Enter user name"
//               onChange={handleInput}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={userToRegister.email}
//               placeholder="Enter email"
//               onChange={handleInput}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Age</label>
//             <input
//               type="number"
//               name="age"
//               value={userToRegister.age}
//               placeholder="Enter user age"
//               onChange={handleInput}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={userToRegister.password}
//               placeholder="Enter password"
//               onChange={handleInput}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Confirm Password</label>
//             <input
//               type="password"
//               name="passwordConfirm"
//               placeholder="Confirm password"
//               onBlur={checkPasswords}
//               style={{ borderColor: passwordsMatch ? "black" : "red" }}
//             />
//           </div>
//           <button type="submit" className={styles.registerButton}>
//             Register
//           </button>
//         </form>
//         <p className={styles.loginLink}>
//           Already have an account? <NavLink to="/login">Login here</NavLink>
//         </p>
//       </div>
//     </div>
//   );
// };
