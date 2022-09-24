/*
 * @Date: 2022-06-09
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-24
 */
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

// 自动引入 vue3 内置属性
import AutoImport from 'unplugin-auto-import/vite'

// 按需加载自定义组件
import Components from 'unplugin-vue-components/vite'

// 动态按需引入 Element-Plus
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

// I18n 优化
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// 打包可视化分析工具
import { visualizer } from 'rollup-plugin-visualizer'

// 生产环境资源 CDN 引入
// import importToCDN from 'vite-plugin-cdn-import';

// import commonjs from 'rollup-plugin-commonjs';
// import externalGlobals from 'rollup-plugin-external-globals';

// gzip 静态资源压缩
import viteCompression from 'vite-plugin-compression'

export default defineConfig(({ mode }) => {
  // 环境变量 const env = loadEnv(mode, process.cwd()).VITE_APP_TITLE;

  return {
    plugins: [
      vue(),
      AutoImport({
        // 自动导入属性方法
        imports: ['vue', 'vue-router', 'pinia'],
        dts: 'src/auto-import.d.ts',

        // 动态按需引入 element-plus (1)
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        dirs: ['src/components/global'], // 自动导入组件路径 删除此项默认是 dirs: ['src/components'], 这会导入该路径下所有组件为全局组件，将会导致项目启动编译缓慢 白屏等待时间增加
        // 动态按需引入 element-plus (2)
        resolvers: [ElementPlusResolver()]
      }),
      ElementPlus(), // 动态按需引入 element-plus 样式文件 (3)
      // i18n 优化
      VueI18nPlugin({
        include: resolve(__dirname, './src/i18n/locales/**')
      }),
      visualizer(), // 打包可视化分析工具
      // importToCDN({
      //   modules: [
      //     {
      //       name: 'vue',
      //       var: 'Vue',
      //       path: 'https://cdn.bootcdn.net/ajax/libs/vue/3.2.37/vue.global.prod.min.js'
      //     },
      //     {
      //       name: 'vue-router',
      //       var: 'VueRouter',
      //       path: 'https://cdn.bootcdn.net/ajax/libs/vue-router/4.1.3/vue-router.global.prod.min.js'
      //     },
      //     {
      //       name: 'element-plus',
      //       var: 'ElementPlus',
      //       path: 'https://cdn.bootcdn.net/ajax/libs/element-plus/2.2.13/index.full.min.js',
      //       css: 'https://cdn.bootcdn.net/ajax/libs/element-plus/2.2.13/index.min.css'
      //     },
      //     {
      //       name: 'qs',
      //       var: 'Qs',
      //       path: 'https://cdn.bootcdn.net/ajax/libs/qs/6.11.0/qs.min.js'
      //     }
      //   ]
      // })
      viteCompression({
        threshold: 10240, // 资源超过 100kb 进行压缩
        deleteOriginFile: true // 压缩后删除源文件
      })
    ],
    resolve: {
      alias: {
        '~': resolve(__dirname, './'),
        '@': resolve(__dirname, 'src'),
        '@assets': resolve(__dirname, 'src/assets'),
        '@plugins': resolve(__dirname, 'src/plugins'),
        '@apis': resolve(__dirname, 'src/services/apis'),
        '@utils': resolve(__dirname, 'src/utils'),
        '@store': resolve(__dirname, 'src/store'),
        '@components': resolve(__dirname, 'src/components')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 公共 scss
          additionalData: `@use "@assets/styles/global/index.scss" as *;`
        }
      }
    },
    server: {
      // host: '0.0.0.0',
      // port: 3000, //启动端口
      open: true, // 服务启动时是否自动打开浏览器
      cors: true, // 允许跨域
      proxy: {
        '/m1': {
          target: 'http://127.0.0.1:4523/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/m1/, '')
        }
      }
    },
    esbuild: {
      pure: ['console.log', 'debugger'] //打包去除
    },
    build: {
      rollupOptions: {
        // external: ['vue', 'vue-router', 'element-plus', 'qs'], // 指定这些库不被打包
        // plugins: [
        //   commonjs(),
        //   externalGlobals({
        //     vue: 'Vue',
        //     'vue-router': 'VueRouter',
        //     'element-plus': 'ElementPlus',
        //     qs: 'Qs'
        //   })
        // ]

        // 静态资源合并打包
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',

          // 超大静态资源拆分
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
            }
          }
        }
      },
      assetsInlineLimit: 102400, // 资源小于 100kb 转为 base64 减少 http 请求
      chunkSizeWarningLimit: 1024 // 资源超出 1mb 报警
    }
  }
})
