import "./styleHome.css";

import { ComponentHome } from "../../componentsHome/ComponentHome";
import { ComponentWrapper } from "../../componentsHome/ComponentWrapper";
// import { FrameHome } from "../../components/Frame";
import {Link} from "react-router-dom"
import React from "react";

export const Home = () => {
  return (
    <div className="frame-screen">
      <div className="frame-2">
        <div className="overlap">
          <div className="text-wrapper">Speaker&#39;s name</div>
          <div className="text-wrapper-2">Podcast name 01</div>
          <div className="group-2" /> 
          <div className="group-3">
            <Link to={"#"}>
            <div className="play">
              <img
                className="icon"
                alt="Icon"
                src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/icon-5.svg"
              />
            </div>
            </Link>
            <div className="div-wrapper">
              <div className="overlap-group-3">
                <span className="text-wrapper-3">15</span>
                <img
                  className="icon-2"
                  alt="Icon"
                  src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/icon-4.svg"
                />
              </div>
            </div>
            <div className="group-4">
              <div className="overlap-group-3">
                <div className="text-wrapper-3">15</div>
                <img
                  className="icon-2"
                  alt="Icon"
                  src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/icon-3.svg"
                />
              </div>
            </div>
            <img
              className="icon-3"
              alt="Icon"
              src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/icon-2.svg"
            />
            <img
              className="icon-4"
              alt="Icon"
              src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/icon-1.svg"
            />
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-4">00:00</div>
            <div className="text-wrapper-5">22:10</div>
            <div className="rectangle-2home" />
            <div className="ellipse" />
          </div>
          <img
            className="vector-2"
            alt="Vector"
            src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/vector.svg"
          />
          <img
            className="icon-5"
            alt="Icon"
            src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/icon.svg"
          />
        </div>
        <div className="overlap-3">
          <div className="overlap-4">
            <div className="p-wrapper">
              <p className="p">Do you have anything you want to share?</p>
            </div>
            <img
              className="icon-6"
              alt="Icon"
              src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/icon-8.svg"
            />
            <div className="group-wrapper">
              <div className="group-5" />
            </div>
            <div className="text-wrapper-6">public identity</div>
            <div className="text-wrapper-7">Anonymous post</div>
          </div>
          <div className="overlap-5">
            <div className="rectangle-3" />
            <div className="text-wrapper-8">Podcast</div>
            <img
              className="rectangle-4"
              alt="Rectangle"
              src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/rectangle-1906.svg"
            />
            <img
              className="ooui-next-ltr"
              alt="Ooui next ltr"
              src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/ooui-next-ltr.svg"
            />
            <img
              className="ooui-next-rtl"
              alt="Ooui next rtl"
              src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/ooui-next-rtl.svg"
            />
            <div className="text-wrapper-9">Recently Posted</div>
            <a href="#" className="text-wrapper-10">Show all</a>
            <a href="#" className="text-wrapper-11">Show all</a>
            <ComponentHome className="component-1" />
            <ComponentHome className="component-instance" />
            <ComponentHome className="design-component-instance-node" groupClassName="component-1-instance" />
            <ComponentHome className="component-2" />
            <ComponentHome className="component-3" groupClassName="component-4" />
            <ComponentHome className="component-5" />
            <ComponentHome className="component-6" />
            <ComponentHome className="component-7" />
            <ComponentHome className="component-8" groupClassName="component-1-instance" />
            <ComponentHome className="component-9" />
            <div className="rectangle-5" />
            <div className="text-wrapper-12">Install App</div>
            <Link to={"/counselling"}>
              <div className="rectangle-v" />
              <div className="text-wrapper-v">Counselling Room</div>
            </Link>
            <div className="group-6">
              <div className="overlap-6">
                <p className="lorem-ipsum-is">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
                <div className="text-wrapper-13">1 min. ago</div>
                <div className="text-wrapper-14">Anoymous_0001</div>
                <div className="text-wrapper-15">10k</div>
                <div className="text-wrapper-16">5.2k</div>
                <div className="text-wrapper-17">3.5k</div>
                <img
                  className="icon-7"
                  alt="Icon"
                  src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/icon-7.svg"
                />
                <img
                  className="vector-3"
                  alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/vector-4.svg"
                />
                <img
                  className="vector-4"
                  alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/vector-3.svg"
                />
                <div className="overlap-group-4">
                  <div className="text-wrapper-18"># hashtag_01</div>
                </div>
                <div className="overlap-7">
                  <div className="text-wrapper-19"># hashtag_02</div>
                </div>
                <div className="overlap-8">
                  <div className="text-wrapper-20"># hashtag_03</div>
                </div>
              </div>
            </div>
            <div className="group-7">
              <div className="overlap-6">
                <p className="lorem-ipsum-is">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
                <div className="text-wrapper-13">1 min. ago</div>
                <div className="text-wrapper-21">Anoymous_0002</div>
                <div className="text-wrapper-15">10k</div>
                <div className="text-wrapper-16">5.2k</div>
                <div className="text-wrapper-17">3.5k</div>
                <img
                  className="icon-7"
                  alt="Icon"
                  src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/icon-7.svg"
                />
                <img
                  className="vector-3"
                  alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/vector-4.svg"
                />
                <img
                  className="vector-4"
                  alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/vector-3.svg"
                />
                <div className="overlap-group-4">
                  <div className="text-wrapper-18"># hashtag_01</div>
                </div>
                <div className="overlap-7">
                  <div className="text-wrapper-19"># hashtag_02</div>
                </div>
                <div className="overlap-8">
                  <div className="text-wrapper-20"># hashtag_03</div>
                </div>
              </div>
            </div>
            <Link to={"/account"}>
            <img
              className="ellipse-2"
              alt="Ellipse"
              src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/ellipse-6.svg"
            />
            </Link>
            <div className="text-wrapper-22">Vietnam (English)</div>
          </div>
          {/* <Frame className="frame-instance" /> */}
          <ComponentWrapper
            clarityLibrary="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/clarity-library-solid.svg"
            className="component-15"
            materialSymbolsAdd="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/material-symbols-add.svg"
            to="/frame-6"
            to1="/frame-6"
          />
        </div>
        <div className="group-8">
          <div className="text-wrapper-23">About us</div>
          <div className="text-wrapper-24">Contact us</div>
          <div className="text-wrapper-25">About safe place</div>
          <div className="text-wrapper-26">Term and condition</div>
          <div className="text-wrapper-27">About us</div>
          <div className="text-wrapper-28">Support</div>
          <div className="text-wrapper-29">Free Mobile App</div>
          <div className="text-wrapper-30">Commuities</div>
          <div className="text-wrapper-31">Useful links</div>
          <a href="https://www.facebook.com/safeplacevietnam" rel="noopener noreferrer" target="_blank">
            <img
              className="ic-twotone-facebook"
              alt="Ic twotone facebook"
              src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/ic-twotone-facebook.svg"
            />
          </a>
          <img
            className="entypo-social"
            alt="Entypo social"
            src="https://generation-sessions.s3.amazonaws.com/00a1d99e487596f2ee1ddca7390232ca/img/entypo-social-youtube-with-circle.svg"
          />
        </div>
      </div>
    </div>
  );
};
