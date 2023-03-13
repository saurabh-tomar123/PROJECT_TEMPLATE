import "../CSS/Login/Login.css"
import img1 from '../Image/image 19.png'
import img2 from '../Image/y.png'
import img3 from '../Image/z.png'
import img4 from '../Image/Oval Copy 2.png'
import img7 from '../Image/Vector-1.png'
import img8 from '../Image/Vector-2.png'
import img9 from '../Image/google.png'
import img10 from '../Image/x.png'
import img11 from '../Image/cross.png'







function Login()
{
    return(
        <div>
           
            <div className="divv">  
             <img className="im1" src={img1} />
            <p className="pp1">Welcome back to</p>
            <p className="pp2">Simplisend</p>
            <div className="divv1">
               <img className="im3" src={img3} />
                <p className="pp3">Email Address</p>
            </div>
            </div>
            <div className="divv2">
            <img className="im2" src={img2} />
            <p className="pp4">Password</p>
            </div>
            <div className="divv3"></div>
            <p className="pp5">Remember me</p>
            <p className="pp6"> Forgot Password?</p>
            <img className="im10" src={img10} />
            <button className="btn1">Login</button>
            <p className="pp7">Or</p>
            <p className="pp8">Sign up with</p>
            <img className="im4" src={img4} />
            <img className="im9" src={img9} />
            <img className="im5" src={img4} />
            <img className="im7" src={img7} />
            <img className="im6" src={img4} />
            <img className="im8" src={img8} />
            <p className="pp9">Don’t have a account?</p>
            <p className="pp10">Create new account</p>
            <img className="im11" src={img11} />

            
        </div>
    )
} export default Login;