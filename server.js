const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./backend/routes/users");
const cors = require("cors");

//Load environment variables
dotenv.config();

//Initialize express app
const app = express();

//Middleware for JSON parsing
app.use(express.json());
app.use(cors);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.log("MongoDB connection error", error));

app.use("/api/users", userRoutes);

app.get("/sample", (req, res) => {
  console.log("sample");
  res.json({ Message: "Request sent successfully" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
