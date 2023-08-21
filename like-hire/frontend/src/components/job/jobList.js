import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import Job from "../../components/job"; // Import the Job component
import "./style.scss";

export default function JobsList(props) {
  const [action, setAction] = useState("");
  const [postedJobs, setPostedJobs] = useState([]);

  const handleChange = (event) => {
    setAction(event.target.value);
  };

  useEffect(() => {
    // Fetch posted jobs from the server
    async function fetchPostedJobs() {
      try {
        const response = await axios.get("http://localhost:3001/api/jobs");
        setPostedJobs(response.data);
      } catch (error) {
        console.error("Error fetching posted jobs:", error);
      }
    }

    fetchPostedJobs();
  }, []);

 
  return (
    <div>
      {postedJobs.map((job) => (
        <div key={job.id} className="job-tab">
        
          {/* Render the Job component for each posted job */}
          <Job data={job} />
        </div>
      ))}
    </div>
  );
}
