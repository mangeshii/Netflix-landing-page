import "./Footer.scss";
const Footer = () => {
    return (
        <div className="footer container-fluid d-flex justify-content-center">
            <div className="cols">
                <div className="footer-content col-md-7 mx-auto">
                    <h3>Questions? Call 000-800-040-1843</h3>
                    <div className="d-flex ">
                        <div className="row">
                            <div className="col1 col-md-3 col-sm-6">
                                <ul>
                                    <li>FAQ</li>
                                    <li>Investor Relations</li>
                                    <li>Privacy</li>
                                    <li>Speed Test</li>
                                </ul>
                            </div>
                            <div className="col2 col-md-3 col-sm-6">
                                <ul>
                                    <li>Help Center</li>
                                    <li>Jobs</li>
                                    <li>Cookie Preferences</li>
                                    <li>Legal Notices</li>
                                </ul>
                            </div>
                            <div className="col3 col-md-3 col-sm-6">
                                <ul>
                                    <li>Account</li>
                                    <li>Ways to Watch</li>
                                    <li>Corporate Information</li>
                                    <li>Only on Netflix</li>
                                </ul>
                            </div>
                            <div className="col3 col-md-3 col-sm-6">
                                <ul>
                                    <li>Media Centre</li>
                                    <li>Terms of use</li>
                                    <li>Contact us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
