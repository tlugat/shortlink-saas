import {Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import styles from './Form.module.scss';
import {Link} from 'react-router-dom';
import axios from 'axios'

async function loginUser({email, password}) {
  return axios.post('http://shorty-api-shortlink.herokuapp.com/api/user/login', {
      email, 
      password
  })
  // .then(response => console.log(response))
  .catch((error) => console.log(error));
  
 }

 async function registerUser({name, email, password, password2}) {
  return axios.post('http://shorty-api-shortlink.herokuapp.com/api/user/register', {
      name,
      email, 
      password,
      password2
  })
  // .then(response => console.log(response))
  .catch((error) => console.log(error));
  
 }

const CustomInput = ({field, form, ...props}) => {
  return (
    <div className={styles.form__group}>
      <label>{field.name}</label>
      <input {...field} {...props} ></input>
    </div>
  )
}

const CustomError = (props) => <div>{props.children}</div>


const Form = ({location, setToken}) => {
  
  const userSchemaLogIn = Yup.object().shape({
    email: Yup.string().email("E-mail erroné").min(6, '6 caractères min.').max(100, '100 caractères max.'),
    password: Yup.string().min(6, '6 caractères min.').max(50, '50 caractères max.'),
  });

  const userSchemaSignup = Yup.object().shape({
    name: Yup.string().min(2, 'Le nom renseigné est trop court'),
    email: Yup.string().email("E-mail erroné"),
    password: Yup.string().min(6, '6 caractères min.').max(50, '20 caractères max.'),
    password2: Yup.string().min(6, '6 caractères min.').max(50, '20 caractères max.'),
  });

  const submitSignup = async (values, actions) => {
    const {name, email, password, password2} = values;
    actions.setSubmitting(false);
    const token = await registerUser({name, email, password, password2});
    setToken(token.data.token);
  } 

  const submitLogIn = async (values, actions) => {
    const {email, password} = values;
    actions.setSubmitting(false);
    const token = await loginUser({email, password});
    setToken(token.data.token);
  }

  return (  
    <> 
     { location === "/signup" &&
      ( <Formik 
      onSubmit={submitSignup} 
      initialValues={{name: "", email: "", password: "", password2: ""}}
      validationSchema={userSchemaSignup}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isSubmitting,
          errors,
          touched
        }) => (
          <form  onSubmit={handleSubmit} className={styles.form}>
            <Field name="name" component={CustomInput} />
            <ErrorMessage name="lastName" component={CustomError} />
            <Field name="email" type="email" component={CustomInput} />
            <ErrorMessage name="email" component={CustomError} />
            <Field name="password" type="password"  component={CustomInput} />
            <ErrorMessage name="password" component={CustomError} />
            <Field name="password2" type="password"  component={CustomInput} />
            <ErrorMessage name="password2" component={CustomError} />
            <button type="submit" disabled={isSubmitting}>Sign up</button>
          </form>
          
        )}
      </Formik> )}

     { location === "/login" && (
       <Formik 
      onSubmit={submitLogIn} 
      initialValues={{email: "", password: ""}}
      validationSchema={userSchemaLogIn}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isSubmitting,
          errors,
          touched
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Field name="email" type="email" component={CustomInput} />
            <ErrorMessage name="email" component={CustomError} />
            <Field name="password" type="password"  component={CustomInput} />
            <ErrorMessage name="password" component={CustomError} />
            <button type="submit" disabled={isSubmitting}>Login</button>
            <p>Don't have an account ? <span><Link to="/signup">Sign up</Link></span></p>
            <div className={styles.form__tertiaryConnexion}>
              <button>Login with Google</button>
              <button>Login with Facebook</button>
            </div>
          </form>
          
        )}
      </Formik>
     )  }
     
     </>
  )
}

export default Form