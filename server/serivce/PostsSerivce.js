const PostsRepository = require("../repository/PostsRepository");
const ServiceError = require("../error/ServiceError");

module.exports = {
  save: async (title, content, author) => {
    try {
      const createPost = await PostsRepository.create(title, content, author);
      return createPost;
    } catch (errMsg) {
      throw new ServiceError.PostServiceError(
        "post service encountered an error saving : " + errMsg
      );
    }
  },
};
