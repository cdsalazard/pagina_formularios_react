import React from 'react'
import SignContext from '../context/SignContext';
import { useContext } from 'react';
import { useState } from 'react';

const Signin = () => {
  const {setStep} = useContext(SignContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando información al servidor");
  }

  return (
  <main>
    <h3>Hello , friend!</h3>
    <div className="card">
        <form onSubmit={handlerSubmit} autoComplete='off'>
            {/* Ingresamos el email */}
            <fieldset>
                <label htmlFor="email">Email</label>
                <input type="email"
                        name="email"
                        id="email"
                        autoFocus
                        required
                        value = {email}
                        onChange= {(e) => setEmail(e.target.value)}
                        onBlur={() => setEmailFocused(true)}
                        data-focused={emailFocused}
                        />
                <p className='error'>Valid email required</p>
            </fieldset>

            {/* Ingresamos la contraseña */}
            <fieldset>
                <label htmlFor="password">Password</label>
                <input type="password"
                    id="password"
                    required
                    pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    value = {password}
                    onChange= {(e) => setPassword(e.target.value)}
                    onBlur={() => setPasswordFocused(true)}
                    data-focused = {passwordFocused}
                    />
                <p className='error'>Valid password required</p>
            </fieldset>

            <button type='submit'>Login</button>

            <div
                className="forgot"
                onClick={()=> {
                    setStep("forgot")
                }
                }>
                Forgot password ?
            </div>
        </form>

    </div>
    <p>
        Dont have an account?
        <span  onClick={()=> {
            setStep("signup")
        }
        }>
            Sign up!
        </span>
    </p>
  </main>);
}

export default Signin