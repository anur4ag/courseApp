import React from "react";
import { Link } from "react-router-dom";
import "../Editcourses.css";
import { useNavigate } from "react-router-dom";
import courseCreator from "../assets/course creator.png"
function EditCourses() {
  const navigate = useNavigate();
    
  return (
    <div className="page-component__bg_image_box bg-white-color first_component" id="header-23-457101">
      <div className="page-component__bg_overlay_box"></div>

      <div className="page-component__wrapper" style={{ zIndex: 10, paddingTop: "50px", paddingBottom: "70px" }}>
        <header className="header-23 graphics-image default-graphics-image">
          <div className="container container--large header-23__container">
            <div className="header-23__left">
              <div className="header-23__left_content">
                <h1 className="heading heading--accent header-23__heading">
                  Welcome to Online Course Creator
                </h1>

                <div className="header-23__text content_box">
                  Your platform to create and manage your online courses with ease.
                </div>

                <div className="header-23__cta_box">
                  <div className="buttons-set">
                    <ul className="buttons-set__list">
                      <li className="buttons-set__item">
                        <Link
                         
                          className="button button--accent-bg"
                          to="/createcourses"  // Replace this with your desired link
                          style={{backgroundColor: "#FFBE2F"}}
                          
                        >
                          <span className="button__text" >Create Course</span>
                        </Link>
                      </li>
                      <li className="buttons-set__item">
                        <Link
                          
                          className="button button--accent-bg"
                          to="/checkcourses"  // Replace this with your desired link
                          style={{backgroundColor: "#FFBE2F"}}
                         
                        >
                          <span className="button__text">Check Your Course</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-23__right">
              <img
                className="header-23__img"
                alt="Course creator"
                src={courseCreator}
                
                sizes="(max-width: 320px) 290px, (max-width: 375px) 300px, (max-width: 425px) 300px, (max-width: 600px) 300px, (max-width: 1020px) 500px, 500px"
              />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default EditCourses;
