const JWT = require("jsonwebtoken");
const userModel = require("../models/model");

// protected route token based
// middleware.js

const requireSignIn = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
  
      if (!token) {
        return res.status(401).send({
          success: false,
          message: "Token is missing. Authorization denied.",
        });
      }
  
      const decoded = JWT.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Set decoded user information to req.user
      console.log(req.user); // Log decoded user information
      next();
    } catch (error) {
      console.log(error);
      res.status(401).send({
        success: false,
        message: "There is an error in the token. Authorization denied.",
      });
    }
  };
  

  // isAdmin
const isAdmin = async (req, res, next) => {
    try {
      const user = await userModel.findById(req.user._id);
  
      if (!user || user.role !== 1) {
        return res.status(401).send({
          success: false,
          message: "Unauthorized Access",
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401).send({
        success: false,
        message: "There is an error in the token. Authorization denied",
      });
    }
  };
module.exports = { requireSignIn, isAdmin }

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc2MzA1ZmM2NDUyNWU1MzU0ZDcwM2IiLCJpYXQiOjE3MDIyNDQ0NDcsImV4cCI6MTcwMjUwMzY0N30.Co_bTVXtyka9bUfq4mcvF5L4HcF538WOLgLWf3H2ijA

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc2YWE2MjJjZGExZTMxN2YyMGRiYzciLCJpYXQiOjE3MDIyNzU4MjYsImV4cCI6MTcwMjUzNTAyNn0.kNqQQN_9H6Fy7eJSd0GVn6FKW58FEMOpp1JfKwxQJms