import React, { useContext, useEffect, useState } from "react";
import styles from "../Styles/Signup.module.css";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { RiInformationLine } from "react-icons/ri";
import Toster from "../Components/TosterAlertCompo/Toster";
import { AlertContext } from "../Context/AlertContext";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [showPassInfoDiv, setShowPassInfoDiv] = useState(false);
  const { alert, alertMessage, AlertFunction } = useContext(AlertContext);
  const [mobString, setMobString] = useState([]);
  const [mobileInputError, setMobileInputError] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: 0,
    password: "",
    repassword: "",
    login: false,
  });

  const handleSigupFormChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile" && (value.length != 10 || +value == NaN)) {
      setMobString(value);
      setMobileInputError(true);
    } else if (name === "mobile" && value.length == 10) {
      setMobileInputError(false);
      setMobString(value);
    }
    if (name === "password") {
      setIsValidPassword(isValidPasswordFunc(value));
    }
    if (name === "password" && value == "") {
      setIsValidPassword(true);
    }
    name === "mobile"
      ? setSignupData({ ...signupData, [name]: +value })
      : setSignupData({ ...signupData, [name]: value });
  };

  function isValidPasswordFunc(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%]{8,12}$/;
    return (
      regex.test(password) && password.length >= 8 && password.length <= 12
    );
  }

  useEffect(() => {
    if (signupData.password === signupData.repassword) {
      setPasswordMatchError(false);
    } else {
      setPasswordMatchError(true);
    }
    if (signupData.repassword == "") {
      setPasswordMatchError(false);
    }
    if (signupData.mobile == Number && mobString.length == 10) {
      setMobileInputError(false);
    }
  }, [signupData]);

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.repassword) {
      setPasswordMatchError(true);
      AlertFunction("Password not match");
    } else {
      AlertFunction("Signup successfull");
    }
  };

  console.log("signupdata", signupData);

  return (
    <div className={styles.signupAmdImgTopDiv}>
      <div className={styles.signupMainDiv}>
        <h5>
          *This signup form is just added to show you form validation as asked
          in assignment.
        </h5>
        <h2>CREATE NEW CUSTOMER ACCOUNT</h2>
        <h4>Personal & Login Information</h4>
        <div className={styles.hrLineDiv}>
          <hr className={styles.hrLine} />
        </div>
        <form
          id={styles.signupForm}
          onSubmit={(e) => handleSignupFormSubmit(e)}
        >
          <p id={styles.passwordErrorPTag}>
            {passwordMatchError ? "*Password not match" : null}
            {mobileInputError ? "*Please enter 10 digit mobile no. only" : null}
            {!isValidPassword
              ? "*Please enter password containing [a-zA-Z0-9$#@!%$][8-12 length]"
              : null}
          </p>
          <label>First name:</label>
          <br />
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Enter first name..."
            required
            onChange={(e) => handleSigupFormChange(e)}
          />

          <label>Second name:</label>
          <br />
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Enter last name..."
            required
            onChange={(e) => handleSigupFormChange(e)}
          />

          <label>Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email..."
            required
            onChange={(e) => handleSigupFormChange(e)}
          />

          <label>Mobile no.</label>
          <br />
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Enter mobile no..."
            required
            pattern="[0-9]{10}"
            onChange={(e) => handleSigupFormChange(e)}
          />

          <label>Password:</label>
          <br />
          <div className={styles.passwordInputDiv}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter password..."
              required
              min={8}
              max={12}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$"
              onChange={(e) => handleSigupFormChange(e)}
            />
            <div
              className={styles.showPassEyeDiv}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
            <div
              className={styles.infoIconDiv}
              onMouseEnter={() => setShowPassInfoDiv(true)}
              onMouseLeave={() => setShowPassInfoDiv(false)}
            >
              <RiInformationLine />
            </div>
            {showPassInfoDiv ? (
              <div className={styles.passInfoDiv}>
                <p>
                  Password should-
                  <br />
                  1-Numeric:[0-9],
                  <br />
                  2-Letters:[a-z],
                  <br />
                  3-Capital letters:[A-Z]
                  <br />
                  4-Special characters:[@$!%*?&]
                  <br />
                  <br />
                  5-Length:[8-12]
                  <br />
                </p>
              </div>
            ) : null}
          </div>
          <label>Re-password:</label>
          <br />
          <div className={styles.passwordInputDiv}>
            <input
              type={showRePassword ? "text" : "password"}
              id="repassword"
              name="repassword"
              placeholder="Re-enter password..."
              required
              min={8}
              max={12}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$"
              onChange={(e) => handleSigupFormChange(e)}
            />
            <div
              className={styles.showPassEyeDiv}
              onClick={() => setShowRePassword(!showRePassword)}
            >
              {showRePassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
          </div>

          <button id={styles.signupBtn} type="submit">
            Submit
          </button>
          {alert ? <Toster message={alertMessage} /> : null}
        </form>
      </div>
    </div>
  );
};

export default Signup;
