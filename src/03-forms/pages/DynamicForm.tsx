import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';


console.log(formJson);
const initialValues: {[key: string]: any} ={}
const requiredFields: {[key: string]: any} ={}
for (const input of formJson) {
  initialValues[input.name] = input.value;
  if(!input.validations ) continue;
  let schema = Yup.string()
  for(const rule of input.validations){
    if(rule.type === 'required'){
      schema = schema.required('Este campo es obligatorio')
    }
    if(rule.type === 'minLenght'){
      schema = schema.min((rule as any).value || 1, `Minimo de ${(rule as any).value || 1} caracteres`)
    }
    if(rule.type === 'email'){
      schema = schema.email('Digite correctamente el correo')
    }
  }
  requiredFields[input.name] = schema;
}
const validationsSchema = Yup.object({...requiredFields});
export const DynamicForm = () => {
  return (
    <div>
        <h1>DynamicForm</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationsSchema}
          onSubmit={(values) => {
          console.log(values);
          }}
        >

          {(formik) => (
            <Form>
              {formJson.map(({type, name,placeholder, label, options }) => {
                if( type === 'input' || type === 'password' || type === 'email' ){
                  return <MyTextInput 
                    key={name}
                    name={name} 
                    label={label} 
                    placeholder={placeholder} 
                    type={type as any}
                  />  
                }else if(type === 'select'){
                  return (
                    <MySelect 
                      name={name} 
                      label={label}
                      key={name}
                    >
                      <option value="">Select an option </option>
                      {
                        options?.map(({id, label}) => (
                          <option value={ id } key={id} >{label} </option>
                        ))
                      }
                    </MySelect>
                  )
                }
                
              })}
              <button type='submit'>Submit</button>
            </Form>


          )}

        </Formik>
    </div>
  )
}