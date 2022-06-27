import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";

import { Form, Button } from "react-bootstrap";

const LoginPage = () => {
  const initialState = { id: 1, name: "" };
  const { user, setUser } = useContext(UserContext);

  const [values, setValues] = useState(user);

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value, //Access to the property of the object that has the name of the input
    });
  };

  const handleLogIn = () => {
    const name = values.name.trim();
    if (!name.length) return;
    setUser({ id: Date.now(), name: name });
    setValues(initialState);
  };

  return (
    <>
      <h3>Login Page</h3>
      <hr />
      <Form.Label htmlFor="name">Name</Form.Label>
      <Form.Control
        type="Text"
        id="name"
        aria-describedby="nameTextBlock"
        onChange={handleInputChange}
        name="name"
        value={values.name}
      />
      <div className="d-grid">
        <Button className="mt-2" variant="primary" onClick={handleLogIn}>
          Log In
        </Button>
      </div>
    </>
  );
};

export default LoginPage;
