import '../styles/styles.css';
import { FormikErrors, useFormik } from 'formik';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikPageBasic = () => {


    const validate = (values:FormValues) => {
        const errors: FormikErrors<FormValues> = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (values.firstName.length >= 15) {
            errors.firstName = 'Must be 15 characters or less';
        }
        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (values.lastName.length >= 10) {
            errors.lastName = 'Must be 10 characters or less';
        }
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        return errors; 
    }
    const {handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log({values});
        },
        validate: validate
    })


    return (
        <div>
            <h1> Formik basic</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">firstName</label>
                <input
                    type="text"
                    name='firstName'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                > 
                </input>
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
                <label htmlFor="firstName">lastName</label>
                <input
                    type="text"
                    name='lastName'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                > 
                </input>
                {touched.lastName &&errors.lastName && <span>{errors.lastName}</span>}
                <label htmlFor="firstName">Email</label>
                <input
                    type="email"
                    name='email'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                > 
                </input>
                {touched.email && errors.email && <span>{errors.email}</span>}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
    
}