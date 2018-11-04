const express = require("express");
const port = 3001;
app = express();

const routes = require("./routes");
app.use("/", routes);

app.use(function(req, res) {
  console.log(req.method);
  res.send("ECO WHEELS\narkadia_ew API");
});

app.listen(port, function() {
  console.log("Server running al http//:127.0.0.1:" + port);
});
