module.exports = function(sequelize, DataTypes) {
  var BusinessServices = sequelize.define("BusinessServices", {});
  BusinessServices.associate = function(models) {
    BusinessServices.belongsTo(models.Business, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  BusinessServices.associate = function(models) {
    BusinessServices.belongsTo(models.Services, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return BusinessServices;
};
