const combine = require('./combine').route;
const combineAndSave = require('./combineAndSave').route;
const like = require('./like').route;
const unlike = require('./unlike').route;
const fetchAll = require('./fetchAll').route;

module.exports = [].concat(
  combine,
  combineAndSave,
  like,
  unlike,
  fetchAll,
);
