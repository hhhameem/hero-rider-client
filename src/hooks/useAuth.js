import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import axios from "axios";

const useAuth = () => {
  const adminCredential = ["admin@admin.com", "abcd1234"];
  const [user, setUser] = useState({});
  const [adminEmail, setAdminEmail] = useState(null);
  const [adminPass, setAdminPass] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPass, setUserPass] = useState(null);
  const [license, setLicense] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [nidImage, setNidImage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [saved, setSaved] = useState(false);

  const navigate = useNavigate();

  const auth = getAuth();

  const handleAdminEmailChange = (e) => {
    setAdminEmail(e.target.value);
  };
  const handleAdminPassChange = (e) => {
    setAdminPass(e.target.value);
  };
  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };
  const handleUserPassChange = (e) => {
    setUserPass(e.target.value);
  };

  const adminLogin = () => {
    if (adminEmail === adminCredential[0] && adminPass === adminCredential[1]) {
      localStorage.setItem("adminLoggedIn", true);
      navigate("/dashboard");
    } else {
      window.alert("Please use correct email or pass");
    }
  };
  const adminLogOut = () => {
    localStorage.removeItem("adminLoggedIn");
  };

  const userLogin = () => {
    console.log("accounting creating");
    signInWithEmailAndPassword(auth, userEmail, userPass)
      .then((userCredential) => {
        setUser(userCredential.user);
        localStorage.setItem("userLoggedIn", "true");
        navigate("/user-dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const accountCreate = (email, pass, data, userType) => {
    console.log("accounting creating");
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        setUser(userCredential.user);
        localStorage.setItem("userLoggedIn", "true");
        SaveUserData(data, userType);
        navigate("/user-dashboard");
      })
      .catch((error) => {
        window.alert(error.message);
        setSubmitted(false);
      });
  };

  const logOut = () => {
    localStorage.removeItem("userLoggedIn");
    console.log("logged out");
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, [auth]);

  const SaveUserData = (data, userType) => {
    console.log("saving user data");
    data.profilePicture = profileImage;
    data.nidImage = nidImage;
    if (userType === "rider") {
      data.dlImage = license;
    }
    data.type = userType;
    console.log("data before potst", data);
    axios
      .post("https://secure-coast-12143.herokuapp.com/create-user", data)
      .then(function (response) {
        if (response.data.insertedId) {
          window.alert("Data saved Successfully!!");
        }
        setSaved(!saved);
      })
      .catch(function (error) {
        window.alert(error.message + "Try Again");
      })
      .finally(() => setSubmitted(false));
  };

  const upload = (img, type) => {
    var formData = new FormData();
    formData.append("image", img);
    axios
      .post(
        `https://api.imgbb.com/1/upload?&key=87eb0fb018a799677f5c87eac15c66fa`,
        formData
      )
      .then(function (response) {
        if (response.data.data.url) {
          console.log("image uploaded");
          if (type === "dl") {
            setLicense(response.data.data.url);
          } else if (type === "pp") {
            setProfileImage(response.data.data.url);
          } else if (type === "nid") {
            setNidImage(response.data.data.url);
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return {
    user,
    navigate,
    license,
    profileImage,
    nidImage,
    submitted,
    setSubmitted,
    upload,
    logOut,
    accountCreate,
    userEmail,
    setUserEmail,
    userPass,
    setUserPass,
    handleUserEmailChange,
    handleUserPassChange,
    userLogin,
    adminLogin,
    adminLogOut,
    handleAdminEmailChange,
    handleAdminPassChange,
  };
};

export default useAuth;
