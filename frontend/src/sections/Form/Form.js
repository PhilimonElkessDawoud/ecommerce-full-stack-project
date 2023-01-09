import './Form.css'
import {FaArrowLeft, FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Form = (props) => {

  const style = {fontSize: "60px", color: "var(--color-main)", "marginLeft": "20px", "marginTop": "15px", border: "2px solid var(--color-main)",
                 "borderRadius": "30px", padding: "10px"}  

  return (
    <>
        <NavLink to='/'><FaArrowLeft className="arrow" style={style} /></NavLink>
        <div className="contact-page">
            <div className="container">      
                <div className="col-md-6">
                    <div className="right-content">          
                        <div className="container">
                            
                            <div className="line-dec"><div className='line-dec-2'></div></div>

                            {props.children}

                            <div className="col-md-12">
                                <div className="share">
                                    <h6>You can also keep in touch on: <span><a href="/"><FaFacebookF/></a><a href="/"><FaInstagram/></a><a href="/"><FaTwitter/></a></span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export default Form