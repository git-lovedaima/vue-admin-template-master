/*
 * @Author: liudeqi agqwertyuiop@outlook.com
 * @Date: 2022-08-25 09:06:01
 * @LastEditors: liudeqi agqwertyuiop@outlook.com
 * @LastEditTime: 2022-08-27 19:55:30
 * @FilePath: \vue-admin-template-master\src\api\user.js
 * @Description:
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    method: 'POST',
    url: '/sys/login',
    data
  })
}

export function getInfo(token) {}

export function logout() {}
