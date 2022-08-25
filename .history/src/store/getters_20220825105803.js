/*
 * @Author: liudeqi agqwertyuiop@outlook.com
 * @Date: 2022-08-25 09:06:01
 * @LastEditors: liudeqi agqwertyuiop@outlook.com
 * @LastEditTime: 2022-08-25 10:57:59
 * @FilePath: \vue-admin-template-master\src\store\getters.js
 * @Description: 
 */
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  sidebar: state => state.app.sidebar,
  device: state => state.app.device
}
export default getters
