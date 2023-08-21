import React from "react";
import { Card } from "react-bootstrap";

function Applications() {
  const jobApp = [
    {
      id: 1,
      jobTitle: "Web Developer",
      applicantName: "John Doe",
      status: "Pending",
    },
    {
      id: 1,
      jobTitle: "Dentist",
      applicantName: "John Doe",
      status: "Pending",
    },
    {
      id: 2,
      jobTitle: "doctor",
      applicantName: "John Doe",
      status: "Pending",
    },
    {
      id: 1,
      jobTitle: "nurse",
      applicantName: "John Doe",
      status: "Pending",
    },

    // Add more job applications as needed
  ];
  return (
    <div>
      {jobApp.map((Application) => (
        <Card key={Application.id} className="mb-3">
          <Card.Body>
            <Card.Title>Job Title: {Application.jobTitle}</Card.Title>
            <Card.Text>Applicant Name: {Application.applicantName}</Card.Text>
            <Card.Text>Status: {Application.status}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Applications;
