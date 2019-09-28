module.exports = function(sequelize, DataTypes) {
  var Business = sequelize.define("Business", {
    businessName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    contactName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
        isAlpha: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
        isEmail: true
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
        isAlpha: true
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
        isAlpha: true
      }
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5],
        isNumeric: true
      }
    }
  });

  Business.associate = function(models) {
    Business.hasMany(models.BusinessServices, {});
  };

  return Business;
};
