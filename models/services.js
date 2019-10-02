module.exports = function(sequelize, DataTypes) {
  var Services = sequelize.define("Services", {
    category: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "N/A",
      validate: {
        len: [1, 140]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "N/A",
    }
  });

  Services.associate = function(models) {
    Services.hasMany(models.BusinessServices, {});
  };

  return Services;
};
