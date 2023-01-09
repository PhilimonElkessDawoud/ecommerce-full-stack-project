import './SingleProduct.css'
import {FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa";

const SingleProduct = () => {
  return (
    <div className="single-product">
      <div className="container">
        
            
        <div className="section-heading">
            <div className="line-dec"></div>
            <h1>Single Product</h1>
        </div>
           
        <div className="photo">
            <img src="/assets/big-01.jpg" alt=''/>
        </div>                

        <div className="right-content">

            <h4>Single Product Name</h4>

            <h6>$55.00</h6>

            <p>Proin commodo, diam a ultricies sagittis, erat odio rhoncus metus, eu feugiat lorem lacus aliquet arcu. Curabitur in gravida nisi, non placerat nibh. Praesent sit amet diam ultrices, commodo turpis id, dignissim leo. Suspendisse mauris massa, porttitor non fermentum vel, ullamcorper scelerisque velit. </p>

            <span>7 left on stock</span>

            <form action="" method="get">
            <label htmlfor="quantity">Quantity:</label>

            <input name="quantity" type="quantity" className="quantity-text" id="quantity" onFocus="if(this.value == '1') { this.value = ''; }" onblur="if(this.value == '') { this.value = '1';}" value="1"/>
            
            <input type="submit" className="button" value="Order Now!"/>

            <button className="button" value="Order Now!">Add to Cart!</button>
            </form>

            <div className="down-content">

            <div className="categories">
                <h6>Category: <span><a href="/">Pants</a>,<a href="/">Women</a>,<a href="/">Lifestyle</a></span></h6>
            </div>

            <div className="share">
                <h6>Share:  <span><a href="/"><FaFacebookF/></a><a href="/"><FaInstagram/></a><a href="/"><FaTwitter/></a></span></h6>
            </div>

            </div>
        </div>

      </div>
    </div>
  )
}

export default SingleProduct