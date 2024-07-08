// import React from 'react';
// import { useAuth } from '../Authentication/authentication';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import './Sign.css'


// const Sign = () => {
//     const { register } = useAuth();

//     const initialValues = {
//         name: '',
//         email: '',
//         password: '',
//         role: ''
//     };

//     const validationSchema = Yup.object({
//         name: Yup.string().required('Name is required'),
//         email: Yup.string().email('Invalid email format').required('Email is required'),
//         password: Yup.string().min(6, 'Password should be at least 6 characters').required('Password is required'),
//         role: Yup.string().required('Role is required')
//     });

//     const onSubmit = (values, { setSubmitting, resetForm }) => {
//         register(values.name, values.email, values.password, values.role);
//         setSubmitting(false);
//         resetForm();
//     };

//     return (
//         <div>
//             <h1>Register</h1>
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 onSubmit={onSubmit}
//             >
//                 {({ isSubmitting }) => (
//                     <Form>
//                         <div>
//                             <label htmlFor="name">Name</label>
//                             <Field type="text" name="name" />
//                             <ErrorMessage name="name" component="div" />
//                         </div>

//                         <div>
//                             <label htmlFor="email">Email</label>
//                             <Field type="email" name="email" />
//                             <ErrorMessage name="email" component="div" />
//                         </div>

//                         <div>
//                             <label htmlFor="password">Password</label>
//                             <Field type="password" name="password" />
//                             <ErrorMessage name="password" component="div" />
//                         </div>

//                         <div>
//                             <label htmlFor="role">Role</label>
//                             <Field type="text" name="role" />
//                             <ErrorMessage name="role" component="div" />
//                         </div>

//                         <button type="submit" disabled={isSubmitting}>Register</button>
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     );
// };

// export default Sign;


import './Sign.css'
import axios from 'axios';
import { useAuth } from '../Authentication/authentication';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const signUpSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid Email Address").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    role: Yup.string().required("Role is required")
});

function Sign() {
    const { register } = useAuth();
    
        const onSubmit = (values, { setSubmitting, resetForm }) => {
        register(values.name, values.email, values.password, values.role);
        setSubmitting(false);
        resetForm();
    };
    return (
        <>
        <div className="signup-container">
            <h2>Sign Up</h2>
            <Formik
                initialValues={{ name: "", email: "", password: "", role: "" }}
                validationSchema={signUpSchema}
                onSubmit={onSubmit}
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
                                <option value="" disabled >Please select a role</option>
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
