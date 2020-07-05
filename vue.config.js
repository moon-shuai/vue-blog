const path = require('path');

const port = process.env.port || process.env.npm_config_port || 8083; // dev port
module.exports = {
    // webpack-dev-server 相关配置
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        // host: "192.168.0.137",
        host: '0.0.0.0', //局域网和本地访问
        port: port,
        https: false,
        hotOnly: false,
        /* 使用代理 */
        proxy: {
            '/api': {
                target: 'http://10.0.176.66:8085',
                /* 允许跨域 */
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    // 打包到dist 文件
    outputDir: 'dist',
    assetsDir: 'static',
    // 是否开启eslint保存检测
    lintOnSave: true,
    pages: {
        index: {
            // 页面入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时
            title: 'hello-world',
            inject: 'body' // script标签插入body底部
        },
        subpage: 'src/main.js'
    },
    configureWebpack: {
        name: '个人博客系统',
    },
    /* 别名配置 */
    chainWebpack: config => {
        config.resolve.symlinks(true); //热更新
        config.resolve.alias
            .set('@store', path.resolve(__dirname, './src/store'))
            .set('@action', path.resolve(__dirname, './src/store/action.js'))
            .set('@util', path.resolve(__dirname, './src/assets/js/common.js'))
            .set('@tool', path.resolve(__dirname, './src/assets/js/tool.js'))
            .set('@ajax', path.resolve(__dirname, './src/api/index.js'))
            .set('@img', path.resolve(__dirname, './static/images'))
            .set('@comm', path.resolve(__dirname, './src/components'))
            .set('@', path.resolve(__dirname, './src/views'));

    }
};
