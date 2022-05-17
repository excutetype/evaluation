const post = require("../models").post;
const RepositoryError = require("../error/RepositoryError");

module.exports = {
  create: ({ title, content, author }) => {
    return new Promise((resolve, reject) => {
      post
        .create({
          title: title,
          content: content,
          author: author,
        })
        .then((result) => {
          resolve(result);
        })
        .catch((errMsg) => {
          reject(
            new RepositoryError.QueryError(
              "error creating post to DB : " + errMsg
            )
          );
        });
    });
  },
};
