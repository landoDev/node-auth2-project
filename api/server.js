const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const usersRouter = require("../users/users-router.js");
const authRouter = require("../auth/auth-router.js");
// require auth middleware

const server = express();


server.use(helmet());
server.use(express.json());
server.use(cors());


server.use("/api/users", usersRouter); // add auth middleware here
server.use("/api/auth", authRouter)

server.get("/", (req, res) => {
  res.json({ api: "up" });
});



module.exports = server;