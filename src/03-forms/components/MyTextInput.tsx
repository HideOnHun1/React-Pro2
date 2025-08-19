import { ErrorMessage, useField } from "formik"

interface Props {
    name: string;
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password';
    [x: string]: any; // This allows for additional props to be passed
}

export const MyTextInput =({label, ...props}:Props) => {
    const [field] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field}{...props}/>
            <ErrorMessage name={props.name} component="span" className="error"/>
        </>
    )
}