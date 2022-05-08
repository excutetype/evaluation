const errorConstant = require("../error/Constant");

module.exports = {
  QueryError: class QueryError extends Error {
    constructor(message) {
      super(message);
      this.name = "QueryError";
      this.kind = errorConstant.errorKind.REPOSITORY_ERROR;
    }
  },
};
