import { ChangeEvent, FormEvent, useState } from 'react';
import { Form, Formik, } from 'formik';
import * as Yup from 'yup';
import { MyCheckBox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {
    
    return (
        <div>
            <h1>Login</h1>
            <hr />
            <Formik 
                initialValues={{
                    username: '',
                    lastName: '',
                    email: '',
                    password: '',
                    repeatPassword: '',
                    jobType: '',
                    terms: false
                }} 
                onSubmit= {(values) => {
                    console.log({values});
                    
                }}
                onReset={() => {
                    console.log('Formuylario reseteado');
                }}
                validationSchema={ Yup.object({
                    username: Yup.string()
                        .min(2, 'Debe tener mas de dos caracteres')
                        .max(15, 'Debe tener menos de 15 caracteres')
                        .required('Este campo es obligatorio'),
                    lastName: Yup.string()
                        .min(2, 'Debe tener mas de dos caracteres')
                        .max(15, 'Debe tener menos de 15 caracteres')
                        .required('Este campo es obligatorio'),
                    email: Yup.string()
                        .email('El correo no es valido')
                        .required('Este campo es obligatorio'),
                    password: Yup.string()
                        .min(6, 'Debe tener mas de 6 caracteres')
                        .max(12, 'Debe tener menos de 12 caracteres')
                        .required('Este campo es obligatorio'),
                        
                    repeatPassword: Yup.string()
                        .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir')
                        .required('Este campo es obligatorio'),
                    jobType: Yup.string()
                        .required('Debe seleccionar una profesion'),
                    terms: Yup.boolean()    
                        .oneOf([true], 'Debe aceptar los terminos y condiciones')
                })
                }>
                
                


                    {({handleReset}) =>(
                        <Form>
                            <MyTextInput label='Nombres' name='username' placeholder='Eduar Esneider'/>
                            <MyTextInput label='Apellidos' name='lastName' placeholder='Fuentes Nieves'/>
                            <MyTextInput label='Correo electronico' name='email' type='email'placeholder='algo@gmail.com' />
                            <MyTextInput label='Contraseña' name='password' type='password'/>
                            <MyTextInput label='Repetir Contraseña' name='repeatPassword' type='password'/>

                            <MySelect label={'Escoja su profesion'} name={'jobType'} placeholder='Seleccione una profesion'>
                                <option value="">Seleccione una profesion</option>
                                <option value="designer">Diseñador</option>
                                <option value="developer-jr">Desarrollador Junior</option>
                                <option value="developer">Desarrollador Senior</option>
                                <option value="product">Product Manager</option>
                                <option value="other">Otro</option>
                            </MySelect>
                            <MyCheckBox label='Terminos y condiciones' name='terms' />
                            <button type='submit'>Enviar</button>
                            <button type='reset' onClick={handleReset}>Limpiar</button>
                        </Form>      
                    )
                    }
                
            </Formik>
        </div>
    )
}