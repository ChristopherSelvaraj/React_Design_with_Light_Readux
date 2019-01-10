import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component{
    render(){
        return(
            <div id="Footer" className="footer">
                <div className="vp-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                Copyright ©2018 Xome Valuation. All Rights Reserved.<a href="/pages/terms-of-use" target="_top">Terms of Use</a> and <a href="/pages/privacy-policy" target="_top">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;

/* 

<div className="container">
    <div className="row">
        <div className="col-sm-4">
            <div className="vp_logo" style={{marginTop: "20px"}}>
                <img src='/contents/image/XomeLogo.png' alt="Logo" />
            </div>
        </div>
        <div className="col-sm-4">
            <div className="vp-footer-header">
                Links
            </div>
            <div className="vp-footer-links">
                <ul>
                    <li><Link to="/UI" >Orders</Link></li>
                    <li><Link to="/UI/ScoreCard" >DashBoard</Link></li>
                    <li><Link to="/UI/Help" >Help</Link></li>
                </ul>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="vp-footer-header">
                Xome
            </div>
            <div className="vp-footer-links">
                <ul>
                    <li><a href="https://www.xome.com" target="_blank">Xome.com</a></li>
                    <li><a href="https://www.xome.com/auctions/" target="_blank">Xome Auction</a></li>
                    <li><a href="https://www.xome.com/pages/xome-valuation" target="_blank">Xome Valuation</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
*/