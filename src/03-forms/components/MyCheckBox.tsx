import { ErrorMessage, useField } from "formik"

interface Props {
    name: string;
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password';
    [x: string]: any; // This allows for additional props to be passed
}

export const MyCheckBox =({label, ...props}:Props) => {
    const [field] = useField({...props, type: 'checkbox' });
    return (
        <>
            <label>
                <input type="checkbox" {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={props.name} component="span" className="error"/>
        </>
    )
}