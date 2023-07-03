import { useState } from 'react'
import Signin from './components/Signin'
import ForgotPassword from './components/ForgotPassword';
import Signup from './components/Signup';

import SignContext from './context/SignContext';

function App() {
  const [step, setStep] = useState("forgot");

  return (
     <SignContext.Provider value ={ {step, setStep} }>
    <div className='container'>
     {step == "signin"  && < Signin/>}
     {step == "signup"  && < Signup/>}
     {step == "forgot"  && < ForgotPassword/>}
    </div>
     </SignContext.Provider>
  );
}

export default App
