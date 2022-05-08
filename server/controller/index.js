const express = require("express");
const router = express.Router();

const PostController = require("./PostController");
const ErrorController = require("../controller/ErrorController");

router.post("/api/posts", PostController.save);

router.use(ErrorController.errorHandler);

module.exports = router;
