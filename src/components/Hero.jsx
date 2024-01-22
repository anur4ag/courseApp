import "../styles.css";
import Course from "../assets/course.png";
import { Link } from "react-router-dom";
function Hero({logged}) {
    return (
        <div
            className="page-component__bg_image_box bg-light-color"
            id="header-23-457101"
        >
            <div className="page-component__bg_overlay_box" ></div>

            <div
                className="page-component__wrapper"
                style={{ zIndex: 10, paddingTop: "50px", paddingBottom: "80px" }}
            >
                <header className="header-23 graphics-image default-graphics-image">
                    <div className="container container--large header-23__container">
                        <div className="header-23__left">
                            <div className="header-23__left_content">
                                <h1 className="heading heading--accent header-23__heading">
                                    Welcome to CourseShare - Explore and Share Knowledge with
                                    CourseShare Platform
                                </h1>

                                <div className="header-23__text content_box">
                                A platform where admins create and share courses, while users access a diverse range of educational content. With a user-friendly interface, CourseShare enables seamless learning and teaching experiences, fostering a vibrant community of knowledge exchange. Join us to explore, learn, and grow together.
                                </div>

                                <div className="header-23__cta_box">
                                    <form
                                        className="form form--centered-button js-no-integration-form"
                                        action=""
                                        method="GET"
                                        data-sheet-id=""
                                    >
                                        <div className="form__inputs">
                                            <div className="form__messages_box">
                                                <div className="form__messages">
                                                    <div
                                                        className="message message--error js-message js-error-message"
                                                    >
                                                        <div className="message__box">
                                                          
                                                              
                                                            
                                                            <div className="message__body">
                                                                <div className="message__in">
                                                                    <div className="message__bubble">
                                                                        <div className="message__bubble_text">
                                                                            <b>Error.</b> Your form has not been
                                                                            submitted<img
                                                                                loading="lazy"
                                                                                className="emoji"
                                                                                src="https://dvzvtsvyecfyp.cloudfront.net/static/img/twemoji/1f914.svg"
                                                                                alt="Emoji"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="message__bubble">
                                                                        <div className="message__bubble_text">
                                                                            This is what the server says:
                                                                            <div
                                                                                className="message__bubble_error js-error-message-text"
                                                                            >
                                                                                There must be an @ at the beginning.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="message__out">
                                                                    <div className="message__out_box">
                                                                        <div className="message__bubble">
                                                                            <div
                                                                                className="message__bubble_text message__bubble_text--out js-reaction-text"
                                                                            >
                                                                                I will retry
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="message__reply_box">
                                                                <div className="message__reply_word">Reply</div>
                                                                <div className="message__options">
                                                                    <div className="message__option">
                                                                        <button
                                                                            className="button js-react-on-message button--ruby-bg"
                                                                            type="submit"
                                                                        >
                                                                            <span className="button__text">Uh oh!</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="message__option">
                                                                        <button
                                                                            className="button js-react-on-message button--ruby-bg"
                                                                            type="submit"
                                                                        >
                                                                            <span className="button__text"
                                                                            >I will retry</span
                                                                            >
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       {logged? (null): ( <div className="content_box cta_bottom_info">
                                            Already have an account? <Link to="/login">Login to CourseShare</Link>
                                        </div>)}
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="header-23__right">
                            <img
                                className="header-23__img"
                                alt="Course"
                                src={Course}
                              
                                sizes="(max-width: 320px) 290px, (max-width: 375px) 345px, (max-width: 425px) 395px, (max-width: 600px) 500px, (max-width: 1020px) 500px, 620px"
                            />
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}
export default Hero;