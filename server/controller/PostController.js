const PostsSerivce = require("../serivce/PostsSerivce");

module.exports = {
  save: async (req, res, next) => {
    try {
      const { postData } = req.body;
      await PostsSerivce.save(postData);
    } catch (err) {
      next(err);
    }
  },
};
