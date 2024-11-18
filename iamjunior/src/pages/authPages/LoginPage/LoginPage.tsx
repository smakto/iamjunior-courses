import { NavLink, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useLoginStore } from "./useLoginStore";
import { routes } from "../../../router/router";
import axios from "axios";
import { LoginFormValues } from "../types";
import { loginValidationSchema } from "../schemas";

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

export const LoginPage: React.FC = () => {
  const { logIn } = useLoginStore();
  const navigate = useNavigate();

  async function handleLogin(values: LoginFormValues) {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        values
      );
      const { token, user } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("loggedUserInfo", JSON.stringify(user));
      logIn({ name: user.name, email: user.email });
      navigate(routes.home);
    } catch (error) {
      console.error({ message: "Login failed.", error });
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={handleLogin}
    >
      {({ isSubmitting }) => (
        <div className={styles.loginContainer}>
          <div className={styles.loginBox}>
            <h2>Login</h2>
            <Form>
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
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.loginButton}
              >
                Login
              </button>
            </Form>

            <p className={styles.registerLink}>
              Don't have an account?
              <NavLink to={routes.register}>Register here</NavLink>
            </p>
          </div>
        </div>
      )}
    </Formik>
  );
};
