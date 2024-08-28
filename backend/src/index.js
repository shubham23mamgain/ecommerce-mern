const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const authRouter = require("./routes/auth.routes.js");
const userRouter = require("./routes/user.routes.js");
const productRouter = require("./routes/product.routes.js");

const cartRouter = require("./routes/cart.routes.js");
const cartItemRouter = require("./routes/cartItem.routes.js");
const orderRouter = require("./routes/order.routes.js");
const paymentRouter = require("./routes/payment.routes.js");
const reviewRouter = require("./routes/review.routes.js");
const ratingRouter = require("./routes/rating.routes.js");

// admin routes handler
const adminProductRouter = require("./routes/product.admin.routes.js");
const adminOrderRoutes = require("./routes/adminOrder.routes.js");

app.use("/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/admin/products", adminProductRouter);
app.use("/api/cart", cartRouter);
app.use("/api/cart_items", cartItemRouter);
app.use("/api/orders", orderRouter);
app.use("/api/payments", paymentRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/ratings", ratingRouter);
app.use("/api/admin/orders", adminOrderRoutes);

app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "welcome to Ecommerce API", success: true });
});

module.exports = { app };
