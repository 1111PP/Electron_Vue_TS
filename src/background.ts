import { app, BrowserWindow } from 'electron'
//启动electron面板
app.whenReady().then(() => {
  const window = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      //可以在渲染进程中使用node的API，为了安全不让你使用
      nodeIntegration: true, //启用Node.js集成
      contextIsolation: false, //关闭渲染进程的沙箱（也是为了安全考虑）
      webSecurity: false, //禁用web安全策略,关闭同源策略
    },
  })
  //进程传参法
  // ✨process.argv[2]
  //读取vite.electron.dev.js文件中数组下标为2的第三个参数：IP
  //如果能读到process.argv[2]说明是开发环境
  if (process.argv[2]) {
    // loadURL加载指定网址，就是将vue项目运行的网址（✨如：http://localhost:5174）传入，开启一个electron的窗口从而映射这个项目
    window.loadURL(process.argv[2])
    // window.loadURL('http://localhost:5174')
  } else {
    //如果是生产环境，直接loadFile读取打包后dist文件夹下的index.html文件
    window.loadFile('index.html')
  }
})
