import React,{useState} from 'react';
import '../CSS/home.css'
import { BrowserRouter as Router, Route ,Link, Routes, BrowserRouter} from "react-router-dom";
import data from '../Image/1234.png'
import data1 from '../Image/Rectangle 3.png'
import img1 from '../Image/match 1.png'
import img2 from '../Image/Advanced filters 1.png'
import img3 from '../Image/3D money bag.png'
import img4 from '../Image/3D bank locker.png'
import img5 from '../Image/3D Salary Day.png'
import img6 from '../Image/3D edc machine.png'
import img7 from '../Image/5.png'
import img8 from '../Image/Screen.png'
import img9 from '../Image/image 1486.png'
import img10 from '../Image/Screen-1.png'
import img11 from '../Image/1486.png'
import img12 from '../Image/image14.png'
import img13 from '../Image/Screen3.png'
import img14 from '../Image/iPhone-12.png'
import img15 from '../Image/image 148.png'
import img16 from '../Image/Screen4.png'
import img17 from '../Image/Screen55.png'
import img18 from '../Image/Vector.png'
import img19 from '../Image/Rectangle 2.png'
import img20 from '../Image/Chatbox11.png'
import img21 from '../Image/Chat screen 1.png'
import img22 from '../Image/Chatbox 1.png'
import img23 from '../Image/Ellipse 962.png'
import img24 from '../Image/line.png'
import img25 from '../Image/Vector1.png'
import img26 from '../Image/google_play.png'
import img27 from '../Image/apple_store.png'



