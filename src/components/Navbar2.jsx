import "../styles.css";

import { useState, useEffect } from "react"
import CourseLogo from "../assets/course logo.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, firestore } from "../../Server/Firebase/Firebase.jsx";
import { doc, getDoc } from "firebase/firestore";
function Navbar2({ logged, setLogged }) {
    const navigate = useNavigate()
    const [userRole, setUserRole] = useState(null);
    async function logout() {
        try {
            const response = await signOut(auth);
             setLogged(null);
            setUserRole(null);
            return navigate("/");

        } catch (e) {
            console.log(e);
        }

    }
   

    useEffect(() => {
        async function fetchUserData(userId) {
          try {
            const userDocRef = doc(firestore, "users", userId);
            const userDocSnapshot = await getDoc(userDocRef);
    
            if (userDocSnapshot.exists()) {
              const userData = userDocSnapshot.data();
              setUserRole(userData.role.userType);
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        }
    
        if (logged) {
          fetchUserData(logged.uid);
        }
      }, [logged]);


    return (
        <body className="font-work-sans comps" id="96547-196083">
        <nav className="js-nav nav-02 nav-02--sticky nav-02--sticky--white">
            <div className="container container--large">
                <div className="nav-02__box">
                    <div className="nav-02__logo">
                        <a className="nav-02__link" href="/" target="_self">
                            <img
                                className="nav-02__logo_img"
                                height="44"
                                alt="Course logo"
                                src={CourseLogo}
                
                                sizes="54px"
                            />

                            <span className="nav-02__logo_text">CourseShare </span>
                        </a>
                    </div>
                    <div className="nav-02__links js-menu">
                        <div className="nav-02__list_wrapper">
                            <ul className="nav-02__list nav-02__list--desktop">
                                <li className="nav-02__item">
                                    <Link
                                        className="button button--black-outline button--empty"
                                        to="/"
                                    ><span className="button__text">Home</span>
                                    </Link>
                                </li>

                                {logged? (<li className="nav-02__item">
                                    <Link
                                        className="button button--black-outline button--empty"
                                        to="/courses"
                                    ><span className="button__text">Courses</span>
                                    </Link>
                                </li>):(null)}

                               {logged  && userRole=="admin"? ( <li className="nav-02__item">
                                    <Link
                                        className="button button--black-outline button--empty"
                                        to="/editcourses"
                                    ><span className="button__text">Edit courses</span>
                                    </Link>
                                </li>):(null)}

                               {!logged? ( <li className="nav-02__item">
                                    <div className="buttons-set">
                                        <ul className="buttons-set__list">
                                            <li className="buttons-set__item">
                                                <Link
                                                   
                                                    className="button button--accent-outline"
                                                    to="/login"
                                                ><span className="button__text">Login</span></Link>
                                            </li>
                                            <li className="buttons-set__item">
                                                <Link
                                                   
                                                    className="button button--accent-outline"
                                                    to="/render"
                                                   
                                                ><span className="button__text">Register</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>):(<li className="nav-02__item">
                      <div className="buttons-set">
                        <ul className="buttons-set__list">
                            
                          <li className="buttons-set__item">
                            
                            <Link className="button button--accent-outline" to="/">
                              <span className="button__text" onClick={logout}>Logout</span>
                            </Link>
                          </li>

                        </ul>
                      </div>
                    </li>)}
                            </ul>
                            <ul className="nav-02__list nav-02__list--mobile">
                                <li className="nav-02__item">
                                    <Link
                                        className="button button--black-outline button--empty"
                                        to="/"
                                    ><span className="button__text">Home</span>
                                    </Link>
                                </li>

                               {logged? ( <li className="nav-02__item">
                                    <Link
                                        className="button button--black-outline button--empty"
                                        to="/courses"
                                    ><span className="button__text">Courses</span>
                                    </Link>
                                </li>):(null)}

                                {logged  && userRole=="admin"? (<li className="nav-02__item">
                                    <Link
                                        className="button button--black-outline button--empty"
                                        to="/editcourses"
                                    ><span className="button__text">Edit courses</span>
                                    </Link>
                                </li>):(null)}

                               {!logged? ( <li className="nav-02__item">
                                    <div className="buttons-set">
                                        <ul className="buttons-set__list">
                                            <li className="buttons-set__item">
                                                <Link
                                                   
                                                    className="button button--accent-outline"
                                                    to="/login"
                                                ><span className="button__text">Login</span></Link>
                                            </li>
                                            <li className="buttons-set__item">
                                                <Link
                                                    
                                                    className="button button--accent-outline"
                                                    to="/render"
                                                ><span className="button__text">Register</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>):( <li className="nav-02__item">
                                    <div className="buttons-set">
                                        <ul className="buttons-set__list">
                                        
                                            <li className="buttons-set__item">
                                                <Link
                                                    
                                                    className="button button--accent-outline"
                                                    
                                                    onClick={logout}
                                                ><span className="button__text">Logut</span></Link>
                                            </li>

                                        </ul>
                                    </div>
                                </li>)}
                            </ul>
                        </div>

                        <div className="nav-02__burger">
                            <button className="burger burger--black js-open-menu" type="button">
                                <div className="burger__box">
                                    <div className="burger__inner"></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </body>
    )
}
export default Navbar2;