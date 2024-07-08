import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../Authentication/authentication';
import { useNavigate } from 'react-router-dom';
import './Login.css'
const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

 const Login = () => {
    const { login, loading } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <h2>Login</h2>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={async (values, { setSubmitting, setErrors }) => {
                    try {
                        await login(values.email, values.password);
                        console.log('Login successful');
                        navigate('/'); 
                    } catch (error) {
                        console.error('Login error:', error);
                        setErrors({ server: 'Invalid email or password' });
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting, errors }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                className={`form-control ${errors.email && 'is-invalid'}`}
                            />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className={`form-control ${errors.password && 'is-invalid'}`}
                            />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        {errors.server && <div className="error">{errors.server}</div>}
                        <div className="form-actions">
                            <button type="submit" className="btn" disabled={isSubmitting || loading}>
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            <div className="links">
                <p>
                    Don't have an account? <a href="/signup">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;




// import './Login.css';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useAuth } from '../Authentication/authentication';

// const loginSchema = Yup.object().shape({
//     email: Yup.string().email("Invalid Email Address").required("Email is required"),
//     password: Yup.string().required("Password is required")
// });

// export function Login() {
//     const { login, loading } = useAuth();

//     return (
//         <div className="login-container">
//             <h2>Login</h2>
//             <Formik
//                 initialValues={{ email: "", password: "" }}
//                 validationSchema={loginSchema}
//                 onSubmit={(values, { setSubmitting, setErrors }) => {
//                     console.log('Form values:', values); 
//                     login(values.email, values.password)
//                         .then(() => {
//                             console.log('Login successful');  
//                             setSubmitting(false);
//                         })
//                         .catch((error) => {
//                             console.error('Login error:', error);  
//                             setErrors({ server: 'Invalid email or password' });
//                             setSubmitting(false);
//                         });
//                 }}
//             >
//                 {({ isSubmitting, errors }) => (
//                     <Form>
//                         <div className="form-group">
//                             <label htmlFor="email">Email</label>
//                             <Field type="email" name="email" placeholder="Enter your email address" />
//                             <ErrorMessage name="email" component="div" />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="password">Password</label>
//                             <Field type="password" name="password" placeholder="Enter your password" />
//                             <ErrorMessage name="password" component="div" />
//                         </div>
//                         {errors.server && <div className="error">{errors.server}</div>}
//                         <div className="form-actions">
//                             <button type="submit" disabled={isSubmitting || loading}>Login</button>
//                         </div>
//                     </Form>
//                 )}
//             </Formik>
//             <div className="links">
//                 <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//             </div>
//         </div>
//     );
// }
