const PostsSerivce = require("../serivce/PostsSerivce");

module.exports = {
  save: async (req, res, next) => {
    const content = req.body.content;
    const title = "test title";
    const author = "test author";

    try {
      await PostsSerivce.save(title, content);
    } catch (err) {
      next(err);
    }
  },
};
