import Vue from 'vue'

export function messageForRespone(response, successNeedMsg, errorNeedMsg) {
  if (response) {
    if (response.success) {
      if (successNeedMsg) {
        Vue.prototype.$message({
          showClose: true,
          message: response.msg,
          type: 'success'
        })
      }
    } else {
      if (errorNeedMsg) {
        Vue.prototype.$message({
          showClose: true,
          message: response.msg,
          type: 'error'
        })
      }
    }
  }
}

export function notifyForRespone(response, successNeedMsg, errorNeedMsg) {
  if (response) {
    if (response.success) {
      if (successNeedMsg) {
        Vue.prototype.$notify({
          title: '成功',
          message: response.msg,
          type: 'success',
          duration: 2000
        })
      }
    } else {
      if (errorNeedMsg) {
        Vue.prototype.$notify({
          title: '失败',
          message: response.msg,
          type: 'error',
          duration: 2000
        })
      }
    }
  }
}
