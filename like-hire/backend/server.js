const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

// Connect to the MongoDB database
mongoose.connect(
  "mongodb+srv://noushinsanadi50:Job-App123@cluster0.5hjske1.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database");
});

// Define job schema and model
const jobSchema = new mongoose.Schema({
  id: String,
  name: String,
  location: String,
  description: String,
});

const Job = mongoose.model("Job", jobSchema);

// Create a new job
app.post("/api/jobs", async (req, res) => {
  const { name, location, description } = req.body;
  const newJob = new Job({
    id: Date.now().toString(),
    name,
    location,
    description,
  });

  try {
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    console.error("Error saving job:", error);
    res.status(500).json({ error: "An error occurred while saving the job" });
  }
});

// Retrieve all jobs
app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    console.error("Error retrieving jobs:", error);
    res.status(500).json({ error: "An error occurred while retrieving jobs" });
  }
});

// Handle GET request for the root path
app.get("/", (req, res) => {
  res.send("hello world");
});

const userSchema = new mongoose.Schema({
  userId: String,
  isPremium: Boolean,
});

const User = mongoose.model("User", userSchema);

app.post("/api/gopremium", async (req, res) => {
  const { userId } = req.body;

  try {
    // Update the user's status in the database
    const updatedUser = await User.findOneAndUpdate(
      { userId },
      { isPremium: true },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User upgraded to premium", user: updatedUser });
  } catch (error) {
    console.error("Error upgrading user:", error);
    res.status(500).json({ message: "Error upgrading user" });
  }
});


// Login page


const users = [
  {
    id: 1,
    username: "user1",
    password: "user123", // Password: password123
  },
  
];

const secretKey = "Login"; // Replace with your own secret key



app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });

  res.json({ message: "Login successful", token });
});

// see Application page



app.get("/applications", (req, res) => {
  res.render("applications", { jobApplications });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
