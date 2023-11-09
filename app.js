const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const app = express();
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
console.log(__dirname + "/public/favicon.png");

app.use(favicon(__dirname + "/public/favicon.png"));
const port = 3000;

app.get("/as", function (req, res) {
  res.sendFile(__dirname + "/public/main.html");
});

app.post("/as", function (req, res) {
  console.log("Проверка post найдена ");
  console.log(req.body);
  console.log(req.body.name);
  // console.log(req.body.pass);
  console.log("Файл создан");
  res.end("прощли post test");
});

app.post("/test", function (req, res) {
  console.log("Прошли пол пути test");
  res.end("END!!!");
});

// npm run dev
app.listen(port, function () {
  console.log("listerning on", port, "port");
});

function myFileAdd(myPath) {
  fs.appendFile(
    __dirname + "/public/1.txt",
    "Случилось событие по пути " +
      myPath +
      " Время события " +
      new Date().toLocaleString() +
      `\n`,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}

myFileAdd("");

app.get("/roman", (req, res) => {
  myFileAdd('"/roman"');
  res.sendFile(__dirname + "/public/index.html");
});
