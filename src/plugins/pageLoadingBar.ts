/*
 * @Date: 2022-07-12
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 maxc@dustess.com
 * @LastEditTime: 2022-08-16
 * @Description:
 */
// 页面顶部进度条
import PageLaodingBar from 'nprogress'
import 'nprogress/nprogress.css'

PageLaodingBar.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载 icon
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

export default PageLaodingBar
