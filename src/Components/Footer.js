import React from 'react'
import logo from '../Images/logo.png'
export default function Footer() {
    return (
        <div className="tr-footer">
            <div className="tr-footer-upper tr-footer-subsection">
                <div className="tr-footer-upper-left">
                    <div className="tr-footer-upper-left-nav"> Blog </div>
                    <div className="tr-footer-upper-left-nav"> About </div>
                    <div className="tr-footer-upper-left-nav"> FAQ </div>
                    <div className="tr-footer-upper-left-nav"> Privacy Policy </div>
                    <div className="tr-footer-upper-left-nav"> Terms of service </div>
                    <div className="tr-footer-upper-left-nav"> Careers </div>
                    <div className="tr-footer-upper-left-nav"> Contact </div>
                </div>
                <div className="tr-footer-upper-right">
                    <div className="tr-footer-upper-right-apple tr-footer-upper-right-download"> 
                        <div className="download-store-icon"><i class="fab fa-apple"></i></div>
                        <div className="download-text">
                            Download from
                            <br />
                            AppStore
                        </div>
                    </div>
                    <div className="tr-footer-upper-right-play tr-footer-upper-right-download">
                        <div className="download-store-icon"><i class="fab fa-google-play"></i></div>
                        <div className="download-text">
                            Download from
                            <br />
                            Google Play
                        </div>
                    </div>
                </div>
            </div>
            <div className="tr-footer-lower tr-footer-subsection">
                <div className="tr-footer-lower-left">
                    <img class="footer-logo" src={logo} alt="" />
                    <div className="styleout-footer">
                        Style Out
                    </div>
                </div>
                <div className="tr-footer-lower-right">
                    <a href="" className="circle-icon"><i className="fab fa-instagram"></i></a>
                    <a href="" className="circle-icon"><i className="fab fa-facebook-f social-icons-footer"></i></a>
                    <a href="" className="circle-icon"><i className="fab fa-twitter social-icons-footer"></i></a>
                </div>
            </div>
        </div>
    )
}
