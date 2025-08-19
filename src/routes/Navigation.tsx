import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from "../logo.svg";
import { RegisterPage, FormikPageBasic, FormikYupPage, FormikComponents, FormikAbstract } from "../03-forms/pages";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="Logo" />
          <ul>
            <li>
              <NavLink to="/register" className={({isActive})=> isActive ? 'nav-active': '' }>Register Page</NavLink>
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
              <NavLink to="/users" className={({isActive})=> isActive ? 'nav-active': '' }>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="formik-basic" element={<FormikPageBasic/>}/>
            <Route path="formik-yup" element={<FormikYupPage/>}/>
            <Route path="formik-Components" element={<FormikComponents/>}/>
            <Route path="formik-Abstract" element={<FormikAbstract/>}/>
            <Route path="users" element={<h1>Users page</h1>}/>
            <Route path="/*" element={<Navigate to="/home" replace/>}/>           


        </Routes>




      </div>
    </BrowserRouter>
  );
};
