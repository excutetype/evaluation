const express = require("express");
const router = express.Router();

const EntryController = require("./EntryController");
const PostController = require("./PostController");
const ErrorController = require("../controller/ErrorController");

router.post("/api/entry/login", EntryController.login);
router.post("/api/entry/register", EntryController.register);

router.get("/api/post", PostController.save);

router.use(ErrorController.errorHandler);

module.exports = router;
