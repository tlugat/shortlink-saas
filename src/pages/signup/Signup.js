import {Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import styles from './Signup.module.scss';
import img_small from '../../assets/img/signup/signup-img-small.png';
import img_large from '../../assets/img/signup/signup-img-large.png';
import BlockImg from '../../components/block_img/BlockImg';

const CustomInput = ({field, form, ...props}) => {
  return (
    <div className={styles.form__group}>
      <label>{field.name}</label>
      <input {...field} {...props} ></input>
    </div>
  )
}

const CustomError = (props) => <div>{props.children}</div>


const Signup = () => {

  const userSchema = Yup.object().shape({
    lastName: Yup.string().min(2, 'Le nom renseigné est trop court').required('Ce champs est obligatoire'),
    firstName: Yup.string().min(2, 'Le prénom renseigné est trop court').required('Ce champs est obligatoire'),
    email: Yup.string().email("E-mail erroné").required('Ce champs est obligatoire'),
    tel: Yup.number().min(9, 'Numéro erroné (trop court)').required('Ce champs est obligatoire'),
    password: Yup.string().min(8, '8 caractères min.').max(20, '20 caractères max.'),
  });

  const submit = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);

  } 

  return (
    <div className={styles.signUp}>
      <div className={styles.signUp__formContainer}>
        <div className={styles.signUp__title}>
        <h2 >Sign up.</h2>
        <p>Welcome new user !</p>
      </div>
      
      <Formik 
      onSubmit={submit} 
      initialValues={{lastName: "", firstName: "", email: "", tel: "", password: ""}}
      validationSchema={userSchema}
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
          <form action="../../back-end/pdo.php" onSubmit={handleSubmit} className={styles.form}>
            <Field name="lastName" component={CustomInput} />
            <ErrorMessage name="lastName" component={CustomError} />
            <Field name="firstName" component={CustomInput} />
            <ErrorMessage name="firstName" component={CustomError} />
            <Field name="email" type="email" component={CustomInput} />
            <ErrorMessage name="email" component={CustomError} />
            <Field name="tel" type="number" component={CustomInput} />
            <ErrorMessage name="tel" component={CustomError} />
            <Field name="password" type="password"  component={CustomInput} />
            <ErrorMessage name="password" component={CustomError} />
            <button type="submit" disabled={isSubmitting}>Sign up</button>
          </form>
          
        )}
      </Formik> 
      </div>
     
      <BlockImg imgSmall={img_small} imgLarge={img_large}/>
    </div>
  )
}

export default Signup