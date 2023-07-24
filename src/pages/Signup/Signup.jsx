import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Signup = () => {
  return (
    <div className="Frame5" style={{width: 960, height: 1101, position: 'relative', background: 'white'}}>

  <div className="LogInToSafeplaceVietnam" style={{width:800, left:"33%", top: 64, position: 'absolute', color: '#1F7564', fontSize: 50, fontFamily: 'League Spartan', fontWeight: '700', wordWrap: 'break-word'}}>Register to SafePlace Vietnam</div>

  <div className="WhatSYourEmail" style={{width: 229, height: 25, left: "48%", top: 150, position: 'absolute', color: '#1F7564', fontSize: 20, fontFamily: 'League Spartan', fontWeight: '700', wordWrap: 'break-word'}}>What’s your email?</div>
  <div className="WhereAreYou" style={{width: 229, height: 25, left: "46.5%", top: 311, position: 'absolute', color: '#1F7564', fontSize: 20, fontFamily: 'League Spartan', fontWeight: '700', wordWrap: 'break-word'}}>Where are you?</div>
  <div className="WhatSYourDateOfBirth" style={{width: 285, height: 25, left: "48.5%", top: 409, position: 'absolute', color: '#1F7564', fontSize: 20, fontFamily: 'League Spartan', fontWeight: '700', wordWrap: 'break-word'}}>What’s your date of birth?</div>
  <div className="WhatSShouldWeCallYou" style={{width: 267, height: 25, left: "50%", top: 632, position: 'absolute', color: '#1F7564', fontSize: 20, fontFamily: 'League Spartan', fontWeight: '700', wordWrap: 'break-word'}}>What’s should we call you?</div>
  <div className="WhatSYourGender" style={{left: "50.5%", top: 769, position: 'absolute', color: '#1F7564', fontSize: 20, fontFamily: 'League Spartan', fontWeight: '700', wordWrap: 'break-word'}}>What’s your gender?</div>
  
  <div className="EnterYourEmail" style={{width: 168, height: 19, left: "49%", top: 205, position: 'absolute', color: '#CCC9C9', fontSize: 16, fontFamily: 'League Spartan', fontWeight: '500', wordWrap: 'break-word'}}>Enter your email.</div>
  <div className="EnterYourProvince" style={{width: 168, height: 19, left: "50%", top: 359, position: 'absolute', color: '#CCC9C9', fontSize: 16, fontFamily: 'League Spartan', fontWeight: '500', wordWrap: 'break-word'}}>Enter your province.</div>
  <div className="EnterYourDateOfBirth" style={{width: 168, height: 19, left: "51.5%", top: 457, position: 'absolute', color: '#CCC9C9', fontSize: 16, fontFamily: 'League Spartan', fontWeight: '500', wordWrap: 'break-word'}}>Enter your date of birth.</div>
  <div className="EnterAProfileName" style={{width: 168, height: 19, left: "50%", top: 680, position: 'absolute', color: '#CCC9C9', fontSize: 16, fontFamily: 'League Spartan', fontWeight: '500', wordWrap: 'break-word'}}>Enter a profile name</div>
  <div className="CreateAPassword" style={{width: 165, height: 19, left: "50%", top: 561, position: 'absolute', color: '#CCC9C9', fontSize: 16, fontFamily: 'League Spartan', fontWeight: '500', wordWrap: 'break-word'}}>Create a password.</div>
  <div className="CreateAPassword" style={{width: 215, height: 26, left: "48.5%", top: 512, position: 'absolute', color: '#1F7564', fontSize: 20, fontFamily: 'League Spartan', fontWeight: '700', wordWrap: 'break-word'}}>Create a password</div>

  <a href="/login" className="HaveAnAccountLogIn" style={{width: 255, height: 24, left: "58%", top: 982, position: 'absolute'}}><span style={{color: '#1F7564', fontSize: 20, fontFamily: 'League Spartan', fontWeight: '500', wordWrap: 'break-word'}}>Have an account?</span><span style={{color: '#1F7564', fontSize: 20, fontFamily: 'League Spartan', fontWeight: '500', textDecoration: 'underline', wordWrap: 'break-word'}}> Login</span></a>
  

  <input placeholder="Enter Your Email" className="Rectangle2071" style={{fontSize: 16, fontFamily: 'League Spartan', fontWeight: '500', wordWrap: 'break-word',width: 405, height: 63, left: "50%", top: 182, position: 'absolute', borderRadius: 2, border: '0.50px #1F7564 solid'}} />
  <input placeholder="Enter Your Province" className="Rectangle2078" style={{fontSize: 16, fontFamily: 'League Spartan', fontWeight: '500', wordWrap: 'break-word',width: 405, height: 63, left: "50%", top: 336, position: 'absolute', borderRadius: 2, border: '0.50px #1F7564 solid'}} />
  <input placeholder="Enter Your Date Of Birth" className="Rectangle2080" style={{fontSize: 16, fontFamily: 'League Spartan', fontWeight: '500', wordWrap: 'break-word',width: 405, height: 63, left: "50%", top: 434, position: 'absolute', borderRadius: 2, border: '0.50px #1F7564 solid'}} />
  <input placeholder="Enter A Profile Name" className="Rectangle2079" style={{fontSize: 16, fontFamily: 'League Spartan', fontWeight: '500', wordWrap: 'break-word',width: 405, height: 63, left: "50%", top: 657, position: 'absolute', borderRadius: 2, border: '0.50px #1F7564 solid'}} />
  <input placeholder="Create A Password" className="Rectangle2075" style={{fontSize: 16, fontFamily: 'League Spartan', fontWeight: '500', wordWrap: 'break-word',width: 405, height: 64, left: "50%", top: 537, position: 'absolute', borderRadius: 2, border: '0.50px #1F7564 solid'}} />

  <Link to={"/login"}>
    <button className="Rectangle2076" style={{cursor:"pointer",background:"none",width: 212, height: 63, left: "60%", top: 890, position: 'absolute', borderRadius: 34, border: '0.50px #1F7564 solid'}}>
      <span className="SignUp" style={{color: '#1F7564', fontSize: 24, fontFamily: 'League Spartan', fontWeight: '700', wordWrap: 'break-word'}}>Sign Up</span>
    </button>
  </Link>

  <a href="#" className="Group450" style={{width: 29.68, height: 27.56, left: "88%", top: 552, position: 'absolute'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M29.5947 15.1664C29.5514 15.2606 28.5039 17.5013 26.1753 19.7468C23.0725 22.7388 19.1535 24.32 14.84 24.32C10.5265 24.32 6.6075 22.7388 3.5047 19.7468C1.17606 17.5013 0.123655 15.257 0.0853182 15.1664C0.0290661 15.0444 0 14.9123 0 14.7788C0 14.6453 0.0290661 14.5133 0.0853182 14.3913C0.128602 14.297 1.17606 12.0575 3.5047 9.81205C6.6075 6.82126 10.5265 5.24001 14.84 5.24001C19.1535 5.24001 23.0725 6.82126 26.1753 9.81205C28.5039 12.0575 29.5514 14.297 29.5947 14.3913C29.6509 14.5133 29.68 14.6453 29.68 14.7788C29.68 14.9123 29.6509 15.0444 29.5947 15.1664ZM14.84 7.14801C11.0335 7.14801 7.70814 8.48242 4.95532 11.1131C3.8258 12.1962 2.86484 13.4313 2.10232 14.78C2.86463 16.1288 3.82562 17.3639 4.95532 18.4469C7.70814 21.0776 11.0335 22.412 14.84 22.412C18.6465 22.412 21.9719 21.0776 24.7247 18.4469C25.8564 17.3642 26.8195 16.1291 27.5839 14.78C26.6922 13.1749 22.8078 7.14801 14.84 7.14801ZM14.84 20.504C13.666 20.504 12.5183 20.1683 11.5421 19.5393C10.566 18.9104 9.80513 18.0164 9.35585 16.9705C8.90656 15.9246 8.78901 14.7737 9.01805 13.6633C9.2471 12.553 9.81245 11.533 10.6426 10.7325C11.4728 9.93201 12.5305 9.38685 13.6819 9.16599C14.8334 8.94513 16.0269 9.05848 17.1116 9.49172C18.1963 9.92496 19.1234 10.6586 19.7756 11.5999C20.4279 12.5412 20.776 13.6479 20.776 14.78C20.7744 16.2976 20.1484 17.7526 19.0356 18.8257C17.9227 19.8989 16.4138 20.5024 14.84 20.504ZM14.84 10.964C14.0573 10.964 13.2922 11.1878 12.6414 11.6071C11.9906 12.0264 11.4834 12.6224 11.1839 13.3197C10.8844 14.017 10.806 14.7842 10.9587 15.5245C11.1114 16.2647 11.4883 16.9446 12.0417 17.4783C12.5952 18.012 13.3003 18.3754 14.068 18.5227C14.8356 18.6699 15.6313 18.5944 16.3544 18.3055C17.0775 18.0167 17.6956 17.5276 18.1304 16.9001C18.5652 16.2725 18.7973 15.5347 18.7973 14.78C18.7973 13.7679 18.3804 12.7973 17.6383 12.0817C16.8961 11.366 15.8896 10.964 14.84 10.964Z" fill="#B8B6B6"/>
      <path d="M2.12012 28.56L27.5601 0.999998" stroke="#C6C3C3" stroke-linecap="round"/>
    </svg>
    {/* <div className="Vector" style={{width: 29.68, height: 19.08, left: 0, top: 23.32, position: 'absolute', background: '#B8B6B6'}}></div>
    <div className="Line1" style={{width: 37.51, height: 0, left: 2.12, top: 27.56, position: 'absolute', transform: 'rotate(-47.29deg)', transformOrigin: '0 0', background: '#B8B6B6', border: '0.50px #C6C3C3 solid'}}></div> */}
  </a>
  
  <a href="#" className="UsePhoneNumberInstead" style={{width: 256, height: 19, left: "47%", top: 255, position: 'absolute', color: '#1F7564', fontSize: 16, fontFamily: 'League Spartan', fontWeight: '500', textDecoration: 'underline', wordWrap: 'break-word'}}>Use phone number instead.</a>

  <span className="ThisAppearsOnYourProfile" style={{width: 256, height: 19, left: "47.5%", top: 728, position: 'absolute', color: '#1F7564', fontSize: 16, fontFamily: 'League Spartan', fontWeight: '500', wordWrap: 'break-word'}}>This appears on your profile.</span>

    <div style={{left: "22%",position: 'absolute'}}>
      <input type="checkbox" className="Ellipse1" style={{width: 14, height: 14, left: 271, top: 816, position: 'absolute', borderRadius: "50%", border: '0.50px #1F7564 solid'}} />
      <input type="checkbox" className="Ellipse2" style={{width: 14, height: 14, left: 344, top: 816, position: 'absolute', borderRadius: "50%", border: '0.50px #1F7564 solid'}} />
      <input type="checkbox" className="Ellipse4" style={{width: 14, height: 14, left: 548, top: 816, position: 'absolute', borderRadius: "50%", border: '0.50px #1F7564 solid'}} />
      <input type="checkbox" className="Ellipse3" style={{zIndex:99, width: 14, height: 14, left: 431, top: 816, position: 'absolute', borderRadius: "50%", border: '0.50px #1F7564 solid'}} />
      <input type="checkbox" className="Ellipse5" style={{width: 14, height: 14, left: 271, top: 850, position: 'absolute', borderRadius: "50%", border: '0.50px #1F7564 solid'}} />

      <div className="Male" style={{left: 290, top: 818, position: 'absolute', color: '#1F7564', fontSize: 15, fontFamily: 'League Spartan', fontWeight: '700', wordWrap: 'break-word'}}>Male</div>
      <div className="Female" style={{left: 363, top: 818, position: 'absolute', color: '#1F7564', fontSize: 15, fontFamily: 'League Spartan', fontWeight: '700', wordWrap: 'break-word'}}>Female</div>
      <span className="NonBinary" style={{width:100,left: 440, top: 818, position: 'absolute', color: '#1F7564', fontSize: 15, fontFamily: 'League Spartan', fontWeight: '700', wordWrap: 'break-word'}}>Non-binary</span>
      <div className="Other" style={{left: 567, top: 818, position: 'absolute', color: '#1F7564', fontSize: 15, fontFamily: 'League Spartan', fontWeight: '700', wordWrap: 'break-word'}}>Other</div>
      <div className="PreferNotToSay" style={{width:200,left: 249, top: 852, position: 'absolute', color: '#1F7564', fontSize: 15, fontFamily: 'League Spartan', fontWeight: '700', wordWrap: 'break-word'}}>Prefer not to say</div>
    </div>
</div>
  );
};
