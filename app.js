const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

// ミドルウェア設定
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(cookieParser());

// 静的ファイルのルート
app.use('/static', express.static('public'));

// 使用するテンプレートエンジン
app.set('view engine', 'ejs');

// それぞれのルーティング
const mainRoutes = require('./routes');
const authRoutes = require('./routes/auth');

app.use(mainRoutes);
app.use(authRoutes);

// 存在しないURLの場合
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error/error');
});

app.listen(port, () => {
  console.log('Running on localhost:3000');
});


