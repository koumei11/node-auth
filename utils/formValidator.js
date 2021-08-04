// フォームのバリデーション
const validateForm = (req, errors) => {
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

module.exports = validateForm;