const express = require("express");
const path = require("path");

const app = express();
PORT = 3000;

app.use(
  "/static",
  express.static(path.resolve(__dirname, "public", "static"))
);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(process.env.PORT || PORT, () =>
  console.log("Server is running on port " + PORT)
);
