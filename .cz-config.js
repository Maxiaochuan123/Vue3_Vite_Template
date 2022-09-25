/*
 * @Date: 2022-07-18
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-25
 * @Description: 
 */
'use strict'
module.exports = {
  types: [
    { value: 'update', name: ' 🌴 普通更新' },
    { value: 'feat', name: ' ✨ 新增功能' },
    { value: 'fix', name: ' 🔨 修复bug' },
    { value: 'ui', name: ' 👗 ui修改' },
    { value: 'perf', name: ' 🚀 优化' },
    { value: 'style', name: ' 🎨 代码风格美化' },
    { value: 'docs', name: ' 📚 文档' },
    { value: 'hotfix', name: ' 🔥 紧急修复 bug' },
    { value: 'revert', name: ' 🔙 代码回退' },
    { value: 'ci', name: ' 👷‍♂️ 工程自动化构建' },
    { value: 'test', name: ' 👨‍🔧 测试' },
    { value: 'refactor', name: ' 🔄 代码重构' },
    { value: 'chore', name: ' 🔧 变更构建流程或辅助工具' },
    { value: 'build', name: ' 🔧 变更项目构建或外部依赖 (例如scopes: webpack、vite 等)' }
  ],
  // 交互提示信息
  messages: {
    type: '请选择提交类型：(必填)',
    customScope: '请描述文件修改范围 (可选)',
    subject: '请对本次提交进行简短描述 (必填)',
    body: '对本次提交进行更详细的说明 (可选)',
    breaking: '请列出任何BREAKING CHANGES(破坏性修改) (可选)',
    footer: '请输入要关闭的issue，例如：#31 (可选)',
    confirmCommit: '确定提交此说明吗?（yes/no）'
  },
  allowCustomScopes: true,
  // 设置选择了那些type，才询问 breaking message
  allowBreakingChanges: ['feat', 'fix', 'perf', 'hotfix', 'revert', 'refactor'],
  subjectLimit: 100
}
