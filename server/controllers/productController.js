const fs = require('fs');
const db = require('../models/scrumVisionModels');

const productController = {};

productController.getProduct = async (req, res, next) => {
  try {
    const { id } = req.body;
    const params = [ id, firstname, lastname ];
    const query = `
    SELECT * FROM products
    WHERE _id = $1;`;
    const result = await db.query(query, params)
    const [product] = result.rows;
    res.locals.product = product;
    return next();
  } catch (error) {
    return next({
      log: `Error occurred in getProduct: ${error}`,
      status: 500,
      message: `An error occurred in getProduct. Check log.`
    });
  }
};

productController.getProductTeams = async (req, res, next) => {
  try {
    const { id } = req.body;
    const params = [ id ];
    const query = `
    SELECT t._id, t.team_name, t.sprint_start_date, t.sprint_goal, s.type
    FROM teams t
    INNER JOIN sprint_types s ON s._id=t.sprint_id
    WHERE product_id = $1;`;
    const result = await db.query(query, params)
    res.locals.teams = result.rows;
    return next();
  } catch (error) {
    return next({
      log: `Error occurred in getProductTeams: ${error}`,
      status: 500,
      message: `An error occurred in getProductTeams. Check log.`
    });
  }
};

productController.getPeopleRolesTeams = async (req, res, next) => {
  try {
    const { id } = req.body;
    const params = [ id ];
    const query = `
    SELECT prt.*
    FROM people p
    INNER JOIN people_roles_in_teams prt ON p._id = prt.person_id
    INNER JOIN teams t ON t._id = prt.team_id
    INNER JOIN roles r ON r._id = prt.role_id
    WHERE t.product_id = $1;`;
    const result = await db.query(query, params)
    res.locals.peopleRolesInTeams = result.rows;
    return next();
  } catch (error) {
    return next({
      log: `Error occurred in getProductTeams: ${error}`,
      status: 500,
      message: `An error occurred in getProductTeams. Check log.`
    });
  }
};

productController.getProductPeople = async (req, res, next) => {
  try {
    const { id } = req.body;
    const params = [ id ];
    const query = `
    SELECT p.*
    FROM people p
    INNER JOIN people_roles_in_teams prt ON p._id = prt.person_id
    INNER JOIN teams t ON t._id = prt.team_id
    WHERE t.product_id = $1;`;
    const result = await db.query(query, params)
    res.locals.people = result.rows;
    return next();
  } catch (error) {
    return next({
      log: `Error occurred in getProductTeams: ${error}`,
      status: 500,
      message: `An error occurred in getProductTeams. Check log.`
    });
  }
};

productController.getProductItems = async (req, res, next) => {
  try {
    const { id } = req.body;
    const params = [ id ];
    const query = `
    SELECT i.*
    FROM product_backlog_items i
    WHERE product_id = $1;`;
    const result = await db.query(query, params)
    res.locals.items = result.rows;
    return next();
  } catch (error) {
    return next({
      log: `Error occurred in getProductTeams: ${error}`,
      status: 500,
      message: `An error occurred in getProductTeams. Check log.`
    });
  }
};

productController.getProductCommitments = async (req, res, next) => {
  try {
    const { id } = req.body;
    const params = [ id ];
    const query = `
    SELECT ip.*
    FROM items_for_people ip
    INNER JOIN product_backlog_items i ON ip.item_id = i._id
    INNER JOIN people p ON p._id = ip.person_id
    WHERE i.product_id = $1;`;
    const result = await db.query(query, params)
    res.locals.commitments = result.rows;
    return next();
  } catch (error) {
    return next({
      log: `Error occurred in getProductTeams: ${error}`,
      status: 500,
      message: `An error occurred in getProductTeams. Check log.`
    });
  }
};

//input: array of object
//output: array of people object with team and role responsibilities nested
function sortPeople(objectArray) {

}

module.exports = productController;