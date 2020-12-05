import { getOpenId } from "./index"

export function getSetting (auth, onSuccess, onFail) {
  mpvue.getSetting({
    success (res) {
      if (res.authSetting[`scope.${auth}`]) {
        onSuccess(res)
      } else {
        onFail(res)
      }
    },
    fail (res) {
      console.log(res) // 直接报错
    },
  })
}

export function getUserInfo (onSuccess, onFail) {
  mpvue.getUserInfo({
    success (res) {
      const { userInfo } = res
      if (userInfo) {
        onSuccess(userInfo)
      } else {
        onFail(res)
      }
    },
    fail (res) {
      console.log(res) // 直接报错
    },
  })
}

export function setStorageSync (key, data) {
  mpvue.setStorageSync(key, data)
}

export function getStorageSync (key) {
  return mpvue.getStorageSync(key)
}

export function getUserOpenId (callBack) {
  mpvue.login({
    success (res) {
      const { code } = res
      if (code) {
        getOpenId(code).then(res => {
          const { data: { data: { openid } } } = res
          setStorageSync('openId', openid)
          callBack && callBack(openid)
        }).catch(err => {
          console.log(err) // 直接报错
        })
      } else {
        console.log(res) // 直接报错
      }
    },
    fail (res) {
      console.log(res) // 直接报错
    }
  })
}

export function showLoading (title) {
  mpvue.showLoading({
    title,
    mask: true
  })
}

export function hideLoading () {
  mpvue.hideLoading()
}

export function showToast (title) {
  mpvue.showToast({
    title,
    duration: 2000
  })
}
