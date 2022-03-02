const fs = require('fs');
const db = require('../models/scrumVisionModels')

const insertionController = {};

insertionController.insertSprint = async (req, res, next) => {
  try {
    console.log(req.body);
    // const { _id, type, sprint_planning_minutes, sprint_review_minutes, sprint_retrospective_minutes, number_of_days } = req.body;
    // params = [ _id, type, sprint_planning_minutes, sprint_review_minutes, sprint_retrospective_minutes, number_of_days ];
    // res.locals.sprint = params;
    return next();
  } catch (error) {
    return next({
      message: error
    });
  }
};

module.exports = insertionController;