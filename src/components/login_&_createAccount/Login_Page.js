// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { authenticate } from "../../store";
import { useState } from "react";

const Login_Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPW, setShowPW] = useState(false);
  const [error, setError] = useState("");

  const showPwClick = () => {
    setShowPW(!showPW);
  };

  const onChange = (ev) => {
    ev.target.name === "email"
      ? setEmail(ev.target.value)
      : setPassword(ev.target.value);
  };

  const dispatch = useDispatch();

  const onSubmit = async (ev) => {
    try {
      ev.preventDefault();
      dispatch(authenticate(email, password));
      location.hash = "#/scorecard";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main id="login-page" className="white-text">
      <div className="main-cont-login">
        <div className="main-cont1-login">
          <div id="main-text-container-login" className="white-text">
            <h1>Login</h1>
            <div className="error-cont-login">
              <Alert severity="error" className="error-text">
                alert goes here blah blah blah
              </Alert>
            </div>
            <form onSubmit={onSubmit}>
              <div id="form-cont-login">
                <div className="login-cont">
                  <div id="email-cont">
                    <input
                      id="email-info"
                      placeholder="email"
                      value={email}
                      onChange={onChange}
                      name="email"
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
                    <div className="view-pw" onClick={() => showPwClick()}>
                      View Password
                    </div>
                  </div>
                </div>
                <div id="submit-cont">
                  <button id="submit-info" disabled={!email || !password}>
                    Login
                  </button>
                </div>
                <div id="forgot-pw-cont">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <h4 className="white-text">Forgot Password</h4>
                  </Link>
                </div>
                <div id="create-account-cont">
                  <Link to="/create_account" style={{ textDecoration: "none" }}>
                    <h4 className="white-text">Create Account</h4>
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

export default Login_Page;
