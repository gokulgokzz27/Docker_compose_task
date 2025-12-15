const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://db:27017/sampledb")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));

// Simple schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const User = mongoose.model("User", UserSchema);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "Backend is running" });
});

// Submit data
app.post("/submit", async (req, res) => {
  await User.create(req.body);
  res.json({ message: "Details saved successfully" });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
