import SignContext from '../context/SignContext';
import { useContext } from 'react';

const Signup = () => {
    const {setStep} = useContext(SignContext);
  return (
    <main>
        <h3>Welcome, join us</h3>
        <div className="card">
        <form autoComplete="off">
            <fieldset>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName"/>
                <p className="error">Required</p>
            </fieldset>

            <fieldset>
                <label htmlFor="email">Email</label>
                <input type="text" id="email"/>
                <p className="error">Valid email required</p>
            </fieldset>


            <fieldset>
                <label htmlFor="password">Password</label>
                <input type="password" id="password"/>
                <p className="error">Valid password required</p>
            </fieldset>

            <fieldset>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword"/>
                <p className="error">Confirm password </p>
            </fieldset>

            <fieldset>
                <label htmlFor="framework">Favorite Framework</label>
                <select id="framework">
                    <option value="">Select your framework</option>
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                    <option value="Angular">Angular</option>
                </select>
                <p className="error">Required</p>
            </fieldset>

            <fieldset>
                <label htmlFor="terms">
                    <input type="checkbox" id="terms"/> Accept terms and conditions
                </label>
                <p className="error">Required</p>
            </fieldset>
            
            <button type="submit">Register</button>
        </form>
        </div>
        <p>
            Already have an account? <span onClick={()=> {setStep("signin")}}>Sign in</span>
        </p>
    </main>
  )
}

export default Signup