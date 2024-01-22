// Card.js
import { auth, firestore } from "../../Server/Firebase/Firebase.jsx";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import "../Courses.css"; // Import the CSS file for styling
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
const Coursecard = ({ imageLink, title, description, price, id, unlockBuy, logged, unlockEdit, unlockDelete }) => {
  const navigate = useNavigate();
  const toast = useToast();
  const [data, setData] = useState([]);
  async function addPurchasedCourseToUser(logged, id) {
    try {
      const userRef = doc(firestore, "users", logged.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const currentPurchasedCourses = userData.purchasedCourses;

        // Push the new id to the purchasedCourses array
        currentPurchasedCourses.push(id);

        // Update the user data with the updated purchasedCourses array
        await setDoc(userRef, { purchasedCourses: currentPurchasedCourses }, { merge: true });
      }
      toast({
        description: "Course Purchased✅",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
      window.location.reload();
    } catch (e) {
      console.error("Error adding purchased course to user:", e);
    }
  }
  async function editCourse() {

    navigate(`/changecourses?id=${id}`);
  }
  async function del() {
    try {
      

      // Ask for user confirmation using window prompt
      const userConfirmation = window.confirm("Do you want to delete?");

      if (userConfirmation) {
        const response = await axios.delete("http://localhost:3000/admin/courses", {
          data: {
            courseId: id,
          },
        });
        window.location.reload();
        toast({
          description: "Course deleted successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top"
        });
      } else {
        // User chose not to delete, do nothing or show a message if needed
        console.log("Delete operation canceled by the user");
      }
    } catch (e) {
      console.log("Some error happened", e);
    }
  }

  // getting purchased courses
  useEffect(() => {
    async function fetchUserData() {
      try {
        const userDocRef = doc(firestore, "users", logged.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
         

          setData(userData.purchasedCourses);
        
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    if (logged) {
      fetchUserData(logged.uid);
    }
  }, [logged]);
  const isIdInData = (id) => {
    for (let i = 0; i < data.length; i++) {
      if (id == data[i]) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="card">
      <img src={imageLink} alt={title} className="card-img" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-price">&#8377;{price}</p>
        
        {!isIdInData(id) && unlockBuy? (
          <button className="buy-button" onClick={() => {
            addPurchasedCourseToUser(logged, id);
          }}>
            Buy
          </button>
        ) : <button className="view-button" >
          View {String.fromCharCode(0x2192)}

        </button>}


        {unlockEdit ? (<button className="edit-button" onClick={editCourse}>Edit</button>) : (null)}
        {unlockDelete ? (<button className="delete-button" onClick={del}>Delete</button>) : (null)}
      </div>
    </div>
  );
};

export default Coursecard;
