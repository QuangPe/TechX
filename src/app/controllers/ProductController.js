const { response } = require('express');
const ProductModels = require('../model/Product');
const productService = require('../databaseQueries/productService');

class ProductController {
    page(req, res, next) {
        const pageNumber = req.query.page;
        res.render('product/page');
        // switch case for rendering the product
    }

    type(req, res, next) {
        const type = req.params.type;
        const productList = productService.getProductByType(type);

        res.render('product/type', { productList });
    }

    detail(req, res, next) {
        const productId = req.params.id;
        const product = productService.viewProduct(productId);
        res.render('product/detail', { product });
    }

    brand(req, res, next) {
        const brandName = req.params.name;
        const productList = productService.getProductByBrand(brandName);
        res.render('product/brand', { productList });
    }

    addProduct(req, res, next) {}
}

module.exports = new ProductController();
