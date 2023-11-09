<<<<<<< HEAD
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
=======
import express from "express";
import favicon from "express-favicon";
import { join } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = "3000";
const currentTime = new Date().toLocaleString();
const content = `${currentTime} : Логгируем ping по адресу: localhost:${port}`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "public")));
app.use(favicon(join(__dirname, "/public/favicon.png")));

app.listen(port, () => {
  fs.access("logs/logs.txt", fs.constants.F_OK, (err) => {
    if (err) {
      fs.writeFile("logs/logs.txt", content, (err) => {
        if (err) throw err;
      });
    } else {
      fs.appendFile("logs/logs.txt", `\n${content}`, (err) => {
        if (err) throw err;
      });
    }
  });
});

app.get("/as", (req, res) => {
  res.sendFile(__dirname + "/public/main.html");
});

app.get("/test", (req, res) => {
  res.end("deus (dea is better) ex machina");
});

app.post("/as", (req, res) => {
  console.log("Проверка post пройдена");
  console.log(req.body);
  res.end("! !.. !!! ? ?.. ??? ?!");
>>>>>>> 89ad1e465ea795582e9d8029e3a4b63897043f31
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
