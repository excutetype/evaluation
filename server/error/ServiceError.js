const errorConstant = require("../error/Constant");

module.exports = {
  PostServiceError: class PostServiceError extends Error {
    constructor(message) {
      super(message);
      this.name = "PostServiceError";
      this.kind = errorConstant.errorKind.SERVICE_ERROR;
    }
  },
};
