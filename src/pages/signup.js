import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { FirebaseContext } from "../context/firebase";

import { BROWSE_ROUTE } from "../constants/routes";

// COMPONENTS
import HeaderComponent from "../containers/header";
import FooterComponent from "../containers/footer";

import { Form } from "../components";

export default function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = email === "" || password === "" || username === "";

  const signup = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: username,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(BROWSE_ROUTE);
          });
      })
      .catch((err) => {
        setUsername("");
        setEmail("");
        setPassword("");
        setError(err.message);
        console.log("Error: ", err);
      });
  };

  return (
    <>
      <HeaderComponent>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={signup}>
            <Form.Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to insure you&apos;re not
            a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderComponent>
      <FooterComponent />
    </>
  );
}
