import './Sign.css';

// import the necessary dependencies
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// define a validation schema
const signUpSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid Email Address").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    role: Yup.string().required("Role is required")
});

function Sign() {
    return (
        <>
        <div className="signup-container">
            <h2>Sign Up</h2>
            <Formik
                initialValues={{ name: "", email: "", password: "", role: "" }}
                validationSchema={signUpSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field type="text" name="name" placeholder="Enter your name" />
                            <ErrorMessage name="name" component="div" />
                        </div>
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
                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <Field as="select" name="role">
                                <option value="" disabled>Please select a role</option>
                                <option value="admin">Admin</option>
                                <option value="client">Client</option>
                                <option value="counselor">Counselor</option>
                            </Field>
                            <ErrorMessage name="role" component="div" />
                        </div>
                        <div className="form-actions">
                            <button type="submit" disabled={isSubmitting}>Sign Up</button>
                        </div>
                    </Form>
                )}
            </Formik>
            <div className="links">
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
        </>
    );
}

export default Sign;
