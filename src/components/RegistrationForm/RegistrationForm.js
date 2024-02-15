import { useState } from "react";
import "./style.css";

const RegistrationForm = () => {
  const [errors, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [alerts, setAlerts] = useState("");
  const [formValue, setFormValues] = useState({
    email: "",
    password: "",
    confPass: "",
  });

  // Email Validation Function

  const emailValidation = (email) => {
    const regExp = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{3,}$/;
    return regExp.test(email);
  };

  // Password Validation Function

  const passValidation = (password, confPass) => {
    if (password === confPass) {
      return password.length >= 8;
    } else {
      return "NotMatched";
    }
  };

  const onhandleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confPass } = formValue;

    // Validating Empty Fields

    if (email === "" || password === "" || confPass === "") {
      setAlerts("Fill all the details.");
      return;
    }

    // Validating Email Inputs

    if (!emailValidation(email)) {
      setError((prevErrors) => ({
        ...prevErrors,
        email: "Provide correct email format.",
      }));
    } else {
      setError((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }

    // Validating Password Inputs

    if (!passValidation(password, confPass)) {
      setError((prevErrors) => ({
        ...prevErrors,
        password: "Password be atleast 8 characters.",
      }));
    } else if (passValidation(password, confPass) === "NotMatched") {
      setError((prevErrors) => ({
        ...prevErrors,
        password: "Password does not match.",
      }));
    } else {
      setError((prevErrors) => ({
        ...prevErrors,
        password: "",
      }));
    }

    if (Object.values(errors).every((value) => !value)) {
      setSuccess(true);
    }
  };

  const onhandleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValue,
      [name]: value,
    });
  };

  return (
    <>
      <div className="form">
        <form onSubmit={onhandleSubmit}>
          <h2>Users Form</h2>
          <label>
            <div>Email:</div>
            <input
              type="email"
              name="email"
              size="38"
              onChange={onhandleChange}
            />
          </label>
          <label>
            <div>Password:</div>
            <input
              type="text"
              name="password"
              size="38"
              onChange={onhandleChange}
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="text"
              name="confPass"
              size="38"
              onChange={onhandleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div>
          {errors.email && <p className="error-message">❌{errors.email}</p>}
          {errors.password && (
            <p className="error-message">❌{errors.password}</p>
          )}
          {errors.confPass && (
            <p className="error-message">❌{errors.confPass}</p>
          )}
          {alerts && <p className="error-message">❌{alerts}</p>}
          {success && !errors.email && !errors.password && (
            <p className="success-message">✔️Info successfully submitted.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
