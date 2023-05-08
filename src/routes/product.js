const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/ProductController');

router.use('/add/:id', productController.addProduct);
router.use('/brand/:name', productController.brand);
router.use('/detail/:id', productController.detail);
router.get('/type/:type', productController.type);
router.get('/page/:id', productController.page);

module.exports = router;
