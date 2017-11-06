import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = props => {
    const { handleSubmit } = props;
    return (
        <form className= 'form-horizontal' onSubmit={ handleSubmit }>
            <div className='form-group'>
                <label htmlFor='firstName' className='col-lg-2 control-label'>Email</label>
                <div className='col-lg-10'>
                    <Field name='firstName' component='input' type='email' placeholder='Email' className='form-control'/>
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor='password' className='col-lg-2 control-label'>Password</label>
                <div className='col-lg-10'>
                    <Field name='password' component='input' type='password' placeholder='Password' className='form-control'/>
                </div>
            </div>
            <div className='form-group'>
                <div className='col-lg-offset-2 col-lg-10'>
                    <div className='i-checks'>
                        <Field name='rememberMe' component='input' type='checkbox'/>
                        <label htmlFor='rememberMe'> Remember me </label>
                    </div>
                </div>
            </div>
            <div className='form-group'>
                <div className='col-lg-offset-2 col-lg-10'>
                    <button className='btn btn-sm btn-white' type='submit'>Log in</button>
                </div>
            </div>
        </form>
    )
};

ContactForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(ContactForm);

export default ContactForm;