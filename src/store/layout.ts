/*
 * @Date: 2022-09-15
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-24
 * @Description:
 */
import { defineStore } from 'pinia'
import useToggleFullscreen from '@/hooks/vueuse/useToggleFullscreen'
import useToggleDark from '@/hooks/vueuse/useToggleDark'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    menuIsCollapse: false,
    isFullscreen: false,
    isDark: false,
    language: 'cn',
    theme: '薄暮'
  }),
  persist: {
    key: 'pinia-layout',
    paths: ['isDark', 'language']
  },
  getters: {
    menuWidth(): string {
      return this.menuIsCollapse ? '56px' : '270px'
    },
    menuIconArrow(): string {
      return this.menuIsCollapse ? 'none' : 'block'
    }
  },
  actions: {
    toggleMenuCollapse() {
      this.menuIsCollapse = !this.menuIsCollapse
    },
    toggleBrowserFullscreen() {
      this.isFullscreen = !this.isFullscreen
      useToggleFullscreen()
    },
    toggleLightOrDark() {
      this.isDark = !this.isDark
      useToggleDark()
    },
    toggleLanguage(type: string) {
      this.language = type
    },
    toggleTheme(type: string) {
      console.log(type)

      this.theme = type
    }
  }
})
