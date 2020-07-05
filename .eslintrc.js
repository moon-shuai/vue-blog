module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        "comma-dangle": ["error", "never"], // 要求或禁止末尾逗号：不允许逗号
        'space-before-function-paren': 1, // 函数后面留有空格
        'no-trailing-spaces': 1,    // 结尾不能留空格
        "indent": ["error", 4],
        'quotes': [1, 'single'],
        "semi": ["error", 'always'], // JavaScript代码强制使用一致的缩进：2格缩进
        "arrow-parens": ["error", "as-needed"], // 箭头函数的参数可以不使用圆括号
        "linebreak-style": "off", // 取消换行符\n或\r\n的验证
        "object-curly-newline": ["error", { "consistent": true }], // 花括号内的换行符不一定要格式一致
        "function-paren-newline": "off", // 不验证函数括号内的换行
        "import/extensions": "off", // 取消对文件扩展名的验证
        "import/no-unresolved": "off", // 取消自动解析路径，以此开启alias的别名路径设置
        "no-param-reassign": "off", // 允许对函数参数进行再赋值
        "no-underscore-dangle": "off", // 允许在标识符中使用下划线
        "no-use-before-define": "off", // 允许变量和函数在定义前使用
        "no-unused-expressions": "off", // 允许使用未使用过的表达式，以此来支持a && a()的代码形式
        "import/no-extraneous-dependencies": "off", //使用history/createBrowserHistory引入包时，不会报错
        "no-console": "off", // 启用console控制台
        "import/prefer-default-export": 0, //关闭默认导出
        "class-methods-use-this": 0, //关闭class轻质使用this
        "max-len":0,
        "new-cap":1
    }
}