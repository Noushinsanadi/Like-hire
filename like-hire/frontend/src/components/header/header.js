import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import Button from "@mui/material/Button";
import AvatarPic from "../../assets/images/avatar.png";
import Logo from "../../assets/images/logo.png";
import { useParams } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Header() {
  const navigate = useNavigate();
  const params = useParams();
  const currentPage = params["*"];
  const [profile, setProfile] = useState("my-profile");
  const [active, setActive] = useState(false);
  const handleChange = (event) => {
    setProfile(event.target.value);
  };
   const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", { userName });
      setMessage(response.data.message);
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <>
    <div className="header">
      <div className="container">
        <img src={Logo} alt="logo" />
        <div
          className={active ? "activate toggle" : "toggle"}
          onClick={() => {
            setActive(!active);
          }}
        >
          <span className="line-toggle"></span>
          <span className="line-toggle"></span>
          <span className="line-toggle"></span>
        </div>
        <ul className={active ? "active navigation" : "navigation"}>
          <li className="list-item">
            <Link to="/" className={currentPage === undefined ? "active" : ""}>
              Dashboard
            </Link>
          </li>
          <li className="list-item">
            <Link
              to="/applications"
              className={currentPage === "Applicants" ? "active" : ""}
            >
              Applicants
            </Link>
          </li>
          <li className="list-item">
            <Link
              to="/jobList"
              className={currentPage === "jobs" ? "active" : ""}
            >
              Jobs
            </Link>
          </li>
          <li className="list-item">
            <Link
              to="/PostJobForm"
              className={currentPage === "post-job" ? "active" : "notification"}
            >
              Post a Job
            </Link>
          </li>
        </ul>
        <div className="actions">
          <Button variant="contained" onClick={() => navigate("/PremiumPage")}>
            Go Unlimited
          </Button>
          <div className="profile">
            <div className="avatar">
              <img src={AvatarPic} alt="logo" />
            </div>
           <Select value={userName} onChange={handleChange}>
          <MenuItem value={"my-profile"}>My Profile</MenuItem>
          <MenuItem value={"jane"}>Jane</MenuItem>
          <MenuItem value={"jolly"}>Jolly</MenuItem>
            </Select>
            </div>
      
          </div>
          
      <Button variant="contained" onClick={()=>navigate("/Login")}>
        Login
      </Button>
          </div>
        </div>
  
    </>
  );
}
