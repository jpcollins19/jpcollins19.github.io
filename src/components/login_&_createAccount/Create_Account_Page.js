// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { addPart } from "../../store";
import { useState } from "react";

const Create_Account_Page = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [showPW, setShowPW] = useState(false);
  const [error, setError] = useState("");

  const showPwClick = () => {
    setShowPW(!showPW);
  };

  const relayError = (err) => {
    switch (err) {
      case "pw does not match":
        return "Passwords do not match";
        break;
      default:
        return "Unknown Error, contact Joe";
        break;
    }
  };

  const onChange = (ev) => {
    switch (ev.target.name) {
      case "email":
        setEmail(ev.target.value);
        break;
      case "name":
        setName(ev.target.value);
        break;
      case "password":
        setPassword(ev.target.value);
        break;
      case "password1":
        setPassword1(ev.target.value);
        break;
      default:
        break;
    }
  };

  const dispatch = useDispatch();

  const onSubmit = (ev) => {
    ev.preventDefault();

    if (password !== password1) {
      setError("pw does not match");
    } else {
      dispatch(addPart({ email, name, password }));
      location.hash = "#/login";
    }
  };

  return (
    <main id="login-page" className="white-text">
      <div className="main-cont-login">
        <div className="main-cont1-login">
          <div id="main-text-container-login" className="white-text">
            <h1>Create Account</h1>
            <div className="error-cont-login">
              {error && (
                <Alert severity="error" className="error-text">
                  {relayError(error)}
                </Alert>
              )}
            </div>
            <form onSubmit={onSubmit}>
              <div id="form-cont-login">
                <div className="create-account-cont">
                  <div id="email-cont">
                    <input
                      id="email-info"
                      placeholder="email"
                      value={email}
                      onChange={onChange}
                      name="email"
                    />
                  </div>
                  <div id="email-cont">
                    <input
                      id="email-info"
                      placeholder="name"
                      value={name}
                      onChange={onChange}
                      name="name"
                    />
                  </div>
                  <div id="pw-cont">
                    <input
                      id="pw-info"
                      placeholder="password"
                      value={password}
                      onChange={onChange}
                      name="password"
                      // type={showPW ? "text" : "password"}
                    />
                  </div>
                  <div id="pw-cont">
                    <input
                      id="pw-info"
                      placeholder="verify password"
                      value={password1}
                      onChange={onChange}
                      name="password1"
                      // type={showPW ? "text" : "password"}
                    />
                    <div className="view-pw" onClick={() => showPwClick()}>
                      View Password
                    </div>
                  </div>
                </div>
                <div id="submit-cont">
                  <button
                    id="submit-info"
                    disabled={!email || !password || !name || !password1}
                  >
                    Sign Up
                  </button>
                </div>
                <div id="forgot-pw-cont">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <h4 className="white-text">Forgot Password</h4>
                  </Link>
                </div>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <h4 className="white-text">Cancel</h4>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Create_Account_Page;
