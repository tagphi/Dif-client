/**
 *  【认证模块管理器】
 **/
// 管理员
var admin = require('../../../config').site

var respUtils = require('../../utils/resp-utils')

var tokenManager = require('../../interceptors/token-manager')

var {check} = require('express-validator/check')

exports.url = '/auth'

exports.validateLogin = [
  check('username').not().isEmpty().withMessage('用户名不能为空'),
  check('password').not().isEmpty().withMessage('密码不能为空')
]

/**
 *  登录接口
 **/
exports.login = async function login (req, res, next) {
  var username = req.body.username
  var password = req.body.password

  if (username === admin.username && password === admin.password) {
    var token = tokenManager.updateToken(username, password)

    res.status(200).json({
      success: true,
      token: token,
      username: username
    })
  } else {
    respUtils.errResonse(res, '无效的用户名或密码')
  }
}

/**
 *  退出接口
 **/
exports.logout = async function logout (req, res, next) {
  tokenManager.deleteToken(req.username)
  res.status(200).json({
    success: true,
    message: '退出成功'
  })
}
