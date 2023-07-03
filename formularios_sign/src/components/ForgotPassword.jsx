import SignContext from '../context/SignContext';
import { Formik, useFormik } from 'formik';
import { useContext } from 'react';
import { forgotPasswordSchema } from '../schemas/forgotPasswordSchema';

const ForgotPassword = () => {
    const {setStep} = useContext(SignContext);

    const onSubmit = async(values, actions) => {
        console.log(values);
        console.log(actions);
        await new Promise((resolve) => setTimeout(resolve,3000));

   
        console.log("formulario enviado");
        actions.resetForm();

    }
    //Los hooks empiezancon useNombre
    const {values, errors, handleChange,  handleBlur, handleSubmit, isSubmitting} = useFormik({ //Vamos a inicialiar los elementos de formulario. En este caso es el email
        initialValues:{
            email:"", 
        },
        validationSchema: forgotPasswordSchema,
        onSubmit,
    }        

    );

  console.log(isSubmitting);
  return (
    <main>
    <h3>Forgot Password ?</h3>
    <div className="card">
        <form onSubmit={handleSubmit} autoComplete="off">
            <fieldset>
                <label htmlFor="email">Email</label>
                <input type="email"
                         id="email" 
                         value ={values.email}
                         onChange={handleChange}
                         onBlur={handleBlur}
                         autoFocus
                         className={errors.email ? "error-forgot-input" : ""}  
                         />
                {errors.email && <p className="error-messaje"> {errors.email} </p> }
                
            </fieldset>
            <button disabled={isSubmitting} type="submit">Remember me</button>
        </form>
    </div>
    <p>
        Already have an account? 
        <span onClick={()=> {setStep("signin")}}>Sign in</span>
    </p>

    </main>
  );
};

export default ForgotPassword;