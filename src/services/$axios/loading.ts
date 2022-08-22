/*
 * @Date: 2022-08-14
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 maxc@dustess.com
 * @LastEditTime: 2022-08-15
 * @Description:
 */
import { ElLoading } from "element-plus";

let loading: any;

const showLoading = () => {
  loading = ElLoading.service({
    text: "加载中，请稍后...",
    background: "rgba(0, 0, 0, 0.7)",
    spinner: "el-icon-loading"
  });
};

const closeLoading = () => {
  loading.close();
};

export { showLoading, closeLoading };
