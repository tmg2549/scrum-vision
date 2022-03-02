const fs = require('fs');
const db = require('../models/scrumVisionModels')

const insertionController = {};

//inserts sprint into sprint_types table
insertionController.insertSprint = async (req, res, next) => {
  try {
    const { _id, type, sprint_planning_minutes, sprint_review_minutes, sprint_retrospective_minutes, number_of_days } = req.body;
    const params = [ _id, type, sprint_planning_minutes, sprint_review_minutes, sprint_retrospective_minutes, number_of_days ];
    const query = `INSERT INTO sprint_types(_id, type, sprint_planning_minutes, sprint_review_minutes, sprint_retrospective_minutes, number_of_days)
                   VALUES($1, $2, $3, $4, $5, $6);`;
    const result = await db.query(query, params)
    res.locals.sprint = result;
    return next();
  } catch (error) {
    return next({
      log: `Error occurred in insertSprint: ${error}`,
      status: 500,
      message: `An error occurred in insertSprint. Check log.`
    });
  }
};

//inserts role into roles table
insertionController.insertRole = async (req, res, next) => {
  try {
    const { _id, position } = req.body;
    const params = [ _id, position ];
    const query = `INSERT INTO roles(_id, position)
                   VALUES($1, $2);`;
    const result = await db.query(query, params)
    res.locals.role = result;
    return next();
  } catch (error) {
    return next({
      log: `Error occurred in insertRole: ${error}`,
      status: 500,
      message: `An error occurred in insertRole. Check log.`
    });
  }
};

//inserts a person into people table
insertionController.insertPerson = async (req, res, next) => {
  try {
    const { _id, name, job_title } = req.body;
    const params = [ _id, name, job_title ];
    const query = `INSERT INTO people(_id, name, job_title)
                   VALUES($1, $2, $3);`;
    const result = await db.query(query, params)
    res.locals.person = result;
    return next();
  } catch (error) {
    return next({
      log: `Error occurred in insertPerson: ${error}`,
      status: 500,
      message: `An error occurred in insertPerson. Check log.`
    });
  }
};

//inserts a product into product table
insertionController.insertProduct = async (req, res, next) => {
  try {
    const { _id, name, category, description, product_goal, product_vision } = req.body;
    const params = [ _id, name, category, description, product_goal, product_vision ];
    const query = `INSERT INTO products(_id, name, category, description, product_goal, product_vision)
                   VALUES($1, $2, $3, $4, $5, $6);`;
    const result = await db.query(query, params)
    res.locals.product = result;
    return next();
  } catch (error) {
    return next({
      log: `Error occurred in insertProduct: ${error}`,
      status: 500,
      message: `An error occurred in insertProduct. Check log.`
    });
  }
};

module.exports = insertionController;