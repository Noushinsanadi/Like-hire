import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        username,
        password,
      });
        alert("login Successful");
      setMessage(response.data.message);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Container className="login-container">
      <h1>Login</h1>
      <Form>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
        <p className="message">{message}</p>
      </Form>
    </Container>
  );
}

export default Login;
