import { Formik, Form,} from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput, MyCheckBox, MySelect } from '../components';



export const FormikAbstract = () => {

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
                        .notOneOf(['development'], 'You must select a job type')
                        .required('Required')

                })}
                >

                {(formik) => (
                        <Form>
                            <MyTextInput label='First Name' name='firstName'/>
                            <MyTextInput label='Last Name' name='lastName'/>
                            <MyTextInput label='Email' name='email' type='email'/>

                            <MySelect label='Job Type' name='jobType'>
                                <option value="">Select a job</option>
                                <option value="designer">Designer</option>
                                <option value="development">Developer</option>
                                <option value="product">Product Manager</option>
                                <option value="other">Other</option>
                            </MySelect>
                            <MyCheckBox name={'terms'} label={'Terms and conditions'} />

                            <button type='submit'>Submit</button>
                        </Form>
                )
                }
            </Formik>


            
        </div>
    )
    
}