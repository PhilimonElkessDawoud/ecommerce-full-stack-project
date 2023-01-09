import './FormEmail.css'
import {useForm} from 'react-hook-form'
import { NavLink } from 'react-router-dom';

const FormEmail = () => {

  const {register, handleSubmit, formState: { errors }} = useForm()  

  const onSubmit = (data) => {
    console.log(register);
  };

  return (
    <div className='formEmail'>
        <form id="contact" action="" method="post" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">

                <div className="section-heading">
                <h5>Buy, Buy!</h5>
                <h1>Sign In!</h1>
                </div>

                <div className="col-md-12">
                    <fieldset>
                        <input {...register("email", 
                            {required: "Email is required!",
                            pattern:{value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
                            message: "Invalid Email!"}})} 
                            type="text" 
                            className="form-control" 
                            id="email" 
                            placeholder="Email"/>
                        <p role="alert">{errors.email?.message}</p>
                    </fieldset>

                    <div class="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Stay logged in</label>
                    </div>
                </div>

                <div className="next">
                    <NavLink to='/SignUp'>Sign Up?</NavLink>
                    <button type="submit" id="form-submit" className="button">Next</button>
                </div>              
            </div>
        </form>
    </div>
  )
}

export default FormEmail