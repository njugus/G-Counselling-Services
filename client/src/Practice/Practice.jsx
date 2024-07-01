import React from 'react';
import './Practice.css';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

//create a validation schema
const practiceSchema = Yup.object().shape({
    name : Yup.string().required("Name is required"),
    email : Yup.string().email().required("Email is required"),
    password : Yup.string().min(6, "Password should be atleast 6 characters").required("Password is required"),
    role : Yup.string().required("Role is required")
})

function PracticeForm() {
    return (
        <div className="form-container">
            <h2>Practice Form</h2>
            <Formik initialValues={ {name : "", email : "", password : "", role : "" }} 
            validationSchema={practiceSchema}
            onSubmit={(values, { setSubmitting}) => {
            console.log(values);
            setSubmitting(false);//submission is complete
        }}>
            {/* {({ isSubmitting }) => {  */}
            <Form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field type="text"  name="name" placeholder="Enter your name" />
                    <ErrorMessage name='name' component="div"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" placeholder="Enter your email"  />
                    <ErrorMessage name='email' component="div"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" placeholder="Enter your password" />
                    <ErrorMessage name='password' component="div"/>
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <Field as ="select" name="role">
                        <option value="" disabled>Please select a role</option>
                        <option value="admin">Admin</option>
                        <option value="client">Client</option>
                        <option value="counselor">Counselor</option>
                    </Field>
                    <ErrorMessage name='role' component="div"/>
                </div>
                <div className="form-actions">
                    <button type="submit" >Submit</button>
                </div>
            </Form> 
            {/* }} */}
            </Formik>
        </div>
        
        
    );
}

export default PracticeForm;
