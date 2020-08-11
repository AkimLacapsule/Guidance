var express = require('express');
var router = express.Router();
var SHA256 = require("crypto-js/sha256");
var encBase64 = require("crypto-js/enc-base64");
var mongoose = require('mongoose');

var userModel = require("../models/users"); 

var cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name:"dvx36h3ub",
  api_key:"125794775985349",
  api_secret:"ozn8F-OjOcFuMD415z_FY95li2Y"
});





/* GET home page. */
router.get('/points-counter', async function(req, res, next) {
  var searchUser = await userModel.findOne({token:"JcJVTr56DEE5aha6ESMsknJQer0lYPFm"});
  res.json(searchUser);
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
