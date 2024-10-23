const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./backend/routes/users");
const cors = require("cors");
const bcrypt = require("bcrypt");

//Load environment variables
dotenv.config();

//Initialize express app
const app = express();
const corsOptions = {
  origin: "http://localhost:5001",
  methods: "GET,POST,PUT, DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

//Middleware for JSON parsing
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.log("MongoDB connection error", error));

app.use("/api/users", userRoutes);

app.get("/sample", async (req, res) => {
  const password = req.body.password;

  const hashPassword = await bcrypt.hash(password, 10);
  res.json({ message: hashPassword });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
