const express = require("express");
const app = express();

app.get("/", (req,res) => { 
  res.send("Server Started")
});

app.listen(3000, () => {
  console.log("app listening on 3000")
})

