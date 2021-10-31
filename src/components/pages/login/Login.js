import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");

  const { firebaseData } = useAuth();
  const {
    setUser,
    setIsLoading,
    registerNewUser,
    setNewUser,
    signIn,
    facebookSignIn,
    googleSignIn,
    twitterSignIn,
  } = firebaseData;

  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleToggle = (e) => {
    setIsLogin(e.target.checked);
  };

  const registerUser = (e) => {
    e.preventDefault();
    registerNewUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        updateUserName();
        handleSignInUser(e);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const updateUserName = () => {
    setNewUser(userName)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSignInUser = (e) => {
    signIn(email, password)
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
    e.preventDefault();
  };

  const handleRegistration = (e) => {
    if (password.length < 6) {
      setError("Password should be 6 Character");
    }
    isLogin ? handleSignInUser(e) : registerUser(e);
  };

  const handleSignIn = (provider) => {
    provider()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <section className="row">
      <div className="col-lg-7">
        <img
          className="img-fluid"
          src="https://i.ibb.co/T8Z0nNp/signup.jpg"
          alt=""
        />
      </div>
      <div className="col-lg-5 py-5">
        <h2>Welcome to Ghurbo</h2><br />
        <form onSubmit={handleRegistration}>
          <h2>{isLogin ? "Sign In" : "Register"}</h2>
          {isLogin || (
            <input onChange={handleUserName} type="text" placeholder="Name" />
          )}
          <br /> <br />
          <input onChange={handleEmail} type="email" placeholder="Email" />{" "}
          <br />
          <br />
          <input
            onChange={handlePassword}
            type="password"
            placeholder="Password"
          />
          <br />
          <br />
          <input type="checkbox" onClick={handleToggle} />
          Already have an account? <br />
          {error}
          <Button type="submit" variant="primary">
            {isLogin ? "Sign In" : "Register"}
          </Button>
        </form>
        <div className="text-center">
          <h3>
            Or <br /> Sign-In with
          </h3>
          <Button
            onClick={() => handleSignIn(googleSignIn)}
            className="fs-1 p-1 m-1 text-danger"
            variant="light"
          >
            <FaGoogle />
          </Button>
          <Button
            onClick={() => handleSignIn(facebookSignIn)}
            className="fs-1 p-1 m-1 text-primary"
            variant="light"
          >
            <FaFacebook />
          </Button>
          <Button
            onClick={() => handleSignIn(twitterSignIn)}
            className="fs-1 p-1 m-1 text-success"
            variant="light"
          >
            <FaTwitter />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
