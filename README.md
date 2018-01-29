官网书写规范及要求
===========================
** 胡莱官网-预约页-抄手-移动端官网 VUE JQUERY核心架构 **

## 目录结构
```
当前文件夹为抄首文件
.
├─ css/             # css样式存放目录(包括全局样式和自定义样式)
├─ home/            # 官网目录
|    ├─ components/     # 组件存放目录
|      |- header.html
|      |- header.js
|      |- footer.html
|      |- footer.js
|      |- index.js  # 所有组件的集合
|    |- css
|    |- img
|    |- js
|    |- lib         # 静态文件存放
|    |- index.html  # 官网首页
|    |- list.html   # 官网的列表页
|    |- detail.html # 官网的详情页           
│—— img/             # 图片存放目录
├── js/          # 放置全局common.js和index.js文件的目录
├── yuyue/         # 预约活动的文件存放目录
├── m/              # 移动官网文件存放目录
|    |- components  # 移动端组件存放目录             
|    |- css         # 移动端样式存放目录(包括全局样式和自定义样式)
|    |- home        # 移动端官网文件
|    |- img         # 移动端图片文件
|    |- yuyue       # 移动端预约
|    |- js          # 移动端js文件目录（放置全局common.js和index.js文件目录）
|    |- index.html  # 移动端的index.html
|
|
|——index.html     # 超首页的index.html文件

```
## 开发说明
- 开发官网必须要按照以上文件目录形式的开发规范.

- 开发时候一定要引用common.js和全局的global.css.

- common.js是一些全局共用的函数(百度统计，版本号，标准的url参数模式) global.css是全局的样式，两个文件引用后不要自行更改里面内容.

- components 文件中包含各个组件(头，尾),按照VUE模块化，组件化的形式完成各类组件开发  index.js是所有组件的集合

- yuyue，home，m等文件目录结构跟以上目录结构相同，请自行按照目录形式开发.

- 官网统一命名首页index.html 列表页list.html  详情页detail.html 多单词使用驼峰命名规则(pcList.html).

- 官网每个页单独开发，有单独的html，css，js，不用混用在一起.

- 版本号统一规范 pc端（?pcv=日期的形式），移动端(?mv=日期形式)，可以统一替换.

- 如果header.html和footer.html文件中有动画效果,占时使用jquery在对应的js文件中书写.

- 所有的静态文件都放在lib文件中.

- 及时提交代码，防止意外发生.