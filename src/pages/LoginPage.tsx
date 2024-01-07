import { useFormik } from 'formik';
import { Link } from 'react-router-dom'
import { loginUser } from '../Firebase';

export default function LoginPage() {
  type LoginValues = {
    email:string;
    password:string;
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit: (values) => {
      console.log(values);
      loginUser(values.email, values.password);
    },
    validate: (values) => {
      let errors:LoginValues = {} as LoginValues;
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      if(!values.password){
        errors.password = 'You must enter password';
      }
      return errors;
    }
  })
  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email}
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password}
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
      <div>Don't have account?<Link to="/register">Register</Link></div>
    </>
  )
}
