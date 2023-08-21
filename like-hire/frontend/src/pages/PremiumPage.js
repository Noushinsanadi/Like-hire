import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import axios from "axios";

function PremiumPage() {
  const [userId, setUserId] = useState("");

  const handleUpgrade = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/gopremium", {
        userId,
      });

      console.log(response.data);
      alert("upgraded to premium");
    } catch (error) {
      console.error("Error upgrading to premium:", error);
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Go Premium</h1>
      <center>
        <Form>
          <Form.Group controlId="userId">
            <Form.Label>User ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your user ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleUpgrade}>
            Upgrade to Premium
          </Button>
        </Form>
      </center>
    </Container>
  );
}

export default PremiumPage;
