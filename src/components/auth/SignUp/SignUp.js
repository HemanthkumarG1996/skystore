import React, { useState } from "react";
// import FormInput from '../FormInput/FormInput';
import "./SignUp.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const history = useHistory();
  const [title, setTitle] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [titleError, setTitleError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmEmailError, setConfirmEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");

  // Check Title
  const checkTitle = (field) => {
    let titleErr = validateInput(field, "Title");
    let err = titleErr !== "" ? titleErr : "";
    setTitleError(err);
    return err;
  };

  // Check First Name
  const checkFirstName = (field) => {
    let nameErr = validateInput(field, "First Name");
    let err =
      nameErr !== ""
        ? nameErr
        : field.length < 3
        ? "First Name is too Short"
        : "";
    setFirstNameError(err);
    return err;
  };

  // Check Last Name
  const checkLastName = (field) => {
    let nameErr = validateInput(field, "Last Name");
    let err =
      nameErr !== ""
        ? nameErr
        : field.length < 3
        ? "Last Name is too Short"
        : "";
    setLastNameError(err);
    return err;
  };

  // Check Email
  const checkEmail = (field) => {
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailErr = validateInput(field, "Email");
    let err =
      emailErr !== ""
        ? emailErr
        : !field.match(emailRegex)
        ? "Invalid Email: Email Format eg. abc@def.xyz"
        : "";
    setEmailError(err);
    return err;
  };

  // Check Confirm Email
  const checkConfirmEmail = (field) => {
    let confirmEmailErr = validateInput(field, "Confirm Email");
    let err =
      confirmEmailErr !== ""
        ? confirmEmailErr
        : email !== field
        ? "Email does not Match"
        : "";
    setConfirmEmailError(err);
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

  // Check Confirm Password
  const checkConfirmPassword = (field) => {
    // let confirmPasswordErr = formData.password === confirmPassword ?'':'Password and confirm Password must match';
    let confirmPasswordErr = validateInput(field, "Password");
    let err =
      confirmPasswordErr !== ""
        ? confirmPasswordErr
        : password !== field
        ? "Password does not Match"
        : "";
    setConfirmPasswordError(err);
    return err;
  };

  const checkTerms = () => {
    let terms = document.getElementById("terms");
    let err =
      terms.checked !== true ? "Please Accept the terms and Conditions" : "";
    setTermsError(err);
    console.log(err);
    return err;
  };

  // Checks if the input Field is empty
  const isEmpty = (value) =>
    value === "" || value === undefined || value === null;

  const validateInput = (value, fieldName) =>
    isEmpty(value) ? `${fieldName} cannot be left blank` : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handling Submit");
    let signup_form = e.target;
    let formData = Object.fromEntries(new FormData(signup_form));

    let isInValidTitle = checkTitle(formData.title);
    let isInValidFirstName = checkFirstName(formData.firstName);
    let isInValidLastName = checkLastName(formData.lastName);
    let isInValidEmail = checkEmail(formData.email);
    let isInValidPassword = checkPassword(formData.password);
    let isNotConfirmEmail = checkConfirmEmail(formData.confirmEmail);
    let isNotConfirmPassword = checkConfirmPassword(formData.confirmPassword);
    let isNotTermsChecked = checkTerms();
    if (
      !isInValidTitle &&
      !isInValidFirstName &&
      !isInValidLastName &&
      !isInValidPassword &&
      !isInValidEmail
    ) {
      setTitleError(isInValidTitle);
      setFirstNameError(isInValidFirstName);
      setLastNameError(isInValidLastName);
      setEmailError(isInValidEmail);
      setPasswordError(isInValidPassword);

      if (!isNotConfirmEmail && !isNotConfirmPassword) {
        console.log(isNotTermsChecked);
        if (!isNotTermsChecked) {
          let firstName = formData.firstName;
          let lastName = formData.lastName;
          let email = formData.email;
          let password = formData.password;

          let createUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
          };

          // Mock API CALL
          const url = "https://jsonplaceholder.typicode.com/users";
          const headers = { "Content-Type": "Application/json" };
          axios
            .post(url, createUser, headers)
            .then((res) => {
              return res.data;
            })
            .then((res) => {
              if (localStorage.getItem(email)) {
                alert("User Already Signed Up");
              } else {
                localStorage.setItem(email, JSON.stringify(res));
                alert("User Sign Up Success");
                history.push("/signin");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          alert(isNotTermsChecked);
        }
      } else {
        console.log("Submission Error");
      }
    } else {
      setTitleError(isInValidTitle);
      setFirstNameError(isInValidFirstName);
      setLastNameError(isInValidLastName);
      setEmailError(isInValidEmail);
      setConfirmEmailError(isNotConfirmEmail);
      setPasswordError(isInValidPassword);
      setConfirmPasswordError(isNotConfirmPassword);
      console.log("validation error");
    }
  };

  return (
    <>
      <div className="signup-header">
        <Link to="/">
          <div className="sky-signup-logo"></div>
        </Link>
      </div>

      <div className="signup-panel">
        <div className="panel-header">
          <h2 className="page-header">Create a Sky iD </h2>
        </div>
        <div id="signup-nav">
          <span id="preamble">Already have a Sky iD?</span>
          <ul>
            {" "}
            <li>
              {" "}
              <Link to="/signin"> Sign in </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/"> Help </Link>{" "}
            </li>
          </ul>
        </div>

        {/*  */}
        <div className="signup-sub-panel">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="Title">Title</label>
              <select
                name="title"
                id="title"
                className="form-control"
                onBlur={(e) => {
                  setTitle(e.target.value);
                  checkTitle(e.target.value);
                }}
                onChange={(e) => {
                  setTitle(e.target.value);
                  checkTitle(e.target.value);
                }}
              >
                <option value="" selected="selected" disabled>
                  Please select
                </option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
                <option value="Rev">Rev</option>
                <option value="Prof">Prof</option>
                <option value="Other">Other</option>
              </select>
              {titleError && <span className="small danger">{titleError}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="firstName"> First name: </label>
              <input
                className="form-control"
                type="text"
                name="firstName"
                onChange={(e) => checkFirstName(e.target.value)}
                onBlur={(e) => checkFirstName(e.target.value)}
              />

              {firstNameError && (
                <span className="small danger">{firstNameError}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="lastName"> Last name: </label>
              <input
                className="form-control"
                type="text"
                name="lastName"
                onChange={(e) => {
                  checkLastName(e.target.value);
                }}
                onBlur={(e) => checkLastName(e.target.value)}
              />

              {lastNameError && (
                <span className="small danger">{lastNameError}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email"> Email address: </label>
              <input
                className="form-control"
                type="text"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  checkEmail(e.target.value);
                }}
                onBlur={(e) => {
                  setEmail(e.target.value);
                  checkEmail(e.target.value);
                }}
              />
              {/* <FormInput name="email" placeholder="Email..." type="email"   /> */}
              {emailError && <span className="small danger">{emailError}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmEmail"> Confirm email address: </label>
              <input
                className="form-control"
                type="email"
                name="confirmEmail"
                onChange={(e) => checkConfirmEmail(e.target.value)}
                onBlur={(e) => checkConfirmEmail(e.target.value)}
              />
              {/* <FormInput name="confirmEmail" placeholder="Confirm Email" type="email"  /> */}
              {confirmEmailError && (
                <span className="small danger">{confirmEmailError}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password"> Password: </label>
              <input
                className="form-control"
                type="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  checkPassword(e.target.value);
                }}
                onBlur={(e) => {
                  setPassword(e.target.value);
                  checkPassword(e.target.value);
                }}
              />
              {/* <FormInput name="password" placeholder="Password" type="password"  /> */}
              {passwordError && (
                <span className="small danger">{passwordError}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword"> Confirm Password: </label>
              <input
                className="form-control"
                type="password"
                name="confirmPassword"
                onChange={(e) => checkConfirmPassword(e.target.value)}
                onBlur={(e) => checkConfirmPassword(e.target.value)}
              />
              {/* <FormInput name="confirmPassword" placeholder="Confirm Password" type="password" /> */}
              {confirmPasswordError && (
                <span className="small danger">{confirmPasswordError}</span>
              )}
            </div>

            <div id="captchaImageWrapper">
              <img
                id="captchaImage"
                src="https://skyid.sky.com/captcha/jpeg?width=200&height=60&cachebuster=1658332635604"
                alt="CAPTCHA"
                height="60"
                width="200"
              />
              <div className="form-group">
                <label htmlFor="captchEnter">
                  {" "}
                  Enter the captch in the box{" "}
                </label>
                <input className="form-control" type="text" name="captcha" />
                {/* <FormInput name="captcha" placeholder="Enter Captcha" type="text" /> */}
              </div>
            </div>

            <div className="form-check signup-link">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="terms"
                onBlur={checkTerms}
                onChange={checkTerms}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I have read and agree to the Sky Store{" "}
                <Link to="/">terms &amp; conditions</Link> and the Sky{" "}
                <Link to="/">terms &amp; conditions</Link>
              </label>

              {termsError && <span className="small danger">{termsError}</span>}
            </div>

            <div className="form-check signup-link">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                We’d like to use your contact details to update you about
                offers, products and services. You are free to change your mind
                at any stage in the future. You can view our
                <Link to="/">Privacy &amp; Cookies Notice</Link> on Sky.com. If
                this is OK please tick here.
              </label>
            </div>

            <div className="buttonRow signup-btns">
              <button
                id="submitButton"
                className=" sky-signup cta"
                type="submit"
                data-tracking-label="sign-up-submit"
                null=""
              >
                Create Sky iD
              </button>
              <Link
                id="cancelButton"
                className="sky-cancel back"
                to="/"
                data-tracking-label="sign-up-cancel"
                onClick={() => history.goBack()}
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
        {/*  */}
      </div>

      {/* Global Footer */}
      <div className="signupFooter" id="globalFooter">
        <div className="globalFooterBottom">
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

        <div className="globalFooterBottom">
          <span id="copyright">© 2022 Sky UK</span>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default SignUp;
