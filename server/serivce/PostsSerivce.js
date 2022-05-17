const PostsRepository = require("../repository/PostRepository");
const ServiceError = require("../error/ServiceError");

module.exports = {
  save: async (postData) => {
    try {
      const createPost = await PostsRepository.create(postData);
      return createPost;
    } catch (errMsg) {
      throw new ServiceError.PostServiceError(
        "post service encountered an error saving : " + errMsg
      );
    }
  },
};
