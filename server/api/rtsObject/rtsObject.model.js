'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RtsobjectSchema = new Schema({
  trend: String,
  date: Date,
  object: {},
  detail: {}
});

module.exports = mongoose.model('Rtsobject', RtsobjectSchema);