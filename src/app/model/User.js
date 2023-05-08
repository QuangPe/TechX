const fs = require('fs');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../service/db_config');

const Customer = sequelize.define(
    'Customer',
    {
        userName: {
            type: DataTypes.STRING,
            notNull: true,
            notEmpty: true,
            primaryKey: true,
        },
        pass: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
    },
    {
        tableName: 'customer',
    },
);

module.exports = Customer;

/*class User {
    constructor(id, username,password,first_name,last_name,phone,email,address,city) {
      this.id = id;
      this.user=username;
      this.password=password;
      this.first_name = first_name;
      this.last_name = last_name;
      this.phone = phone;
      this.email = email;
      this.address=address;
      this.city=city;
      this.email = email;

    }
  }
  const users = jsonData.map( 
    (user) => new User(user.id, user.username,user.password,user.first_name,
      user.last_name,user.phone,user.email,user.address,user.city));
      
  
  module.exports = {User,
                    users
                };
*/
