/*
 * @Author: zusheng
 * @Date: 2022-05-11 15:17:10
 * @LastEditTime: 2022-05-17 09:24:37
 * @Description:
 * @FilePath: \uni-preset-vue-vite-ts\src\store\index.ts
 */
import { defineStore } from 'pinia'
import API from '@/common/api'
import { Playlist, Song } from '@/types'

type Theme = {
  // 状态栏字体颜色
  navigationBarColor: '#ffffff' | '#000000'
  // 主题色
  themeColor: string
  // 页面背景色
  backgroundColor: string
  // 内容卡片背景色
  backgroundColorCard: string
  // 稍微强调色
  backgroundColorClear: string
  // 标题色
  textTitleColor: string
  // 副标题辅助色
  textSubColor: string
  // 边框颜色
  borderColor: string
  // 半透滤镜颜色
  filterColor: string
  // 阴影颜色
  shadowColor: string
}

const dark: Theme = {
  navigationBarColor: '#ffffff',
  themeColor: '#D1403C',
  backgroundColor: '#0E0E0E',
  backgroundColorCard: '#151515',
  backgroundColorClear: '#212121',
  textTitleColor: '#ffffff',
  textSubColor: '#626262',
  borderColor: '#2A2A2A',
  filterColor: 'rgba(19, 19, 20, 0.7)',
  shadowColor: '#131313'
}

const light: Theme = {
  navigationBarColor: '#000000',
  themeColor: '#f9343d',
  backgroundColor: '#F8F8F8',
  backgroundColorCard: '#FFFFFF',
  backgroundColorClear: '#f8f8f8',
  textTitleColor: '#333333',
  textSubColor: '#969696',
  borderColor: '#E7E7E7',
  filterColor: 'rgba(252, 252, 253, 0.7)',
  shadowColor: '#F8F9FA'
}

Object.freeze(dark)
Object.freeze(light)

export const useStore = defineStore('main', {
  state: () => {
    return {
      // 是否防止滚动穿透
      overflow: false,

      /**
       * time 为了触发getPageMetaStyle更新，否则主题不会及时改变
       */
      time: Date.now(),

      /**
       * 主题颜色配置
       */
      themeConfig: {
        theme: 'light' as 'dark' | 'light',
        dark: {
          navigationBarColor: '#ffffff',
          themeColor: '#D1403C',
          backgroundColor: '#0E0E0E',
          backgroundColorCard: '#151515',
          backgroundColorClear: '#212121',
          textTitleColor: '#ffffff',
          textSubColor: '#626262',
          borderColor: '#2A2A2A',
          filterColor: 'rgba(19, 19, 20, 0.7)',
          shadowColor: '#131313'
        },
        light: {
          navigationBarColor: '#000000',
          themeColor: '#f9343d',
          backgroundColor: '#F8F8F8',
          backgroundColorCard: '#FFFFFF',
          backgroundColorClear: '#f8f8f8',
          textTitleColor: '#333333',
          textSubColor: '#969696',
          borderColor: '#E7E7E7',
          filterColor: 'rgba(252, 252, 253, 0.7)',
          shadowColor: '#F8F9FA'
        }
      } as any
    }
  },
  getters: {
  },
  actions: {
  }
})
