import { useNavigate } from "react-router-dom";
import styles from "./registerPage.module.scss";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterFormValues } from "../types";
import { registerValidationSchema } from "../schemas";
import { useCreateUser } from "../../../hooks/useCreateUser";

const initialValues: RegisterFormValues = {
  name: "",
  email: "",
  age: 0,
  password: "",
  passwordConfirmation: "",
};

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { mutate } = useCreateUser();

  function handleSubmit(values: RegisterFormValues) {
    const { passwordConfirmation, ...submittedValues } = values;

    mutate(submittedValues, {
      onSuccess: () => {
        navigate("/login");
      },
      onError: (error) => {
        console.error("Error during user registration:", error);
      },
    });
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
