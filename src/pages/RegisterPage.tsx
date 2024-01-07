import { useFormik } from "formik";
import { registerUser } from "../Firebase";

export default function RegisterPage() {
  type RegisterValues = {
    email:string;
    password:string;
    repeatedPassword:string;
  }
  const formik = useFormik({
    initialValues: {
      email:'',
      password:'',
      repeatedPassword:''
    },
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit: (values) => {
      console.log(values);
      registerUser(values.email, values.password);
    },
    validate: (values) => {
      let errors:RegisterValues = {} as RegisterValues;
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if(!values.password){
        errors.password = 'You must enter password';
      } else if(!values.repeatedPassword){
        errors.repeatedPassword = 'You must repeat the password';
      } else if(values.password !== values.repeatedPassword) {
        errors.repeatedPassword = 'Passwords does not match';
      }
      return errors;
    }
  })
  return (
    <>
      <div>
        <h1>Register</h1>
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
            <input
              type="password"
              name="repeatedPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.repeatedPassword}
            />
            {formik.errors.repeatedPassword}
            <button type="submit">
              Submit
            </button>
          </form>
      </div>
      <div>
        <button>Sign in with Google</button>
      </div>
    </>
  )
}