function HomPage()
{
  const [status,setStatus]=useState(false)
    return(
        <div>
            <header className="hdr">
            <img className="img" src={data}/>
            <div height="22px" width="48px" style={{marginTop:"29px"}}>
            <a href="" className="how">Home</a>
            <a href="" className="help">About</a>
            <a href="" className="services">Services</a>
            <a href="" className="contact">Blogs</a>
            <a href="" className="contact">Contact Us</a>
           <Link to='/login'>Login</Link>
            <button className="btn">  <Link to='/signup'>SignUp</Link></button>
            </div>
            </header>
            <div className="div1" style={{marginTop:"80px",zIndex:"999"}}>
            <img className="rect" src={data1}/>
            <p style={{marginTop:"237px"}} className="p"> Amet minim mollit non deserunt ullamco est sita qua dolor doamet </p>
            <p className="p2">Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button className="downloadbtn">Download the app now</button>
            <img className="rect" src={data1}/> 
            <img className="sc" src={img1}/> 
            <img  className="adv" style={{zIndex:"999"}} src={img2}/> 
           
            </div>
                <p className="ourservice">Our services</p>
                <p className="p3">Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <div className="card1">
                <img  src={img3} />
                <p className='sendMoney'>Send Money</p>
                <p className="p4">Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
                <div className="card2">
                <img src={img4} />
                <p className='recMoney'>Receive Money</p>
                <p className="p4">Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
                <div className="card3">
                <img src={img5} />
                <p className='payHistory'>Payment History</p>
                <p className="p4">Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
                <div className="card4">
                <img src={img6} />
                <p className='payHistory'>Pay Bill</p>
                <p className="p4">Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
                <div className="card5">
                <img src={img7} />
                <p className='payHistory'>Airtime Topup</p>
                <p className="p4">Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
                <p className="ourservice">Features</p>
                <p className="p3">Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
               <div className="div2">
                <p className="p10">Add, Send , Request Money</p>
                <p className="p9">Send Money in the blink of an eye, Receive money with international bank details, track your transactions. We have smooth customer service , all the notification and alerts you will get from the app. </p>
                <button className="dbtn">Download the app now</button>
                </div>
                  <img className="img8" src={img8} />
                  <img className="img9" src={img9} />
                  <div className="div3">
                <p className="p11">Add Recipients</p>
                <span className="p12">Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
                  <img className="img10" src={img10} />
                <img className="img11" src={img11} />
                <button className="ddbtn">Download the app now</button>
                </div>
                <div className="div4">
                <p className="p14">Mobile Recharge</p>
                <span className="p13">Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
                <img className="img14" src={img14} />
                <img className="img13" src={img13} />
                <img className="img12" src={img12} />
                 <button className="btn4">Download the app now</button>
                </div>
                  <div className="div5"> 
                  <p className="p15">Airtime Topup</p>
                  <p className="p16">Make bill payments easily using the wallet App.Paying bills is easier using the application with guaranteed security. Make bill payments easily using the wallet App.</p>
                <img className="img15" src={img15} />
                  <img className="img16" src={img16} />
                  <button className="btn5">Download the app Now</button>
                  </div>
                  <div className="div6">
                  <p className="p17">Payment Steps</p>
                  <p className="p18">Mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  </div>
                  <div style={{marginTop:"168px",width: "1112px",height: "399px"}}>
                <img className="img17" src={img17} />
                <img className="img17" src={img17} />
                <img className="img17" src={img17} />
                <img className="img17" src={img17} />

                
                  </div>
                  <div className="div7"> 
                  <p className="p19">Mollit non deserunt </p>
                 <p className="p20">Mollit non deserunt ullamco est aliqua dolor do amet sint.</p>
                 </div>
                 <div className="div8"> 
                  <p className="p19">Mollit non deserunt </p>
                 <p className="p20">Mollit non deserunt ullamco est aliqua dolor do amet sint.</p>
                 </div>
                 <div className="div9">
                 <p className="p19">Mollit non deserunt </p>
                 <p className="p20">Mollit non deserunt ullamco est aliqua dolor do amet sint.</p>
                 </div>
                 <div className="div10">
                 <p className="p19">Mollit non deserunt </p>
                 <p className="p20">Mollit non deserunt ullamco est aliqua dolor do amet sint.</p>
                 </div>
                 <img className="img18" src={img18} />
                 <div className="div11">
                 <img className="img19" src={img19} />
                  <p className="p21">Download the Simplisend app </p>
                  <p className="p22">Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  <img className="img20" src={img20} />
                  <img className="img21" src={img21} />
                  <img className="img22" src={img22} />
                  <p className="p23">Get the link to download the app</p>
                  <div className="div12">
                  <img className="img23" src={img23} />
                  <img className="img24" src={img24} />
                  <div className="div13">
                  <img className="img25" src={img25} />
                    <p className="p24">(316) 555-0116</p>
                  </div>
                  </div>
                  <button className="btn6">Send SMS</button>
                  <img className="img26" src={img26} />
                  <img className="img27" src={img27} />
                 </div>
                 <div className="div14">
                 <p className="p25">General
                 <p className="gp1">About us</p>
                 <p className="gp2">Blog</p>
                 <p className="gp3">Cards</p>
                 <p className="gp4">Services</p>
                 <p className="gp5">Contact us</p>
                 </p>
                 <p className="p26">Services
                 <p className="sp1">Send Money</p>
                 <p className="sp2">Request Money</p>
                 <p className="sp3">Quick Pay</p>
                 <p className="sp4">Add Money</p>
                 <p className="sp5">Pay Bill</p>
                 <p className="sp6">Mobile Recharge</p>



                 </p>
                 <p className="p27">Legal
                 <p className="sp1">Terms & Condition</p>
                 <p className="sp2">Privacy & Policy</p>
                 <p className="sp3">How to Pay</p>
                 </p>
                 <p className="p28">Company
                 <p className="gp1">About us</p>
                 <p className="gp2">Blog</p>
                 <p className="gp3">Cards</p>
                 <p className="gp4">Services</p>
                 <p className="gp5">Contact us</p>
                 </p>
                 <p className="p29">Social
                 <p className="sp1">Facebook</p>
                 <p className="sp2">Twitter</p>
                 <p className="sp3">LinkedIn</p>
                 <p className="sp4">Youtube</p>
                 </p>
                 </div>
                
        </div>

        
       
    )
}export default HomPage


