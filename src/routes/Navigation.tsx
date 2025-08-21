import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from "../logo.svg";
import { RegisterPage, FormikPageBasic, FormikYupPage, FormikComponents, FormikAbstract, RegisterFormikPage, DynamicForm } from "../03-forms/pages";



export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="Logo" />
          <ul>
            <li>
              <NavLink to="/register" className={({isActive})=> isActive ? 'nav-active': '' }>Register</NavLink>
            </li>
            <li>
              <NavLink to="/register-Formik" className={({isActive})=> isActive ? 'nav-active': '' }>Register Formik</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={({isActive})=> isActive ? 'nav-active': '' }>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-Yup" className={({isActive})=> isActive ? 'nav-active': '' }>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-Components" className={({isActive})=> isActive ? 'nav-active': '' }>FormikComponents</NavLink>
            </li>
            <li>
              <NavLink to="/formik-Abstract" className={({isActive})=> isActive ? 'nav-active': '' }>FormikAbstract</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-Form" className={({isActive})=> isActive ? 'nav-active': '' }>DynamicForm</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/register-Formik" element={<RegisterFormikPage/>}/>
            <Route path="formik-basic" element={<FormikPageBasic/>}/>
            <Route path="formik-yup" element={<FormikYupPage/>}/>
            <Route path="formik-Components" element={<FormikComponents/>}/>
            <Route path="formik-Abstract" element={<FormikAbstract/>}/>
            <Route path="dynamic-Form" element={<DynamicForm/>}/>
            <Route path="/*" element={<Navigate to="/home" replace/>}/>           
        </Routes>
      </div>
    </BrowserRouter>
  );
};
