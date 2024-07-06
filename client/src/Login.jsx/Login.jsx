import './Login.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email Address").required("Email is required"),
    password: Yup.string().required("Password is required")
});

export function Login() {
    return (
        <>
        <div className="login-container">
            <h2>Login</h2>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post('http://localhost:5000/login', values, { withCredentials: true })
                        .then(response => {
                            console.log(response.data);
                            setSubmitting(false);
                        })
                        .catch(error => {
                            console.error("There was an error!", error);
                            setSubmitting(false);
                        });
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" placeholder="Enter your email address" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" placeholder="Enter your password" />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <div className="form-actions">
                            <button type="submit" disabled={isSubmitting}>Login</button>
                        </div>
                    </Form>
                )}
            </Formik>
            <div className="links">
                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>
        </div>
        </>
    );
}

