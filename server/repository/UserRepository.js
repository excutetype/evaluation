const user = require("../models").user;
const RepositoryError = require("../error/RepositoryError");

module.exports = {
  create: ({ userId, nickname, password }) => {
    return new Promise((resolve, reject) => {
      user
        .create({
          user_id: userId,
          nickname: nickname,
          password: password,
        })
        .then((result) => {
          resolve(result);
        })
        .catch((errMsg) => {
          reject(
            new RepositoryError.QueryError(
              "error creating user to DB : " + errMsg
            )
          );
        });
    });
  },
};
