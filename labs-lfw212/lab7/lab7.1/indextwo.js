const http = require('node:http');
const express = require('express');
const dotenv = require('dotenv');
const { request } = require('undici');

dotenv.config();

const server = express();
const port = process.env.PORT || 3000;

server.get("/:id", async (req, res, next) => {
  try {
    /**
     * https://jsonplaceholder.typicode.com/todos/1
     * */
    const { body: jsonplaceholderBody } = await request(
      `https://jsonplaceholder.typicode.com/todos/${req.params.id}`
    );
    const jsonplaceholderData = await jsonplaceholderBody.json();
    console.log(jsonplaceholderData)
    

    res.json({
      title: jsonplaceholderData?.title
    });
  } catch (err) {
    if (err.response?.statusCode === "404") {
      next();

      return;
    }

    if (err.response?.statusCode === "400") {
      const badReq = new Error("bad request");
      badReq.status = 400;
      next(badReq);

      return;
    }

    next(err);
  }
});

server.use((_, res) => {
  res.status(404).json({ message: "not found" });
});

server.use((err, _req, res, _next) => {
  res.status(err.status ?? 500).json({
    status: err.status ?? 500,
    code: err?.code,
    message: err.message ?? "internal server error",
  });
});

http.createServer(server).listen(port, function () {
  console.log("Listening on ", this.address());
});