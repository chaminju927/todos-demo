const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const app = express();
app.use(bodyParser.json());
app.use("/api", indexRouter); // api라는 주소로 호출 오면 indexrouter로 가고-> 거기서 /task있으면 task.api로 이동
const mongoURI = `mongodb://localhost:27017/todo-demo`;

mongoose
  .connect(
    mongoURI
    //, { useNewUrlParser: true }
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("db connection fail", err);
  });

app.listen(5000, () => {
  console.log("Server on 5000");
});
