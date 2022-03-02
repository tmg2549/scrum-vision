const fs = require('fs');
const db = require('../models/scrumVisionModels')

const insertionController = {};

insertionController.insertSprint = async (req, res, next) => {
  try {
    // console.log(req.body);
    const { _id, type, sprint_planning_minutes, sprint_review_minutes, sprint_retrospective_minutes, number_of_days } = req.body;
    const params = [ _id, type, sprint_planning_minutes, sprint_review_minutes, sprint_retrospective_minutes, number_of_days ];
    const query = `INSERT INTO sprint_types(_id, type, sprint_planning_minutes, sprint_review_minutes, sprint_retrospective_minutes, number_of_days)
                   VALUES($1, $2, $3, $4, $5, $6);`;
    const result = await db.query(query, params)
    res.locals.sprint = result;
    return next();
  } catch (error) {
    return next({
      message: error
    });
  }
};

module.exports = insertionController;