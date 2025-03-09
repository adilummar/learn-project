import User from "../models/user.model.js";
import bcrypt, { compareSync } from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  const validUser = await User.findOne({ email });
  if (!validUser) return next(errorHandler(404, "user not found"));

  const validPassword = await compareSync(password, validUser.password);
  if (!validPassword) return next(errorHandler(401, "Wrong credentioanls"));

  const {password:pass, ...rest} = validUser._doc;
  const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
  res
    .cookie("access-token", token, { httpOnly: true })
    .status(200)
    .json(rest);
};
