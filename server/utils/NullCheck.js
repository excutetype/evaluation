module.exports = {
  object: {
    isKeyNull: (data) => {
      if (Object.keys(data).length === 0) {
        return true;
      } else {
        return false;
      }
    },
    isValueNull: (data) => {
      const isNotNull = Object.values(data).every((value) => {
        if (value === null || value === undefined || value === "") {
          return false;
        }
        return true;
      });

      if (isNotNull) {
        return false;
      } else {
        return true;
      }
    },
  },
};
