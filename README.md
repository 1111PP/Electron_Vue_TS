# electron模板

# 手动定义electron插件，完成electron的自动运行以及打包
 无须额外启动端口运行electron进程，运行项目以及build时，会自动执行electron的运行以及打包
## 快速生成
1.开发环境下electron配置
2.打包构建electron应用，生成安装包

# 运行步骤
1.npm install

2.npm run dev 

3.npm run build

# 常见错误
若报错：找不到模块electron/electron-builder或其他响应的类型声明

可尝试再次安装依赖包：npm install electron electron-builder -D

安装报错
npm ERR! code 1
npm ERR! path xxx/electron
npm ERR! command failed
这是由于electron的安装引发的错误，可参考
https://blog.csdn.net/shidas/article/details/125941408
 yarn/npm   install --ignore-scripts
