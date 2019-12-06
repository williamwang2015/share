import instance from './base'

export function getUserInfo () {
  instance.defaults.auth = { username: window.localStorage.getItem('token') }
  return instance.get(`/user`)
}

export function checkUser (type, name) {
  return instance.post(`/user/check/c=${type}`, {
    'name': name
  })
}

export function saveUserInfo (info) {
  return instance.post('/user/save', {
    'nickname': info.nickname,
    'building': info.building,
    'unit': info.unit,
    'room': info.room,
    'email': info.email,
    'mobile': info.mobile
  })
}