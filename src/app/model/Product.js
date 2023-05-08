const fs = require('fs');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../service/db_config');

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.SMALLINT,
        notNull: true,
        notEmpty: true,
        primaryKey: true,
        autoIncrement: true,
    },
    product_type: DataTypes.STRING,
    cate_desc: DataTypes.STRING,
});

const Brand = sequelize.define('Brand', {
    id: {
        type: DataTypes.SMALLINT,
        notNull: true,
        notEmpty: true,
        primaryKey: true,
        autoIncrement: true,
    },
    brand_name: DataTypes.STRING,
    brand_dsc: DataTypes.STRING,
});

const Discount = sequelize.define('Discount', {
    id: {
        type: DataTypes.INTEGER,
        notNull: true,
        notEmpty: true,
        primaryKey: true,
        autoIncrement: true,
    },
    percent: DataTypes.DECIMAL(3, 2),
    desc: DataTypes.STRING,
});

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        notNull: true,
        notEmpty: true,
        primaryKey: true,
        autoIncrement: true,
    },
    product_name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.BIGINT,
});

Brand.hasMany(Product);

Product.belongsTo(Brand);

Discount.hasMany(Product);
Product.belongsTo(Discount);

Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = { Brand, Product, Category, Discount };

/*class Product {
    constructor(id, name, type, price, brand, img, quant) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.img = img;
        this.quant = quant;
    }
}
const products = jsonData.map(
    (product) =>
        new product(product.id, product.name, product.type, product.price, product.brand, product.img, product.quant),
);

module.exports = { Product, products };
*/
