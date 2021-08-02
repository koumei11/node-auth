const express = require('express');
const router = express.Router();

router.get('/sign-in', (req, res) => {
  const name = req.cookies.username;

  // 名前がクッキーになければログインからやり直し
  if (name) {
    res.redirect('/home');
  } else {
    res.locals.screen = 'signIn';
    res.render('index', { isValidUser: false, });
  }
});

router.post('/sign-in', (req, res) => {
  if (req.body.password) {
    res.cookie('username', req.body.name);
    res.redirect('/home');
  } else {
    res.locals.screen = 'signIn';
    res.render('index', { isValidUser: false, passwordError: "パスワードを入力してください" });
  }
});

router.get('/sign-up', (req, res) => {
  res.locals.screen = 'signUp';
  res.render('index', { isValidUser: false, errors: {}, values: {} });
});

router.post('/sign-up', (req, res) => {
  const errors = {};
  validateForm(req, errors);

  // エラーがあるかチェック
  if (Object.keys(errors).length === 0) {
    res.cookie('username', req.body.name);
    res.redirect('/home');
  } else {
    const values = req.body;
    res.render('index', { isValidUser: false, screen: 'signUp', errors, values });
  }
});

router.get('/home', (req, res) => {
  const name = req.cookies.username;

  // 名前がクッキーになければログインからやり直し
  if (name) {
    res.render('main/home', { userName: name, isValidUser: true });
  } else {
    res.redirect('/sign-in');
  }
});

router.post('/logout', (req, res) => {
  res.clearCookie('username');
  res.redirect('/sign-in');
});

// フォームのバリデーション
function validateForm(req, errors) {
  if (!req.body.name) {
    errors.nameError = { message: "ユーザー名を入力してください" };
  }

  if (!req.body.mail) {
    errors.mailError = { message: "メールアドレスを入力してください" };
  }

  if (!req.body.password) {
    errors.passwordError = { message: "パスワードを入力してください" };
  } else if (req.body.password.length < 7) {
    errors.passwordError = { message: "パスワードは7文字以上で入力してください" };
  } else if (req.body.password != req.body.confirm) {
    errors.confirmError = { message: "パスワードが一致しません" }
  }
}

module.exports = router;