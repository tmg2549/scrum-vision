const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/', productController.getProduct,
  productController.getProductTeams,
  productController.getPeopleRolesTeams,
  productController.getProductPeople,
  productController.getProductItems,
  productController.getProductCommitments, (req, res) => {
  return res.status(200).json(res.locals);
});

module.exports = router;