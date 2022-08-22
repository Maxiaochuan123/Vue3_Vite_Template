/*
 * @Date: 2022-06-09
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-08-22
 */
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';

// 自动引入 vue3 内置属性
import AutoImport from 'unplugin-auto-import/vite';

// 按需加载自定义组件
import Components from 'unplugin-vue-components/vite';

// 动态按需引入 Element-Plus
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import ElementPlus from 'unplugin-element-plus/vite';

// 打包可视化分析工具 rollup-plugin-visualizer
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => {
  // 环境变量 const env = loadEnv(mode, process.cwd()).VITE_APP_TITLE;

  return {
    plugins: [
      vue(),
      AutoImport({
        // 自动引入 vue3 内置属性
        imports: ['vue'],
        dts: 'src/auto-import.d.ts',

        // 动态按需引入 element-plus (1)
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        // 动态按需引入 element-plus (2)
        resolvers: [ElementPlusResolver()]
      }),
      ElementPlus(), // 动态按需引入 element-plus 样式文件 (3)
      visualizer()
    ],
    resolve: {
      alias: {
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
          additionalData: `@import "@assets/styles/global/variables.scss";`
        }
      }
    },
    server: {
      //   port: 8080, //启动端口
      //   hmr: {
      //     host: "127.0.0.1",
      //     port: 8080,
      //   },
      proxy: {
        '/m1': {
          target: 'http://127.0.0.1:4523/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/m1/, '')
        }
      },
      open: true, // 服务启动时是否自动打开浏览器
      cors: true // 允许跨域
    },
    esbuild: {
      pure: ['console.log', 'debugger'] //打包去除
    }
  };
});
