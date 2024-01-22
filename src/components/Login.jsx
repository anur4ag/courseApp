import "../Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth, firestore } from "../../Server/Firebase/Firebase.jsx";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  
} from "firebase/auth";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const isFormValid = email && password;
  async function login(event) {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userDocRef = doc(firestore, "users", userCredential.user.uid);

      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const purchasedCourses = userData.purchasedCourses;

        
      }
      navigate("/courses");
    } catch (e) {
      console.log(e.message);
      let text="";
      if(e.message=="Firebase: Error (auth/email-already-in-use)."){
        text="Email already in use";
      }else if(e.message=="Firebase: Password should be at least 6 characters (auth/weak-password)."){
        text=" Password should be at least 6 characters "
      }else if(e.message=="Firebase: Error (auth/wrong-password)."){
        text="Wrong Password";
      }else if(e.message=="FirebaseError: Firebase: Error (auth/missing-email)."){
        text="Missing Email";
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
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  async function reset() {
    try {
      await resetPassword(email);
      window.alert(
        "A password reset email has been sent, check that email and refresh this page"
      );
    } catch (e) {
      console.log(e);
    }
  }



  return (
    <div className="login-root">
      <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>

        {/* ... rest of the JSX code ... */}

        <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
          {/* ... rest of the JSX code ... */}
          <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
            {/* ... rest of the JSX code ... */}
          </div>
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15">Login to your account</span>
                <form id="stripe-login">
                  <div className="field padding-bottom--24">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={(e) => {
                      setEmail(e.target.value);
                    }} required />
                  </div>
                  <div className="field padding-bottom--24">
                    <div className="grid--50-50">
                      <label htmlFor="password">Password</label>
                      <div className="reset-pass">
                        <a onClick={reset} style={{ color: "#FDBF2E" }}>Forgot your password?</a>
                      </div>
                    </div>
                    <input type={showPassword ? "text" : "password"} name="password" onChange={(e) => {
                      setPassword(e.target.value);
                    }} required />
                    <span onClick={() => setShowPassword((prev) => !prev)}>
                      {showPassword ? "🔐" : "👁"}
                    </span>
                  </div>
                  <div className="field field-checkbox padding-bottom--24 flex-flex align-center">

                  </div>
                  <div className="field padding-bottom--24">
                    <input disabled={!isFormValid} type="submit" name="submit" value="Login" style={{ backgroundColor: "#FDBF2E" }} onClick={login} />
                  </div>

                </form>
              </div>
            </div>
            <div className="footer-link padding-top--24">
              <span>Don't have an account? <Link to="/render">Register</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
