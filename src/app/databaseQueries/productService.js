const sequelize = require('../service/db_config');
const ProductModels = require('../model/Product');

const getBrandID = async (brandName) => {
    try {
        const brandID = await ProductModels.Brand.findOne({
            attributes: ['id'],
            where: {
                brand_name: brandName,
            },
        });
        console.log(brandID.dataValues.id);
        return brandID.dataValues.id;
    } catch (err) {
        console.log(err);
        return err;
    }
};

const getTypeID = async (type) => {
    try {
        const typeID = await ProductModels.Category.findOne({
            attributes: ['id'],
            where: {
                product_type: type,
            },
        });

        return typeID.dataValues.id;
    } catch (err) {
        console.log(err);
        return err;
    }
};

const getProductByBrand = async (brandName) => {
    const brandID = await getBrandID(brandName);
    try {
        if (brandID == null) {
            return {
                result: null,
            };
        }
        const products = await ProductModels.Product.findAll({
            attributes: ['id', 'product_name', 'image', 'price'],
            where: {
                brandId: brandID,
            },
            include: [
                {
                    model: ProductModels.Brand,
                    required: true,
                    attributes: ['brand_name'],
                },
                {
                    model: ProductModels.Category,
                    required: true,
                    attributes: ['product_type'],
                },
                {
                    model: ProductModels.Discount,
                    required: true,
                    attributes: ['percent'],
                },
            ],
        });

        return {
            result: products,
        };
    } catch (err) {
        console.log(err);
        return err;
    }
};

const getProductByBrandID = async (brandID) => {
    try {
        const products = await ProductModels.Product.findAll({
            attributes: ['id', 'product_name', 'image', 'price'],
            where: {
                brandId: brandID,
            },
            include: [
                {
                    model: ProductModels.Brand,
                    required: true,
                    attributes: ['brand_name'],
                },
                {
                    model: ProductModels.Category,
                    required: true,
                    attributes: ['product_type'],
                },
                {
                    model: ProductModels.Discount,
                    required: true,
                    attributes: ['percent'],
                },
            ],
        });

        return {
            result: products,
        };
    } catch (err) {
        console.log(err);
        return err;
    }
};

const getProductByType = async (type) => {
    const typeID = await getTypeID(type);
    try {
        if (typeID == null) {
            return [
                {
                    result: null,
                },
            ];
        }
        const products = await ProductModels.Product.findAll({
            attributes: ['id', 'product_name', 'image', 'price'],
            where: {
                categoryId: typeID,
            },
            include: [
                {
                    model: ProductModels.Brand,
                    required: true,
                    attributes: ['brand_name'],
                },
                {
                    model: ProductModels.Category,
                    required: true,
                    attributes: ['product_type'],
                },
                {
                    model: ProductModels.Discount,
                    required: true,
                    attributes: ['percent'],
                },
            ],
        });

        return {
            result: products,
        };
    } catch (err) {
        console.log(err);
        return err;
    }
};

const viewProduct = async (id) => {
    try {
        const product = await ProductModels.Product.findOne({
            attributes: ['id', 'product_name', 'image', 'price'],
            where: {
                id: id,
            },

            include: [
                {
                    model: ProductModels.Brand,
                    required: true,
                    attributes: ['brand_name'],
                },
                {
                    model: ProductModels.Category,
                    required: true,
                    attributes: ['product_type'],
                },
                {
                    model: ProductModels.Discount,
                    required: true,
                    attributes: ['percent'],
                },
            ],
        });
        return product;
    } catch (err) {
        console.log(err);
        return err;
    }
};

const getProductByTypeID = async (id) => {
    try {
        const products = await ProductModels.Product.findAll({
            attributes: ['id', 'product_name', 'image', 'price'],
            where: {
                categoryId: id,
            },
            include: [
                {
                    model: ProductModels.Brand,
                    required: true,
                    attributes: ['brand_name'],
                },
                {
                    model: ProductModels.Category,
                    required: true,
                    attributes: ['product_type'],
                },
                {
                    model: ProductModels.Discount,
                    required: true,
                    attributes: ['percent'],
                },
            ],
        });

        return {
            result: products,
        };
    } catch (err) {
        console.log(err);
        return err;
    }
};

const getAllProducts = async () => {
    try {
        const products = await ProductModels.Product.findAll({
            attributes: ['id', 'product_name', 'image', 'price'],

            include: [
                {
                    model: ProductModels.Brand,
                    required: true,
                    attributes: ['brand_name'],
                },
                {
                    model: ProductModels.Category,
                    required: true,
                    attributes: ['product_type'],
                },
                {
                    model: ProductModels.Discount,
                    required: true,
                    attributes: ['percent'],
                },
            ],
        });
        return products;
    } catch (err) {
        console.log(err);
        return err;
    }
};

module.exports = {
    getProductByBrand,
    getProductByType,
    getProductByBrandID,
    getProductByTypeID,
    viewProduct,
    getAllProducts,
};
