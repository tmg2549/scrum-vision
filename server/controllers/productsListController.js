const fs = require('fs');
const db = require('../models/scrumVisionModels');

const productsListController = {};

productsListController.getProductsList = async (req, res, next) => {
  try {
    const query = `
    SELECT * FROM products
    ;`;
    const result = await db.query(query)
    const products = result.rows;
    res.locals.products = products;
    return next();
  } catch (error) {
    return next({
      log: `Error occurred in getProduct: ${error}`,
      status: 500,
      message: `An error occurred in getProduct. Check log.`
    });
  }
};

module.exports = productsListController;