import React, { useState } from 'react'
import './App.css'

const Login = () => {

    const [form, setForm] = useState('Login');
    const [hide, setHide] = useState(true);
    const LoginForm = (formSelection) => {
        setForm (formSelection)
    }
    const HideForm = () => {
        setHide(!hide);
    }
    const DefaultForm = () => {
        if (form === 'Login') {
            return (
                <div className='input-parent' id='inputparent'>
                <form className='input-project'>
                    <input type="text" placeholder='Enter Email'/>
                    <input type="password"  placeholder='Enter Password'/>
                    <input type="submit" className='submitBtn'/>
                </form>
                </div>
        )
    }
    }
    const hideForm = () => {
        setHide(!hide);
    }
    const handleForm = () => {
        if (form === 'Survey') {
            <hideForm/>
            return (
                <div className='input-parent-survey'>
                <form className='input-project'>
                    <input type="text" placeholder='Enter Survey'/>
                    <div className='checkbox'>
                    <input type="checkbox" name="matt" id="check" />
                    <p>Python</p>
                    <input type="checkbox" name="matt" id="check" />
                    <p>C++</p>
                    <input type="checkbox" name="matt" id="check" />
                    <p>Javascript</p>
                    </div>
                    <input type="password"  placeholder='Enter Password'/>
                    <input type="submit" className='submitBtn'/>
                </form>
                </div>
            )
        }
        else if (form === 'Contact') {
            <hideForm/>
            return (
                <div className='input-parent-contact'>
                <form className='input-project'>
                    <input type="text" name="phoneNumber" id="" placeholder='Enter Phone Number' />
                    <input type="text"  placeholder='Enter Password' multiple/>
                    <input type="submit" className='submitBtn'/>
                </form>
                </div>
            )
        }
    }

  return (
    <div className='main-parent'>
        <div className='middle-parent'>
            <div className='child-parent'>
                <ul className='changeFocus'>
                    <li><button onClick={() =>LoginForm('Login')}>Login</button></li>
                    <li><button onClick={() =>LoginForm('Survey')}>Survey</button></li>
                    <li><button onClick={() =>LoginForm('Contact')}>Contact</button></li>
                </ul>
            </div>
            {DefaultForm()}
            {handleForm()}
        </div>
    </div>
    
  )
}

export default Login