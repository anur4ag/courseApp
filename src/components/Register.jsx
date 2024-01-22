import "../Login.css";
import { Link } from "react-router-dom"
import { useState } from "react";
import { auth, firestore } from "../../Server/Firebase/Firebase.jsx";
import { doc, setDoc } from "firebase/firestore";
import { useToast } from "@chakra-ui/react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification
} from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Register({ userType }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const toast = useToast();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const isFormValid = email && password;
  async function register(event) {
    event.preventDefault();
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      const newUserUid = data.user.uid;
      const userRef = doc(firestore, "users", newUserUid);

      await setDoc(userRef, {
        email: email,
        purchasedCourses: [],
        role: { userType } // Initialize the "purchasedCourses" array as empty
      });

 
      navigate("/courses");

    } catch (e) {
      
      let text="";
      if(e.message=="Firebase: Error (auth/email-already-in-use)."){
        text="Email already in use";
      }else if(e.message=="Firebase: Password should be at least 6 characters (auth/weak-password)."){
        text=" Password should be at least 6 characters "
      }
      toast({
        description: text,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
    }
  }

  return (
    <div className="login-root">
      <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>

        <div className="loginbackground box-background--white padding-top--64">
          <div className="loginbackground-gridContainer">
            <div className="box-root flex-flex" style={{ gridArea: "top / start / 8 / end" }}>
              <div className="box-root" style={{ backgroundImage: "linear-gradient(white 0%, rgb(247, 250, 252) 33%)", flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: "4 / 2 / auto / 5" }}>
              <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: "6 / start / auto / 2" }}>
              <div className="box-root box-background--blue800" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: "7 / start / auto / 4" }}>
              <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: "1" }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: "8 / 4 / auto / 6" }}>
              <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: "2 / 15 / auto / end" }}>
              <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: "3 / 14 / auto / end" }}>
              <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: "4 / 17 / auto / 20" }}>
              <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: "5 / 14 / auto / 17" }}>
              <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1 }}></div>
            </div>
          </div>
        </div>
        <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>

          <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">

          </div>
          <div className="formbg-outer">
            <div className="formbg">
              {/* <span className="cross-sign" >
          &times;
        </span> */}
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15">Sign up to your account</span>
                <form id="stripe-login">
                  <div className="field padding-bottom--24">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={(e) => {
                      setEmail(e.target.value);
                    }} />
                  </div>
                  <div className="field padding-bottom--24">
                    <div className="grid--50-50">
                      <label htmlFor="password">Password</label>
                   
                    </div>
                    <input type={showPassword ? "text" : "password"} name="password" onChange={(e) => {
                      setPassword(e.target.value);
                    }} />
                    <span onClick={() => setShowPassword((prev) => !prev)}>
                      {showPassword ? "🔐" : "👁️"}
                    </span>
                  </div>
                  <div className="field field-checkbox padding-bottom--24 flex-flex align-center">

                  </div>
                  <div className="field padding-bottom--24">
                    <input disabled={!isFormValid} type="submit" name="submit" value="Sign Up" style={{ backgroundColor: "#FFBF31" }} onClick={register} />
                  </div>

                </form>
              </div>
            </div>
            <div className="footer-link padding-top--24">
              <span>Already have a account? <Link to="/login">Login</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
