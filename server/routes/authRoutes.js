const { Router } = require("express");
const {
  getUsersController,
  createUserController,
} = require("../contollers/authController");

const router = Router();

// routes api/auth/register
router.get("/register", getUsersController);
router.post("/register", createUserController);
module.exports = router;
