module.exports = function(sequelize, DataTypes) {
  var Services = sequelize.define("Services", {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 140]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Services.associate = function(models) {
    Services.belongsToMany(models.Business, { through: "BusinessServices" });
  };

  return Services;
};
