import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';


export const FormikComponents = () => {

    return (
        <div>
            <h1> Formik Components</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values)=> {
                    console.log({values});
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(10, 'Must be 10 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    terms: Yup.boolean()
                        .oneOf([true], 'You must accept the terms and conditions'),
                    jobType: Yup.string()
                        .notOneOf(['developer'], 'You must select a job type')
                        .required('Required')

                })}
                >

                {(formik) => (
                        <Form>
                            <label htmlFor="firstName">firstName</label>
                            <Field name="firstName" type="text" placeholder="firstName "/>
                            <ErrorMessage name="firstName" component="span"/>
                            
                            <label htmlFor="lastName">lastName</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" component="span"/>

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" />
                            <ErrorMessage name="email" component="span"/>

                            <label>Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="">Select a job type</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="manager">Manager</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span"/>
                
                            <label>
                                <Field name="terms" type="checkbox" />
                                Terms and conditions
                            </label>
                            <ErrorMessage name="terms" component="span"/>

                            <button type='submit'>Submit</button>
                        </Form>
                )
                }
            </Formik>


            
        </div>
    )
    
}