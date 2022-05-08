const errorConstant = require("../error/Constant");
const { logger } = require("../config/winston");

module.exports = {
  errorHandler: (err, req, res, next) => {
    logger.error(err);
    if (
      err.kind === errorConstant.errorKind.SERVICE_ERROR ||
      err.kind === errorConstant.errorKind.REPOSITORY_ERROR
    ) {
      res.status(500).send("서비스 요청 중 오류가 발생했습니다.");
    }
  },
};
