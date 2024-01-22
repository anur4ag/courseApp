import "../Createcourses.css";

import axios from "axios";
import { useState, useEffect } from "react";
import { auth, firestore } from "../../Server/Firebase/Firebase.jsx";
import { doc, getDoc } from "firebase/firestore";
import { useToast } from "@chakra-ui/react";
function Createcourses({ logged }) {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [imageLink, setImageLink] = useState(null);
  const [creator, setCreator] = useState(null);
  const [userDataFetched, setUserDataFetched] = useState(true);
const toast=useToast();
  useEffect(() => {
    async function getUser() {
      try {
        const userDocRef = doc(firestore, "users", logged.uid);

        const userDocSnapshot = await getDoc(userDocRef);
      
        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          //  setCreator(userData.email);
          //  setUserDataFetched(true);
          //  console.log(creator);
          return setCreator(userData.email.toString());


        }

      } catch (e) {
        console.log(e);
      }
    }
    getUser();
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    // await getUser();
    try {
      if (userDataFetched) {
        const response = await axios.post("http://localhost:3000/admin/courses", {
          title: title,
          description: description,
          price: price,
          imageLink: imageLink,
          published: true,
          creator: creator,
        });
        toast({
          description: "Course created Successfully🎈",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top"
        });
        window.location.reload();
      }



    } catch (e) {
      console.log(e);
    }
  };
  return (
    <body className="font-work-sans comps" id="96637-196264">
      <div
        className="page-component__bg_image_box bg-white-color first_component"
        id="cta_form-04-178051"
      >
        <div className="page-component__bg_overlay_box" style={{}}></div>

        <div
          className="page-component__wrapper"
          style={{ zIndex: 10, paddingTop: '1px', paddingBottom: '70px' }}
        >
          <div className="cta_form-04">
            <div className="container container--mid">
              <div className="cta_form-04__wrapper">
                <div className="cta_form-04__top">
                  <div className="cta_form-04__heading_box">
                    <div className="container container--small">
                      <div className="title-box title-box--center">
                        <h1 className="heading">Create courses seamlessly</h1>
                      </div>
                    </div>
                  </div>
                  <div className="cta_form-04__form_box">
                    <form
                      className="form form--centered-button js-no-integration-form"
                      action=""
                      method="GET"
                      data-sheet-id=""
                      onSubmit={handleSubmit}
                    >
                      <div className="form__inputs">
                        <div className="form__input form__input--full">
                          <div className="form__input__label_box">
                            <label
                              className="form__input__label"
                              htmlFor="COURSE_TITLE-96637-0"
                            >
                              <span
                                className="form__input__label_asterix"
                                title="This field is required."
                              >
                                *
                              </span>

                              Course Title
                            </label>
                          </div>
                          <input
                            className="text-input js-form-input"
                            type="text"
                            id="COURSE_TITLE-96637-0"
                            name="COURSE_TITLE"
                            required
                            placeholder="Enter the title of your course"
                            onChange={(e) => {
                              setTitle(e.target.value)
                            }}
                          />
                        </div>

                        <div className="form__textarea">
                          <div className="form__input__label_box">
                            <label
                              className="form__input__label"
                              htmlFor="COURSE_DESCRIPTION-96637-1"
                            >
                              <span
                                className="form__input__label_asterix"
                                title="This field is required."
                              >
                                *
                              </span>

                              Course Description
                            </label>
                          </div>
                          <textarea
                            required
                            className="textarea js-form-input"
                            id="COURSE_DESCRIPTION-96637-1"
                            name="COURSE_DESCRIPTION"
                            placeholder="Enter a brief description of your course"
                            onChange={(e) => {
                              setDescription(e.target.value)
                            }}
                          ></textarea>
                        </div>

                        <div className="form__input form__input--full">
                          <div className="form__input__label_box">
                            <label
                              className="form__input__label"
                              htmlFor="COURSE_PRICE-96637-2"
                            >
                              <span
                                className="form__input__label_asterix"
                                title="This field is required."
                              >
                                *
                              </span>

                              Course Price
                            </label>
                          </div>
                          <input
                            className="text-input js-form-input"
                            type="text"
                            id="COURSE_PRICE-96637-2"
                            name="COURSE_PRICE"
                            required
                            placeholder="Enter the price of your course"
                            onChange={(e) => {
                              setPrice(e.target.value)
                            }}
                          />
                        </div>

                        <div className="form__input form__input--full">
                          <div className="form__input__label_box">
                            <label
                              className="form__input__label"
                              htmlFor="IMAGE_LINK-96637-3"
                            >
                              <span
                                className="form__input__label_asterix"
                                title="This field is required."
                              >
                                *
                              </span>

                              Image Link
                            </label>
                          </div>
                          <input
                            className="text-input js-form-input"
                            type="url"
                            id="IMAGE_LINK-96637-3"
                            name="IMAGE_LINK"
                            required
                            placeholder="Enter the link to an image representing your course"
                            onChange={(e) => {
                              setImageLink(e.target.value)
                            }}
                          />
                        </div>

                        <div className="form__button form__button--full">
                          <button
                            className="button js-submit-button button--accent-outline"
                            type="submit"
                          >
                            <span className="button__text">Create Course</span>
                            <div className="spinner"></div>
                            <div className="button__submit_success">
                              <div className="button__success_circle"></div>
                              <div>
                                <svg
                                  className="button__success_tick"
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    className="button__success_tick_path"
                                    stroke="#FFF"
                                    d="M0 8l5.119 3.873L11.709.381"
                                    fill="none"
                                    fillRule="evenodd"
                                    strokeLinecap="square"
                                  />
                                </svg>
                              </div>
                            </div>
                            <span className="icon">
                              <svg
                                viewBox="0 0 13 10"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.823 4.164L8.954.182a.592.592 0 0 0-.854 0 .635.635 0 0 0 0 .88l2.836 2.92H.604A.614.614 0 0 0 0 4.604c0 .344.27.622.604.622h10.332L8.1 8.146a.635.635 0 0 0 0 .88.594.594 0 0 0 .854 0l3.869-3.982a.635.635 0 0 0 0-.88z"
                                  fillule="nonzero"
                                  fill="#00396B"
                                  className="fill-main"
                                /></svg>
                            </span>
                          </button>
                        </div>

                        <div className="form__messages_box">
                          <div className="form__messages">
                            <div
                              className="message message--error js-message js-error-message"
                            >
                              <div className="message__box">
                                <button
                                  className="message__close js-close-message"
                                  type="button"
                                >
                                  <img
                                    loading="lazy"
                                    className="message__close_icon"
                                    src="https://dvzvtsvyecfyp.cloudfront.net/static/img/icons/corner-top--blue.svg"
                                  />
                                </button>
                                <div className="message__body">
                                  <div className="message__in">
                                    <div class="message__bubble">
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
                    </form>

                    <ul className="cta_form-04__features"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
export default Createcourses;