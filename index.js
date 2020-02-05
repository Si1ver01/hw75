const express = require("express");
const app = express();
const caesarRoute = require("./routes/caesar.route");
const PORT = 8000;

app.use(express.json());
app.use("/caesar", caesarRoute);

app.listen(PORT, () => {
  console.log(`Server start on ${PORT} port`);
});
