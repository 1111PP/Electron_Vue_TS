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
1.若报错：找不到模块electron/electron-builder或其他响应的类型声明

可尝试再次安装依赖包：npm install electron electron-builder -D

2.安装依赖报错
npm ERR! code 1
npm ERR! path xxx/electron
npm ERR! command failed
这是由于electron的安装引发的错误，可参考
https://blog.csdn.net/shidas/article/details/125941408
 yarn/npm   install --ignore-scripts

3.electron打包时，安装包问题
如果用户本地不存在electron打包的安装包，就会去github上下载，但是通常会失败，因此可以手动下载与项目electron版本一致的安装包放到本地，例如此项目用到29.2.0版本的electron，于是就可以手动下载https://registry.npmmirror.com/-/binary/electron/29.2.0/electron-v29.2.0-win32-x64.zip，然后放到本地的C:\Users\YourUsername\AppData\Local\electron\Cache\electron-v29.2.0-win32-x64.zip（🔴无需解压）
