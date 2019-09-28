module.exports = function(sequelize, DataTypes) {
  var Services = sequelize.define("Services", {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
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
    Services.hasMany(models.BusinessServices, {});
  };

  return Services;
};
