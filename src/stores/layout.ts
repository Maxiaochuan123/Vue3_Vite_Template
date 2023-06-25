import useToggleFullscreen from '@hooks/layout/useToggleFullscreen'
import { useToggleDark, useToggleThemeColor } from '@hooks/layout/useTheme'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    menuIsCollapse: false,
    menuActiveIndex: 'home',
    isFullscreen: false,
    isDark: false,
    themeColor: 'default',
    language: 'cn'
  }),
  persist: [
    {
      key: 'pinia-layout',
      paths: ['menuActiveIndex'],
      storage: sessionStorage
    },
    {
      key: 'pinia-layout',
      paths: ['isDark', 'themeColor', 'language'],
      storage: localStorage
    }
  ],
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
    togglemenuActiveIndex(activeIndex: string) {
      this.menuActiveIndex = activeIndex
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
    toggleThemeColor(type: string) {
      this.themeColor = type
      useToggleThemeColor(type)
    }
  }
})
