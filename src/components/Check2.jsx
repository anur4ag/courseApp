import Footer from "./Footer";
import "../Check2.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import renderImage from "../assets/render image.png"
function Check2({set}){
  const navigate=useNavigate();
  const [selectedRole, setSelectedRole] = useState("");
  function handle(event){
    event.preventDefault();
    // window.alert(selectedRole);
    if(selectedRole=="Instructor"){
      set("admin");
      return navigate("/signup");
    }
    if(selectedRole=="Student"){
      set("user");
      return navigate("/signup");
    }

  }
    return (
        <body class="font-work-sans comps" id="96694-196348">
        <div className="page-component__bg_image_box bg-light-color first_component" id="header-23-457101">
          <div className="page-component__bg_overlay_box" style={{}}></div>
    
          <div className="page-component__wrapper" style={{ zIndex: 10, paddingTop: "70px", paddingBottom: "70px" }}>
            <header className="header-23 graphics-image default-graphics-image">
              <div className="container container--large header-23__container">
                <div className="header-23__left">
                  <div className="header-23__left_content">
                    <h1 className="heading heading--accent header-23__heading">
                      Welcome to CourseShare
                    </h1>
    
                    <div className="header-23__text content_box">
                      Connect with instructors and explore a wide range of courses.
                      Sign in as a student to enroll in courses or as an instructor
                      to create and sell your own courses.
                    </div>
    
                    <div className="header-23__cta_box">
                      <form className="form js-no-integration-form" action="" method="GET" data-sheet-id="">
                        <div className="form__inputs">
                          <div className="form__input">
                            <div className="form__input__label_box">
                              <label className="form__input__label" htmlFor="role-96694-0">
                                <span className="form__input__label_asterix" title="This field is required.">*</span>
                                Role
                              </label>
                            </div>
                            <select required className="text-input" name="role" id="role-96694-0"  onChange={(e) => setSelectedRole(e.target.value)} >
                              <option value="">Select...</option>
                              <option value="Student">Student</option>
                              <option value="Instructor">Instructor</option>
                            </select>
                          </div>
    
                          <div className="form__button">
                            <button className="button js-submit-button button--accent-bg" type="submit" onClick={handle}>
                              <span className="button__text">Get Started</span>
                              <div className="spinner"></div>
                              <div className="button__submit_success">
                                <div className="button__success_circle"></div>
                                <div>
                                  <svg className="button__success_tick" width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                                    <path className="button__success_tick_path" stroke="#FFF" d="M0 8l5.119 3.873L11.709.381" fill="none" fillRule="evenodd" strokeLinecap="square" />
                                  </svg>
                                </div>
                              </div>
                              <span className="icon"><svg viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.823 4.164L8.954.182a.592.592 0 0 0-.854 0 .635.635 0 0 0 0 .88l2.836 2.92H.604A.614.614 0 0 0 0 4.604c0 .344.27.622.604.622h10.332L8.1 8.146a.635.635 0 0 0 0 .88.594.594 0 0 0 .854 0l3.869-3.982a.635.635 0 0 0 0-.88z" fillRule="nonzero" fill="#00396B" className="fill-main" /></svg></span>
                            </button>
                          </div>
    
                          <div className="form__messages_box">
                            <div className="form__messages">
                              <div className="message message--error js-message js-error-message">
                                <div className="message__box">
                                  <button className="message__close js-close-message" type="button">
                                    <img loading="lazy" className="message__close_icon" src="https://dvzvtsvyecfyp.cloudfront.net/static/img/icons/corner-top--blue.svg" />
                                  </button>
                                  <div className="message__body">
                                    <div className="message__in">
                                      <div className="message__bubble">
                                        <div className="message__bubble_text">
                                          <b>Error.</b> Your form has not been submitted<img loading="lazy" className="emoji" src="https://dvzvtsvyecfyp.cloudfront.net/static/img/twemoji/1f914.svg" alt="Emoji" />
                                        </div>
                                      </div>
                                      <div className="message__bubble">
                                        <div className="message__bubble_text">
                                          This is what the server says:
                                          <div className="message__bubble_error js-error-message-text">
                                            There must be an @ at the beginning.
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="message__out">
                                      <div className="message__out_box">
                                        <div className="message__bubble">
                                          <div className="message__bubble_text message__bubble_text--out js-reaction-text">
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
                                        <button className="button js-react-on-message button--ruby-bg" type="submit">
                                          <span className="button__text">Uh oh!</span>
                                        </button>
                                      </div>
                                      <div className="message__option">
                                        <button className="button js-react-on-message button--ruby-bg" type="submit">
                                          <span className="button__text">I will retry</span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content_box cta_bottom_info">
                          By clicking Get Started, you agree to our Terms of Service
                          and Privacy Policy.
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="header-23__right">
                  <img className="header-23__img" alt="Check2 image" src={renderImage} srcSet="https://unicorn-cdn.b-cdn.net/2ed94f7c-1158-4c49-ba45-769169adaf51/Check2-image.png?width=225&height=225 225w," sizes="(max-width: 320px) 225px,(max-width: 375px) 225px,(max-width: 425px) 225px,(max-width: 600px) 225px,(max-width: 1020px) 225px,225px" />
                </div>
              </div>
            </header>
          </div>
        </div>
        <Footer />
        </body>
      );
}
export default Check2;