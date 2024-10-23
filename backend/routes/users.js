const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const router = express.Router();

//Create a new user

router.post("/register", async (req, res) => {
  let { name, email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    password = hashPassword;
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      res.status(409).json({ message: "user already existed" });
    } else {
      const newUser = new User({ name, email, password });
      await newUser.save();
    }
    res.status(201).json(checkUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Get all Users
router.get("/", async (req, res) => {
  console.log("Get all users");
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Get user by user name
router.get("/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const user = await User.findOne({
      name: { $regex: new RegExp(name, "i") },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Save product for user
router.post("/:id/products", async (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  try {
    const user = await User.findOne({ id });
    if (!user) {
      res.status(404).json({ message: "user not found" });
    }
    const newProduct = { name, price, description };
    user.products.push(newProduct);
    await user.save();
    res.status(201).json({ message: "product saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//delete user

router.delete("/deleteUser/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOneAndDelete({
      name: { $regex: new RegExp(username, "i") },
    });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({ message: "user deleted succesfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//delete a specfic product

router.delete("/deleteProduct/:userId/:productId", async (req, res) => {
  const { userId, productId } = req.params;
  try {
    const user = await User.findOne({ id: userId });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const productIndex = user.products.findIndex(
      (product) => product._id.toString() === productId
    );
    if (productIndex === -1) {
      return res.status(404).json({ message: "product not found" });
    }
    user.products.splice(productIndex, 1);
    await user.save();
    res.status(200).json({ message: "product deleted succesfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Update a product

router.put("/:userId/products/:productId", async (req, res) => {
  const { userId, productId } = req.params;
  const { name, price, description } = req.body;
  try {
    const user = await User.findOne({ id: userId });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const product = user.products.find(
      (product) => product._id.toString() === productId
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    if (name) product.name = name;
    if (price) product.price = price;
    if (description) product.description = description;

    await user.save();
    res.status(200).json({ message: "product updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
