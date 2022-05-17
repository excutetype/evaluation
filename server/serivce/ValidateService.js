const NullCheck = require("../utils/NullCheck");

module.exports = {
  isInvaildRegisterData: (registerData) => {
    if (
      NullCheck.object.isKeyNull(registerData) ||
      NullCheck.object.isValueNull(registerData)
    ) {
      return true;
    }

    if (registerData.userId.match(/[^a-z|A-Z|0-9]/g)) {
      return true;
    }

    if (registerData.nickname.match(/[^a-z|A-Z|0-9|ㄱ-ㅎ|가-힣]/g)) {
      return true;
    }

    if (registerData.password !== registerData.confirmPassword) {
      return true;
    }

    return false;
  },
};
