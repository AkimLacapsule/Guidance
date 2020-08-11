var express = require('express');
var router = express.Router();
var SHA256 = require("crypto-js/sha256");
var encBase64 = require("crypto-js/enc-base64");
var mongoose = require('mongoose');
var uid2 = require('uid2');

var userModel = require("../models/users"); 

var cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name:"dvx36h3ub",
  api_key:"125794775985349",
  api_secret:"ozn8F-OjOcFuMD415z_FY95li2Y"
});





/* GET home page. */
router.get('/points-counter', async function(req, res, next) {
  var searchUser = await userModel.findOne({token:"iIaLscNCDgxmM9BAwk1JmR5dh1UPyqdF"});
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


router.post('/sign-up', async function(req,res,next){
console.log(req.body, "Blaboui")
  var error = []
  var result = false
  var saveUser = null
  var token = null

  const data = await userModel.findOne({
    mail: req.body.usermailFromFront
  })

  if(data != null){
    error.push('utilisateur déjà  présent')
  }

  if(req.body.userpseudoFromFront == ''
  || req.body.usermailFromFront == ''
  || req.body.userpwdFromFront == ''
  ){
    error.push('Champs vides')
  }


  if(error.length == 0){

    var salt = uid2(32)
    var newUser = new userModel({
      userpseudo: req.body.userpseudoFromFront,
      usermail: req.body.usermailFromFront,
      userpwd: SHA256(req.body.userpwdFromFront+salt).toString(encBase64),
      token: uid2(32),
      salt: salt,
      points: 0
    })
  
    saveUser = await newUser.save()
    console.log(saveUser, "Blabla")
  
    
    if(saveUser){
      result = true
      token = saveUser.token
    }
  }
  

  res.json({result, saveUser, error, token})
})

router.post('/sign-in', async function(req,res,next){
 

  var result = false
  var user = null
  var error = []
  var token = null
  
  if(req.body.usermailFromFront == ''
  || req.body.userpwdFromFront == ''
  ){
    error.push('champs vides')
  }

  if(error.length == 0){
    const user = await userModel.findOne({
      usermail: req.body.usermailFromFront,
      
    })
    console.log(user, 'PAPPAAPA')
    console.log(req.body.usermailFromFront, "Bouyaka")
    console.log(req.body.userpwdFromFront, 'Boubou')
    
    if(user){
      const passwordEncrypt = SHA256(req.body.userpwdFromFront + user.salt).toString(encBase64)
      console.log(passwordEncrypt,"Bouboubaba")
      console.log(user.userpwd, 'Biact')
      console.log(req.body.userpwdFromFront, "FrontBitch")
      if(passwordEncrypt == user.userpwd){
        result = true
        token = user.token
      } else {
        result = false
        error.push('mot de passe incorrect')
      }
      
      
    } else {
      error.push('email incorrect')
    }
  }
  

  res.json({result, user, error, token})


})

module.exports = router;
