const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../service/db_config');
const Customer = require('../model/User');
const ProductModels = require('../model/Product');

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
});

const Session = sequelize.define(
    'Session',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
    },
    {
        paranoid: true,
    },
);

const cartItem = sequelize.define('cartItem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    quantity: DataTypes.INTEGER,
});

const Payment = sequelize.define('Payment', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    amount: DataTypes.BIGINT,
});

const invoiceStatus = sequelize.define('invoiceStatus', {
    id: {
        type: DataTypes.CHAR(1),
        primaryKey: true,
    },
    desc: DataTypes.STRING,
});

const Invoice = sequelize.define('Invoice', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    desc: DataTypes.STRING,
});

const itemStatus = sequelize.define('itemStatus', {
    id: {
        type: DataTypes.CHAR(1),
        primaryKey: true,
    },
    description: DataTypes.STRING,
});

const orderItems = sequelize.define('orderItems', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    quantity: DataTypes.INTEGER,
});

Customer.hasMany(Order);
Order.belongsTo(Customer);
Session.hasMany(cartItem);
cartItem.belongsTo(Session);

Customer.hasMany(Session);
Session.belongsTo(Customer);

ProductModels.Product.hasOne(cartItem);
cartItem.belongsTo(ProductModels.Product);

itemStatus.hasMany(orderItems);
orderItems.belongsTo(itemStatus);

Order.hasMany(orderItems);
orderItems.belongsTo(Order);

ProductModels.Product.hasMany(orderItems);
orderItems.belongsTo(ProductModels.Product);

Order.hasOne(Payment);
Payment.belongsTo(Order);

invoiceStatus.hasMany(Invoice);
Invoice.belongsTo(invoiceStatus);

Payment.hasOne(Invoice);
Invoice.belongsTo(Payment);

module.exports = { Order, cartItem, Invoice, Payment, Session };
