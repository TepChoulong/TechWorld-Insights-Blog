const loginForAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  res.status(200).json({
    success: true,
    message: "Login Successful",
  });
};

export { loginForAdmin };
