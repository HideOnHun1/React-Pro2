import { ChangeEvent, FormEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {
    
    const { register, onChange, setRegister, onSubmit, username, email, password, repeatPassword, resetForm, isValidEmail } = useForm(
    {
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    });
    return (
        <div>
            <h1>RegisterPage</h1>
            <hr />
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name='username'
                    placeholder="Username"
                    value={username}
                    onChange={onChange}
                    className= {`${username.trim().length <= 0 && 'has-error'}`}
                />
                {username.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                <input
                    type="eamil"
                    name='email'
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                    className= {`${!isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && email.trim().length > 0 && <span>Email no valido</span>}
                {email.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                <input
                    type="password"
                    name='password'
                    placeholder="Password"
                    value={password}
                    onChange={onChange}
                    className= {`${password.trim().length < 6 && password.trim().length >0 && 'has-error'}`}
                />
                {password.trim().length <= 0 && <span>Este campo es obligatorio</span> }
                {password.trim().length < 6 && password.trim().length >0 &&  <span>El password debe tener mas de 6 caracteres</span>}
                <input
                    type="password"
                    name='repeatPassword'
                    placeholder="Repeat Password"
                    value={repeatPassword}
                    onChange={onChange}
                />
                {repeatPassword.trim().length <= 0 && <span>Este campo es obligatorio</span> }
                {repeatPassword.trim().length > 0 && password !== repeatPassword &&  <span>No coinciden</span>}
                <button type="submit" >Create</button>
                <button type='button' onClick={resetForm}>Reset Form</button>
                
            </form>
        </div>
    )
}