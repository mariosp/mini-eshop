import React from "react";

const Footer = () => {

    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Site Map</h5>
                        <ul className="list-unstyled">
                            <li><a>Products</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Shop Address</h5>
                        <address>
                            Athens N.Irakleio<br />
                            Greece<br />
                            <i className="fa fa-phone fa-lg mr-3"></i><a href="tel:mariospatsis@gmail.com">6980477426</a><br />
                            <i className="fa fa-envelope fa-lg mr-3"></i><a href="mailto:mariospatsis@gmail.com">
                            mariospatsis@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn" href="http://www.facebook.com/patsis"><i className="fa fa-facebook"></i></a>
                            <a className="btn" href="http://www.linkedin.com/in/patsis"><i className="fa fa-linkedin"></i></a>
                            <a className="btn" href="mailto:mariospatsis@gmail.com"><i className="fa fa-envelope-o"></i></a>
                            <a className="btn" href="http://www.github.com/mariosp"><i className="fa fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
