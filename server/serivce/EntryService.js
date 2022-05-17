const ValidateService = require("./ValidateService");
const UserRepository = require("../repository/UserRepository");
const ServiceError = require("../error/ServiceError");
const bcrypt = require("bcrypt");

module.exports = {
  login: () => {
    try {
    } catch (errMsg) {
      throw new ServiceError.EntryServiceError(
        "entry service encountered an error login : " + errMsg
      );
    }
  },
  register: async (registerData) => {
    try {
      if (ValidateService.isInvaildRegisterData(registerData)) {
        throw "invaild request data";
      }

      const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(registerData.password, 10, (err, digest) => {
          if (err) reject(err);
          resolve(digest);
        });
      });
      registerData.password = hashedPassword;

      const createUser = await UserRepository.create(registerData);

      return createUser;
    } catch (errMsg) {
      throw new ServiceError.EntryServiceError(
        "entry service encountered an error register : " + errMsg
      );
    }
  },
};
