import './FormPassword.css'
import {useForm} from 'react-hook-form'
import { NavLink } from 'react-router-dom';

const FormPassword = () => {

  const {register, handleSubmit, formState: { errors }} = useForm()  

  const onSubmit = (data) => {
      console.log(register);
  };

  return (
    <div className='formPassword'>
        <form id="contact" action="" method="post" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">

                <div className="section-heading">
                <h5>Buy, Buy!</h5>
                <h1>Sign In!</h1>
                </div>

                <div className="col-md-12">
                    <fieldset>
                        <input {...register("password", 
                            {required: "Password is required!",
                            minLength:{value: 8, message:"At least 8 characters!"}})}
                            type="text" 
                            className="form-control" 
                            id="subject" 
                            placeholder="Password"/>
                        <p role="alert">{errors.password?.message}</p>
                    </fieldset>

                    <div class="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Show Password</label>
                    </div>
                </div>
                <div className="next">
                    <NavLink to='/'>Forgot Password?</NavLink>
                    <button type="submit" id="form-submit" className="button">Next</button>
                </div>              
            </div>
        </form>
    </div>
  )
}

export default FormPassword