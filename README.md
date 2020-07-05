# To start

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli)

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8880  //* Need to be modified to the project's port
npm run dev

# build for production with minification
npm run build

```

## Modules
- config
- dist
- src
  - api
    - index.js  //用来存放和请求相关的方法和全局变量
  - assets      //用于放初始化项目的文件
    - css
    - image
    - js
  - lang         // 多语言文件
  - components      //自定义组件or模块
  - mock           //模拟数据
  - router        //路由文件
    - index.js   
  - store        //store状态管理
    - action.js
    - index.js
    - reducer.js
    - store.js
    - types.js
  - style
  - views         //业务模块
  - app.vue     //首页
  - main.js     // 入口js
- static       //静态文件
  - images

# Theme
You can change theme by 
1. Generate theme packages by [https://elementui.github.io/theme-preview/#/](https://elementui.github.io/theme-preview/#/)
2. Put theme packages in src/assets/theme/
3. Edit src/main.js 
``` bash
   import 'element-ui/lib/theme-default/index.css' //element-ui 1.0
   import 'element-ui/lib/theme-chalk/index.css' //element-ui 2.0
   to
   import './assets/theme/your-theme/index.css'
```
4. Edit src/styles/vars.scss
``` bash
    $color-primary: #70A7EA;
    $color-primary-selected: #3F84D9;
```

# Browser support

Modern browsers and IE 10+.

# Project Package
## Quick Start
```shell
//开发环境
npm run dev
//测试环境
npm run test
//生产环境
npm run prod

# License
[MIT](http://opensource.org/licenses/MIT)
