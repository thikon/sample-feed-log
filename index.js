const express = require("express");
const path = require("path");
const filebeatLogger = require('filebeat-logger')
const logger = filebeatLogger.create('info', ['@timestamp', 'message'], ['error', 'warn']);


const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
    logger.info('I am an info message')
    logger.error('is error')
    res.status(200).send("hello logstash");
  });

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });