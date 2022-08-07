import { defineStore } from 'pinia'
import { get } from '@/common/apiService'
import API from '@/common/api'

export const useStore = defineStore('login', {
  state: () => {
    return {
      // 手机
      phone: 0,
      // 密码
      password: '',
      // 验证码
      code: 0,
      // 登录方式 code为验证码
      type: ''
    }
  },
  getters: {},
  actions: {
  }
})
