const { app } = require(".");

const { connectDb } = require("./config/db");
const port = process.env.PORT | 5454;

connectDb();
app.listen(port, () => {
  console.log(`Ecommerce API listing on port ${port}`);
});
