module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-standard-vue',
    'stylelint-config-prettier'
  ],
  plugins: ['stylelint-order'],
  // 不同格式的文件指定自定义语法
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    }
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json', '**/*.md', '**/*.yaml'],
  rules: {
    'string-quotes': 'single', // 单引号
    'at-rule-name-case': 'lower', // 指定@规则名的大小写
    'length-zero-no-unit': true, // 禁止零长度的单位（可自动修复）
    'shorthand-property-no-redundant-values': true, // 简写属性
    'number-leading-zero': 'never', // 小数不带0
    'declaration-block-no-duplicate-properties': true, // 禁止声明快重复属性
    'no-descending-specificity': true, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器。
    'max-nesting-depth': 3,
    indentation: [
      2,
      {
        // 指定缩进  warning 提醒
        severity: 'warning'
      }
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep']
      }
    ],
    // 禁用每个选择器之前插入空行
    'rule-empty-line-before': null,
    // 禁止小于 1 的小数有一个前导零
    // 'number-leading-zero': 'never',
    // 一些特殊的scss指令
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'else', 'else-if', 'each', 'include', 'mixin']
      }
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else', 'else-if']
      }
    ],
    // 指定样式的排序
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'justify-content',
      'align-items',
      'flex-shrink',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'font-size',
      'font-family',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition',
      'content'
    ]
  }
}
