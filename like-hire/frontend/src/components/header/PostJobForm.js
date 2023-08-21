import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function PostJobForm() {
  const [jobData, setJobData] = useState({
    name: "",
    location: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setJobData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/jobs",
        jobData
      );
      alert("Job posted:", response.data);
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  return (
    <div className="App">
      <h1>Post a Job</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formJobTitle">
          <Form.Label>Job Title:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={jobData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formLocation">
          <Form.Label>Location:</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={jobData.location}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Job Description:</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={jobData.description}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit Job
        </Button>
      </Form>
    </div>
  );
}

export default PostJobForm;
