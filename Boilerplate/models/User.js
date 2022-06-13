const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    // trim: 공백을 없앰
    trim: true,
    // unique: email 값이 겹치지 않는 고유한 값이도록
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  // role(권한/역할): 관리자 계정, 일반 사용자 계정 등
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = { User };
