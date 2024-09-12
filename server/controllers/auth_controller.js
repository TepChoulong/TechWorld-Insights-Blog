import AuthModel from "../models/auth_model.js";

const getAdminAccount = async (req, res, next) => {
  try {
    const adminAccount = await AuthModel.find();

    if (!adminAccount) {
      return res.status(400).json({
        success: false,
        message: "Admin account not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Admin account found",
      adminAccount,
    });
  } catch (error) {
    next(error);
  }
};

const addAdminAccount = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!email.includes("@")) {
      return res.status(400).json({
        success: false,
        message: "Invalid email",
      });
    }

    const user = await AuthModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const newUser = new AuthModel({
      username: username,
      email: email,
      password: password,
      isAdmin: true,
    });

    await newUser.save();

    res.status(200).json({
      success: true,
      message: "Added Successful",
      user: newUser,
    });
  } catch (error) {
    next(error);
  }
};

const loginForAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const adminAccount = await AuthModel.findOne({ email });

    if (!adminAccount) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }

    res.status(200).json({
      success: true,
      message: "Login Successful",
      admin: adminAccount,
    });
  } catch (error) {
    next(error);
  }
};

export { loginForAdmin, addAdminAccount, getAdminAccount };
