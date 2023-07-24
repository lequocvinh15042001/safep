import React from "react";
import { Link } from "react-router-dom";
// import ictwotonefacebook from "../../assets/ic_twotone-facebook.png";

export const Counselling = () => {
  return (
<div className="Frame19" style={{width: 960, height: 1276, position: 'relative', background: 'white'}}>
  <div className="CounsellingRoom" style={{left: 48, top: 47, position: 'absolute', color: '#1F7564', fontSize: 50, fontFamily: 'Signika', fontWeight: '700', wordWrap: 'break-word'}}>Counselling Room</div>

  {/* Button tin nhắn */}
  <button className="Rectangle2070" style={{border: "none",width: 65, height: 59, left: 791, top: 183, position: 'absolute', background: '#1F7564', boxShadow: '0px 0px 2px rgba(26, 26, 26, 0.20)', borderRadius: 5, cursor:"pointer"}}>
  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
  <g filter="url(#filter0_d_312_747)">
    <path d="M10.5707 26L17.0924 19.4783H28C29.1046 19.4783 30 18.5828 30 17.4783V3C30 1.89543 29.1046 1 28 1H7C5.89543 1 5 1.89543 5 3V17.4783C5 18.5828 5.89543 19.4783 7 19.4783H10.5707V26Z" stroke="#5DC674" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
  </g>
  <defs>
    <filter id="filter0_d_312_747" x="0.25" y="0.25" width="34.5" height="34.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_312_747"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_312_747" result="shape"/>
    </filter>
  </defs>
</svg>
  </button>

  {/* button phone */}
  <button className="Rectangle2071" style={{border: "none", width: 65, height: 59, left: 876, top: 183, position: 'absolute', background: 'rgba(255, 255, 255, 0.80)', boxShadow: '0px 0px 2px rgba(26, 26, 26, 0.20)', borderRadius: 5, cursor:"pointer"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
        <path d="M36.5814 33.4657C36.5814 33.4657 34.23 35.813 33.6538 36.5011C32.7151 37.5192 31.6091 38 30.1592 38C30.0198 38 29.8711 38 29.7317 37.9906C26.9714 37.8115 24.4062 36.718 22.4823 35.7847C17.2219 33.2018 12.6028 29.5348 8.76433 24.8874C5.59506 21.013 3.47602 17.4308 2.07262 13.5847C1.20827 11.2375 0.892271 9.40866 1.03168 7.68357C1.12462 6.58064 1.54285 5.66624 2.31426 4.88382L5.48353 1.6693C5.93894 1.23567 6.42223 1 6.89623 1C7.48175 1 7.95575 1.35822 8.25316 1.65987C8.26245 1.6693 8.27174 1.67873 8.28104 1.68815C8.84798 2.22548 9.38703 2.78166 9.95397 3.37554C10.2421 3.6772 10.5395 3.97885 10.8369 4.28994L13.3742 6.86344C14.3593 7.86268 14.3593 8.7865 13.3742 9.78573C13.1046 10.0591 12.8444 10.3325 12.5749 10.5964C11.7942 11.4071 12.4075 10.7851 11.5989 11.5204C11.5803 11.5392 11.5617 11.5487 11.5524 11.5675C10.7531 12.3782 10.9018 13.1701 11.0691 13.7074C11.0784 13.7357 11.0877 13.7639 11.097 13.7922C11.7569 15.4136 12.6863 16.9408 14.099 18.7601L14.1083 18.7695C16.6734 21.9746 19.378 24.4727 22.3614 26.3864C22.7425 26.6315 23.1328 26.8294 23.5046 27.018C23.8391 27.1876 24.1551 27.3479 24.4247 27.5176C24.4619 27.5364 24.499 27.5647 24.5362 27.5836C24.8522 27.7438 25.1496 27.8192 25.4563 27.8192C26.2277 27.8192 26.711 27.329 26.869 27.1688L28.6908 25.321C29.0068 25.0005 29.5086 24.614 30.0942 24.614C30.6704 24.614 31.1444 24.9817 31.4325 25.3022C31.4418 25.3116 31.4418 25.3116 31.4511 25.321L36.5721 30.5152C37.5294 31.4767 36.5814 33.4657 36.5814 33.4657Z" stroke="#5DC674" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  {/* Message */}
  <div className="Rectangle2072" style={{width: 417, height: 69, left: 60, top: 305, position: 'absolute', background: 'rgba(255, 255, 255, 0.80)', boxShadow: '0px 0px 2px rgba(26, 26, 26, 0.20)', borderRadius: 16}} />
  <div className="Vector5" style={{width: 25, height: 25, left: 811, top: 201, position: 'absolute'}}>

  </div>
  <div className="Vector" style={{width: 36, height: 37, left: 891, top: 195, position: 'absolute'}}></div>

  <div className="LoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrySStandardDummyTextEverSinceThe1500sWhenAnUnknownPrinterTookAGalleyOfTypeAndScrambledItToMakeATypeSpecimenBook" style={{width: 397, height: 22, left: 68, top: 315, position: 'absolute', textAlign: 'justify', color: '#1A1A1A', fontSize: 12, fontFamily: 'League Spartan', fontWeight: '400', wordWrap: 'break-word'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
  <img src="https://s3-alpha-sig.figma.com/img/7928/d02e/d7eece7bfb8d472509f3b1a39f18a0f3?Expires=1690761600&Signature=TLk4MAOdBSZuBy7aqKORD9sv1Rch4hfuFy0Y-aCqFaO~mNSGOKMSI9vo3O5LSSKI4EhaBzwhfzAt8U-TsLL7-ExVHCkOH0lBSbDuA2pltqvwAyJ42dT9F8lOp0yQ0C0qvX7r5HLetTLBG~D7oBzP0TC8ZFRb3FsWQgHmXhSCGAbENckvV4tDxfMRLWVM-Yqfc60VItySAuRqS6x3E7vBLhH~2MOOajfFFE2rCN-DnH0dGJ6skZKfU8wI81rn2rhvvEZUCQ3JtTgW0Ad7~jEwYE7cqgj05Vk-t1iq~dhG8YHuYqqn08vNBSBLjEsq1UYtuz0fEhy1jJlfbBIqfs7hWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="Ellipse6" style={{width: 24, height: 24, left: 24, top: 333, position: 'absolute', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 9999}} />


  <div className="Group499" style={{width: 539, height: 84, left: 224, top: 1130, position: 'absolute'}}>
    <a href="#" className="AboutUs" style={{left: 0, top: 6, position: 'absolute', color: '#1A1A1A', fontSize: 13, fontFamily: 'Signika', fontWeight: '700', wordWrap: 'break-word', textDecoration:"none"}}>About us</a>
    <a href="#" className="ContactUs" style={{left: 1, top: 28, position: 'absolute', color: 'rgba(26, 26, 26, 0.50)', fontSize: 11, fontFamily: 'Signika', fontWeight: '700', wordWrap: 'break-word', textDecoration:"none"}}>Contact us</a>
    <a href="#" className="AboutSafePlace" style={{left: 1, top: 50, position: 'absolute', color: 'rgba(26, 26, 26, 0.50)', fontSize: 11, fontFamily: 'Signika', fontWeight: '700', wordWrap: 'break-word',textDecoration:"none"}}>About safe place</a>
    <a href="#" className="TermAndCondition" style={{left: 1, top: 70, position: 'absolute', color: 'rgba(26, 26, 26, 0.50)', fontSize: 11, fontFamily: 'Signika', fontWeight: '700', wordWrap: 'break-word',textDecoration:"none"}}>Term and condition</a>
    <a href="#" className="AboutUs" style={{left: 150, top: 27, position: 'absolute', color: 'rgba(26, 26, 26, 0.50)', fontSize: 11, fontFamily: 'Signika', fontWeight: '700', wordWrap: 'break-word',textDecoration:"none"}}>About us</a>
    <a href="#" className="Support" style={{left: 284, top: 27, position: 'absolute', color: 'rgba(26, 26, 26, 0.50)', fontSize: 11, fontFamily: 'Signika', fontWeight: '700', wordWrap: 'break-word',textDecoration:"none"}}>Support</a>
    <a href="#" className="FreeMobileApp" style={{left: 284, top: 46, position: 'absolute', color: 'rgba(26, 26, 26, 0.50)', fontSize: 11, fontFamily: 'Signika', fontWeight: '700', wordWrap: 'break-word',textDecoration:"none"}}>Free Mobile App</a>
    <a href="#" className="Commuities" style={{left: 149, top: 6, position: 'absolute', color: '#1A1A1A', fontSize: 13, fontFamily: 'Signika', fontWeight: '700', wordWrap: 'break-word',textDecoration:"none"}}>Commuities</a>
    <a href="#" className="UsefulLinks" style={{left: 284, top: 6, position: 'absolute', color: '#1A1A1A', fontSize: 13, fontFamily: 'Signika', fontWeight: '700', wordWrap: 'break-word',textDecoration:"none"}}>Useful links</a>
    
    {/* Icon MXH */}
    <div className="IcTwotoneFacebook" style={{width: 24, height: 24, left: 477, top: 0, position: 'absolute'}}>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="black"/>
          </svg>
        </a>
    </div>
    <div className="EntypoSocialYoutubeWithCircle" style={{width: 24, height: 24, left: 519, top: 2, position: 'absolute'}}>
      <a href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_312_722)">
          <path d="M11.6034 9.83302L9.35739 8.78502C9.16139 8.69403 9.00039 8.79602 9.00039 9.01302V10.987C9.00039 11.204 9.16139 11.306 9.35739 11.215L11.6024 10.167C11.7994 10.075 11.7994 9.92502 11.6034 9.83302ZM10.0004 0.400024C4.69839 0.400024 0.400391 4.69802 0.400391 10C0.400391 15.302 4.69839 19.6 10.0004 19.6C15.3024 19.6 19.6004 15.302 19.6004 10C19.6004 4.69802 15.3024 0.400024 10.0004 0.400024ZM10.0004 13.9C5.08639 13.9 5.00039 13.457 5.00039 10C5.00039 6.54303 5.08639 6.10002 10.0004 6.10002C14.9144 6.10002 15.0004 6.54303 15.0004 10C15.0004 13.457 14.9144 13.9 10.0004 13.9Z" fill="black"/>
        </g>
        <defs>
          <clipPath id="clip0_312_722">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </a>
    </div>
  </div>
</div>

  );
};