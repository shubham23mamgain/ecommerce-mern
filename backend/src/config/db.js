const mongoose = require("mongoose");

const connectDb = async () => {
  return await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log(`Database Connected`))
    .catch((err) => console.error("Error", err.message));
};

module.exports = { connectDb };
