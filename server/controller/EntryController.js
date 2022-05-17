const EntryService = require("../serivce/EntryService");

module.exports = {
  login: (req, res, next) => {
    try {
      //   await PostsSerivce.save(title, content, author);
    } catch (err) {
      next(err);
    }
  },
  register: async (req, res, next) => {
    try {
      const { data } = req.body;

      await EntryService.register(data);
    } catch (err) {
      next(err);
    }
  },
};
