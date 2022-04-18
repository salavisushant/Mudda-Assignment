const express = require('express');

const cors = require('cors');

// importing express for connecting server, as well importing cors for removing cors error while http request.

const app = express ();

app.use(express.json());

app.use(cors());

const translateController = require("./controller/translate.controller");

// here I created the perticuler path for this api we will use /translate while CRUD Operations.

app.use("/translate",translateController);


module.exports = app;