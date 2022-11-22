import React, { useState } from "react";
import "./SignIn.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import sky_logo from "../../../images/onlysky.png";

const SignIn = () => {
  let history = useHistory();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Checks if the input Field is empty
  const isEmpty = (value) =>
    value === "" || value === undefined || value === null;

  const validateInput = (value, fieldName) =>
    isEmpty(value) ? `${fieldName} cannot be left blank` : "";

  // Check Email
  const checkEmail = (field) => {
    console.log("Field", field);
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailErr = validateInput(field, "Email");
    let err =
      emailErr !== ""
        ? emailErr
        : !field.match(emailRegex)
        ? "Invalid Email: Email Format eg. abc@def.xyz"
        : "";
    console.log(err);
    setEmailError(err);
    return err;
  };

  // Check Password
  const checkPassword = (field) => {
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    let passwordErr = validateInput(field, "Password");
    let err =
      passwordErr !== ""
        ? passwordErr
        : !field.match(passwordRegex)
        ? " Password must contain atleast 8 Digits, One digit and Special character"
        : "";
    setPasswordError(err);
    return err;
    // ^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let signin_form = e.target;
    let formData = Object.fromEntries(new FormData(signin_form));
    let isInValidEmail = checkEmail(formData.email);
    let isInValidPssword = checkPassword(formData.password);
    console.log(isInValidEmail);
    if (!isInValidEmail && !isInValidPssword) {
      const url = "https://jsonplaceholder.typicode.com/users";
      const headers = { "Content-Type": "Application/json" };

      axios
        .post(url, formData, headers)
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          if (!localStorage.getItem(data.email)) {
            alert("User does not Exist !! Please SignUp");
          } else {
            if (
              JSON.parse(localStorage.getItem(data.email)).password ===
              data.password
            ) {
              sessionStorage.setItem("token", "loggedIn");
              sessionStorage.setItem("email", data.email);
              alert("Authentication Successfull");
              history.push("/");
            } else {
              alert("Incorrect Password !!");
            }
          }
        });

      // window.localStorage.setItem("LoginDetails", JSON.stringify(formData));
      // alert("Form Sign in validation successfull");
    } else {
      console.log("Verification Failed");
    }
  };

  return (
    <div className="signin-container">
      <div id="signin-box" className="sign-in-box">
        <div className="signin-panel">
          <div className="panel">
            <div className="panel-header">
              <Link to="/">
                <div className="signin-logo">
                  <img src={sky_logo} alt="" />
                </div>
              </Link>
            </div>
            <div className="sub-panel">
              <div className="mobile">
                <p className="link">
                  New to Sky iD? <Link to="/signup">Sign up</Link>{" "}
                </p>
              </div>
              <h3 className="signin-title">Sign in</h3>

              <div className="signin-form">
                <form noValidate="novalidate" onSubmit={submitHandler}>
                  <div className="formFieldsWrapper">
                    <div className="label">
                      <label htmlFor="email">Email or Username</label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        autoCapitalize="off"
                        autoComplete="off"
                        onChange={(e) => checkEmail(e.target.value)}
                      />
                      {emailError && (
                        <span className="small danger">{emailError}</span>
                      )}
                    </div>
                    <div className="label">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        autoCapitalize="off"
                        autoComplete="off"
                        onChange={(e) => checkPassword(e.target.value)}
                      />
                      {passwordError && (
                        <span className="small danger">{passwordError}</span>
                      )}
                    </div>

                    <p className="link">
                      Forgotten{" "}
                      <Link
                        id="forgottenUsername"
                        data-description="Forgot Username"
                        to="/"
                      >
                        username
                      </Link>{" "}
                      or{" "}
                      <Link
                        id="forgottenPassword"
                        data-description="Forgot Password"
                        data-tracking-label="forgot-password"
                        to="/"
                      >
                        password
                      </Link>
                      ?
                    </p>

                    <div className="label flex-checkbox">
                      <input
                        className="custom"
                        type="checkbox"
                        id="remember"
                        name="remember"
                        data-tracking="true"
                        data-tracking-label="remember-username-checked"
                        data-analytics-name="remember-username"
                      />
                      <span>Remember my username</span>
                    </div>
                    <div>
                      <p className="link">
                        <Link
                          id="privacyPolicyLink"
                          to="/"
                          data-description="Privacy Statement"
                          data-tracking-label="privacy-statement"
                          target="_blank"
                        >
                          Privacy &amp; Cookies Notice
                        </Link>
                      </p>
                    </div>
                    <div className="buttonRow">
                      <button
                        id="signinButton"
                        className="sky-btn"
                        type="submit"
                        title="Sign in"
                        data-tracking-label="sign-in-submit"
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="new-to-sky">
              <div className="desktop-view">
                <h3 className="signin-title">New To Sky iD?</h3>
                <p>
                  You'll need a Sky iD before you can access some of our
                  services.
                </p>
                <p>
                  If you have signed up for another Sky online service you
                  already have one.
                </p>
              </div>

              <div className="signup-btn-section link">
                <p>
                  More about <Link to="/">Sky ID</Link>
                </p>
                <Link to="/signup">
                  <button className="signup-btn sky-btn-dark">Sign up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="background-signin"></div>

      {/* Global Footer */}
      <div id="globalFooter">
        <div className="globalFooterBottom">
          <span id="copyright">© 2022 Sky UK</span>
          <ul>
            <li>
              <Link
                id="privacyStatementLink"
                to="/"
                data-tracking-label="privacy-statement"
              >
                Privacy &amp; Cookies Notice
              </Link>
            </li>
            <li>
              <Link
                id="termsAndConditionsLink"
                to="/"
                data-tracking-label="terms-and-conditions"
              >
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link
                id="accessibilityInformationLink"
                to="/"
                data-tracking-label="accessibility"
              >
                Accessibility Information
              </Link>
            </li>
            <li>
              <Link
                id="feedbackLink"
                to="/"
                target="_blank"
                data-tracking-label="feedback"
              >
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default SignIn;
