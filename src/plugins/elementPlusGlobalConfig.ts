// 设置 Element-UI 全局组件配置
import { ElConfigProvider } from 'element-plus';

// 设置 Element-UI 组件语言
import zhCn from 'element-plus/lib/locale/lang/zh-cn'; // (中文)
const locale: any = zhCn;

// 组件默认大小
type Size = 'default' | 'small' | 'large';
const size: Size = 'default';

export { ElConfigProvider, locale, size };
