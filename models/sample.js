module.exports = function (sequelize, DataTypes) {
  const Sample = squelize.define("Sample", {
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
  });
  return Sample;
};
