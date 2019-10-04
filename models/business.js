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
        len: [1, 140]
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
        is: /^[a-zA-Z ]+$/i
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
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
    Business.belongsToMany(models.Services, { 
      through: "BusinessServices"
    });
  };

  return Business;
};
