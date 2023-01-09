import './FormSignUp.css'
import {useForm} from 'react-hook-form'

const FormSignUp = () => {

   const {register, handleSubmit, getValues, formState: { errors }} = useForm()
   
   const onSubmit = (data) => {
    console.log(register);
   };

   var msg = "";

   const passValidate = (value) => {
    if(!value.match(/[a-z]/g)){
        msg = "At least 1 Lowercase letter!";
    }

    else if(!value.match(/[A-Z]/g)){
        msg = "At least 1 Uppercase letter!";
    }

    else if(!value.match(/[0-9]/g)){
        msg = "At least 1 digit!";
    }

    else if(!value.match(/[\*\.\!\@\$\%\^\&\(\)\{\}\[\]\:\;\<\>\,\.\?\\\/\~\_\+\-\=\|\#\'\"\~]/g)){
        msg = "At least 1 special character!";
    }

    else{
        msg = "";
    }
   }

   const samePassword = (value) => {
    const pass = getValues('password');

    if(!value.match(pass)){
        msg = "Passwords do not match!!";
    }
    else{
        msg = "";
    }
   }
    
  return (
    <div className='sign-up'>
        <form id="contact" action="" method="post" onSubmit={handleSubmit(onSubmit)}>

            <div className="section-heading">    
                <h1>Wanna be a member!</h1>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <fieldset>
                        <input {...register("firstName", 
                            {required: "First Name is required!",
                            pattern:{value: /^[A-Za-z]+$/,  message: "Invalid First Name!"}})} 
                            type="text" 
                            className="form-control" 
                            id="firstName" 
                            placeholder="First Name" />
                        <p role="alert">{errors.firstName?.message}</p>
                    </fieldset>
                </div>

                <div className="col-md-6">
                    <fieldset>
                        <input {...register("lastName", 
                            {required: "Last Name is required!",
                            pattern:{value: /^[A-Za-z]+$/,  message: "Invalid Last Name!"}})} 
                            type="text" 
                            className="form-control" 
                            id="lastName" 
                            placeholder="Last Name"/>
                        <p>{errors.lastName?.message}</p>
                    </fieldset>
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
                </div>

                <div className="col-md-12">
                    <fieldset>
                        <input {...register("password", 
                            {required: "Password is required!",
                            minLength:{value: 8, message:"At least 8 characters!"},
                            validate: (value) => passValidate(value) || msg})}
                            type="text" 
                            className="form-control" 
                            id="subject" 
                            placeholder="Password"/>
                        <p role="alert">{errors.password?.message}</p>
                    </fieldset>
                </div>

                <div className="col-md-12">
                    <fieldset>
                        <input {...register("confirmPassword", 
                            {required: "Please confirm your password!",
                            validate: (value) => samePassword(value) || msg})} 
                            type="text" 
                            className="form-control" 
                            id="subject" 
                            placeholder="Confirm Password"/>
                        <p role="alert">{errors.confirmPassword?.message}</p>
                    </fieldset>
                </div>

                <div className="hamada">
                    <button type="submit" id="form-submit" className="button">Sign In</button>
                </div>             
            </div>
        </form>
    </div>
  )
}

export default FormSignUp