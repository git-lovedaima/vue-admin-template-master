/*
 * @Author: liudeqi agqwertyuiop@outlook.com
 * @Date: 2022-08-25 09:06:01
 * @LastEditors: liudeqi agqwertyuiop@outlook.com
 * @LastEditTime: 2022-08-27 19:37:17
 * @FilePath: \vue-admin-template-master\src\utils\validate.js
 * @Description:
 */
/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * 手机号验证
 */
export function validMobile(str) {
  return /^1[3-9]\d{9}$/.test(str) // 校验手机号
}

/**
 * 密码验证
 */
export function validPassword(str) {
  return /^\d{6,16}$/.test(str) // 校验手机号
}
