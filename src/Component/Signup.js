import "../SignUp/Signup.css"
import img from '../Image/1234.png'
import img1 from '../Image/z.png'

function SignUp(){
    return(
        <div>
                <div className="dv1" align="center" style={{marginBottom:"10px",marginLeft:"215px",height:"850px",width:"850px",borderRadius:"20px"}}>
                  <img  className="image1" src={img} />
                    <p className="p1p">Sign Up information</p>
                  <p className="p2p">Enter your email</p>
                  <p  className="p3p">Enter your email address, and you'll receive a code to verify it's you.</p>
               <div className="dv2">
                <img className="image2" src={img1} />
                <p className="p4p">Email Address</p>
               </div>
               <p className="p5p">By entering and tapping Next, you agree to the </p>
               <p className="p6p">Terms, E-Sign Consent & Privacy Policy.</p>
                <button className="dv3">Use Mobile</button>
                <button className="dv4">Next</button>
                </div>
          
        </div>
    )
}
export default SignUp;