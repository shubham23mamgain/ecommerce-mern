const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZOR_API_KEY,
  key_secret: process.env.RAZOR_API_SECRET,
});

module.exports = razorpay;
