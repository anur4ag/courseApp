import "../styles.css";

function Footer() {
    return (
       
        <div className="bg-black-color text-white">
            <footer className="footer-02" id="footer" >
                <div className="container">
                    <div className="footer-02__wrapper">
                        <div className="footer-02__text content_box" style={{color: "white"}}>
                            &copy; 2023&nbsp;Explore. Learn. Share. CourseShare.
                        </div>
                        <div className="social-buttons">
                            <ul className="social-buttons__list">
                                <li className="social-buttons__item">
                                    <a
                                        className="social-buttons__link social-buttons__link--linkedin"
                                        href="https://www.linkedin.com/in/abir-dutta-408759223/"
                                        target="_blank"
                                    ><img
                                            loading="lazy"
                                            className="social-buttons__icon"
                                            alt="linkedin icon"
                                            src="https://dvzvtsvyecfyp.cloudfront.net/static/img/icons/social/white/linkedin.svg"
                                        /></a>
                                </li>
                                <li className="social-buttons__item">
                                    <a
                                        className="social-buttons__link social-buttons__link--twitter"
                                        href="https://twitter.com/ItsDutta99"
                                        target="_blank"
                                    ><img
                                            loading="lazy"
                                            className="social-buttons__icon"
                                            alt="twitter icon"
                                            src="https://dvzvtsvyecfyp.cloudfront.net/static/img/icons/social/white/twitter.svg"
                                        /></a>
                                </li>
                                <li className="social-buttons__item">
                                    <a
                                        className="social-buttons__link social-buttons__link--github"
                                        href="https://github.com/DeadmanAbir"
                                        target="_blank"
                                    ><img
                                            loading="lazy"
                                            className="social-buttons__icon"
                                            alt="github icon"
                                            src="https://dvzvtsvyecfyp.cloudfront.net/static/img/icons/social/white/github.svg"
                                        /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        
        
    )
}
export default Footer;