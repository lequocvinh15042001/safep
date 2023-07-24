import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
   <div className="Frame4" style={{width: 960, height: 738, position: 'relative', background: 'white'}}>

  <div className="LogInToSafeplaceVietnam" style={{width: "100%",left: "21%", top: 78, position: 'absolute', color: '#1F7564', fontSize: 50, fontFamily: 'League Spartan', fontWeight: '700', wordWrap: 'break-word'}}>Log in to SafePlace Vietnam</div>

  <div className="EmailOrUsername" style={{width: 229, height: 25, left: "47%", top: 164, position: 'absolute', color: '#1F7564', fontSize: 20, fontFamily: 'League Spartan', fontWeight: '700', wordWrap: 'break-word'}}>Email or Username</div>
 
  <div className="RememberMe" style={{width: 127, height: 19, left: "55%", top: 404, position: 'absolute', color: '#1F7564', fontSize: 16, fontFamily: 'League Spartan', fontWeight: '500', wordWrap: 'break-word'}}>Remember me</div>

  <div className="Password" style={{width: 229, height: 26, left: "42.5%", top: 276, position: 'absolute', color: '#1F7564', fontSize: 20, fontFamily: 'League Spartan', fontWeight: '700', wordWrap: 'break-word'}}>Password</div>

  <a href="#" className="ForgotYourPassword" style={{width: 255, height: 24, left: "57%", top: 577, position: 'absolute', color: '#1F7564', fontSize: 20, fontFamily: 'League Spartan', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word'}}>Forgot your password?</a>

    {/* Button Login */}
  <Link to={"/"}>
    <button className="Rectangle2076" style={{border:"none",cursor:"pointer",width: 405, height: 63, left: "49.5%", top: 457, position: 'absolute', background: '#1F7564', borderRadius: 22}}>
      <span className="LogIn" style={{color: '#FDFDFD', fontSize: 32, fontFamily: 'League Spartan', fontWeight: '700', wordWrap: 'break-word'}}>Log In</span>
    </button>
  </Link>
  
  <a href="/signup" className="DonTHaveAcountSignUpForSafeplaceVietnam" style={{width: 420, height: 17, left: "48%", top: 658, position: 'absolute'}}><span style={{color: '#1F7564', fontSize: 16, fontFamily: 'League Spartan', fontWeight: '500', wordWrap: 'break-word'}}>Don’t have acount?</span><span style={{color: '#1F7564', fontSize: 16, fontFamily: 'League Spartan', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word'}}>  Sign up for SafePlace Vietnam </span></a>


  <div className="Group500" style={{width: 405, height: 63, left: 272, top: 196, position: 'absolute'}}>
    {/* <div className="EmailOrUsername" style={{width: 168, height: 19, left: "50%", top: 23, position: 'absolute', color: '#CCC9C9', fontSize: 16, fontFamily: 'League Spartan', fontWeight: '500', wordWrap: 'break-word'}}>Email or Username</div> */}
    <input className="Rectangle2071" placeholder="Email or Username" style={{fontSize: 16, fontFamily: 'League Spartan', fontWeight: '500', wordWrap: 'break-word',width: 405, height: 63, left: "50%", top: 0, position: 'absolute', borderRadius: 2, border: '0.50px #1F7564 solid'}} />
  </div>
  
  <div className="Group446" style={{width: 42.40, height: 23.28, left: "50%", top: 397.24, position: 'absolute'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="43" height="25" viewBox="0 0 43 25" fill="none">
        <g filter="url(#filter0_i_214_861)">
          <rect x="0.23999" y="0.23999" width="42.4" height="23.2784" rx="11.6392" fill="#1F7564"/>
        </g>
        <g filter="url(#filter1_d_214_861)">
          <rect x="19.3199" y="2.35999" width="19.9529" height="19.9529" rx="9.97647" fill="#F9F9F9"/>
        </g>
        <defs>
          <filter id="filter0_i_214_861" x="0.23999" y="-0.76001" width="42.4" height="24.2784" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-1"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0.2 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_214_861"/>
          </filter>
          <filter id="filter1_d_214_861" x="17.3199" y="0.359993" width="23.9529" height="23.9529" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_861"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_214_861" result="shape"/>
          </filter>
        </defs>
      </svg>
    {/* <div className="Rectangle1747" style={{width: 42.40, height: 23.28, left: 0, top: 0, position: 'absolute', background: '#1F7564', borderRadius: 16}} />
    <div className="Rectangle1747" style={{width: 19.95, height: 19.95, left: 19.08, top: 2.12, position: 'absolute', background: '#F9F9F9', borderRadius: 16}} /> */}
  </div>

  <div className="Group501" style={{width: 405, height: 64, left: 272, top: 308, position: 'absolute'}}>
    <div className="Password" style={{width: 85, height: 19, left: "52%", top: 24, position: 'absolute', color: '#CCC9C9', fontSize: 16, fontFamily: 'League Spartan', fontWeight: '500', wordWrap: 'break-word'}}>Password</div>
    {/* <div className="Rectangle2075" style={{width: 405, height: 64, left: "50%", top: 0, position: 'absolute', borderRadius: 2, border: '0.50px #1F7564 solid'}} /> */}
    <input className="Rectangle2071" placeholder="Password" style={{fontSize: 16, fontFamily: 'League Spartan', fontWeight: '500', wordWrap: 'break-word',width: 405, height: 63, left: "50%", top: 0, position: 'absolute', borderRadius: 2, border: '0.50px #1F7564 solid'}} />

    <a href="#" className="Group450" style={{width: 29.68, height: 27.56, left: 550, top: 20, position: 'absolute'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
        <path d="M30.5146 15.5664C30.4713 15.6606 29.4239 17.9013 27.0952 20.1468C23.9924 23.1387 20.0734 24.72 15.7599 24.72C11.4464 24.72 7.52743 23.1387 4.42463 20.1468C2.09598 17.9013 1.04358 15.657 1.00524 15.5664C0.948988 15.4444 0.919922 15.3123 0.919922 15.1788C0.919922 15.0453 0.948988 14.9132 1.00524 14.7912C1.04852 14.697 2.09598 12.4575 4.42463 10.212C7.52743 7.22125 11.4464 5.63999 15.7599 5.63999C20.0734 5.63999 23.9924 7.22125 27.0952 10.212C29.4239 12.4575 30.4713 14.697 30.5146 14.7912C30.5709 14.9132 30.5999 15.0453 30.5999 15.1788C30.5999 15.3123 30.5709 15.4444 30.5146 15.5664ZM15.7599 7.54799C11.9535 7.54799 8.62806 8.8824 5.87524 11.5131C4.74572 12.5962 3.78476 13.8313 3.02225 15.18C3.78455 16.5288 4.74554 17.7639 5.87524 18.8469C8.62806 21.4776 11.9535 22.812 15.7599 22.812C19.5664 22.812 22.8918 21.4776 25.6446 18.8469C26.7763 17.7642 27.7394 16.529 28.5038 15.18C27.6121 13.5749 23.7278 7.54799 15.7599 7.54799ZM15.7599 20.904C14.5859 20.904 13.4382 20.5683 12.4621 19.9393C11.4859 19.3104 10.7251 18.4164 10.2758 17.3705C9.82649 16.3245 9.70893 15.1736 9.93798 14.0633C10.167 12.9529 10.7324 11.933 11.5625 11.1325C12.3927 10.332 13.4504 9.78684 14.6019 9.56598C15.7533 9.34512 16.9469 9.45847 18.0315 9.89171C19.1162 10.3249 20.0433 11.0586 20.6955 11.9999C21.3478 12.9412 21.6959 14.0479 21.6959 15.18C21.6943 16.6976 21.0684 18.1526 19.9555 19.2257C18.8426 20.2988 17.3337 20.9024 15.7599 20.904ZM15.7599 11.364C14.9772 11.364 14.2121 11.5878 13.5613 12.0071C12.9106 12.4264 12.4033 13.0224 12.1038 13.7197C11.8043 14.417 11.7259 15.1842 11.8786 15.9245C12.0313 16.6647 12.4082 17.3446 12.9617 17.8783C13.5151 18.412 14.2202 18.7754 14.9879 18.9227C15.7555 19.0699 16.5512 18.9943 17.2743 18.7055C17.9974 18.4167 18.6155 17.9276 19.0503 17.3C19.4852 16.6725 19.7173 15.9347 19.7173 15.18C19.7173 14.1679 19.3003 13.1973 18.5582 12.4817C17.816 11.766 16.8095 11.364 15.7599 11.364Z" fill="#B8B6B6"/>
        <path d="M3.04004 28.96L28.48 1.39999" stroke="#C6C3C3" stroke-linecap="round"/>
      </svg>
      {/* <div className="Vector" style={{width: 29.68, height: 19.08, left: 0, top: 23.32, position: 'absolute', background: '#B8B6B6'}}></div> */}
      {/* <div className="Line1" style={{width: 37.51, height: 0, left: 2.12, top: 27.56, position: 'absolute', transform: 'rotate(-47.29deg)', transformOrigin: '0 0', background: '#B8B6B6', border: '0.50px #C6C3C3 solid'}}></div> */}
    </a>

  </div>
</div>
  );
};