const express = require('express');
const router = express.Router();

router.get('/sign-in', (req, res) => {
  res.locals.screen = 'signIn';
  res.render('index', { isValidUser: false });
});

router.post('/sign-in', (req, res) => {
  // res.cookie('username', req.body.name);
  res.render('main/home', { userName: req.body.name, isValidUser: true });
});

router.get('/sign-up', (req, res) => {
  res.locals.screen = 'signUp';
  res.render('index', { isValidUser: false });
});

router.post('/sign-up', (req, res) => {
  console.log('New user information posted.');
  console.dir(req.body);
  res.redirect('/sign-up');
});

module.exports = router;