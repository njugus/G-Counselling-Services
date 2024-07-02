import React from "react"
import './Practice.css';
import * as Yup from 'yup'
import { Formik, Form , Field, ErrorMessage } from 'formik'

const practiceSchema = Yup.object().shape({
    name : Yup.string().required("Email is required"),
    email : Yup.string().email("Invalid email address").required('Email is required'),
    password : Yup.string().min(6, "The password should be atleast 6 characters").required("Password is required"),
    role : Yup.string().required("Role is required")
})
function PracticeForm () {
    return (
        <Formik  
           initialValues={{ name: '', email: '', password: '' }}
        validationSchema={practiceSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
        >
            { ({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field name = "name"  type = "text"/>
                        <ErrorMessage name="name" component="div"/>
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name = "email"  type = "email"/>
                        <ErrorMessage name="email" component="div"/>
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <Field name = "password"  type = "password"/>
                        <ErrorMessage name="password" component="div"/>
                    </div>
                    <div>
                        <button onClick={Formik.onSubmit} type="submit" disabled = {isSubmitting}>Submit</button>
                    </div>
                </Form>
            )}

        </Formik>
    )
}

export default PracticeForm;