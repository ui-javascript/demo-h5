# README

- 项目

```
1、安装
npm i


进入云开发目录
server/cloud-functions/decrypt
server/cloud-functions/he-weather
server/cloud-functions/he-air
...

进行安装 npm i


不然可能会报如下错误:
EISDIR: illegal operation on a directory, read


2. 修改配置

以下目录修改和风天气的密钥
server/cloud-functions/he-weather
server/cloud-functions/he-air


client/lib/api.js 中修改如下信息
wx.cloud.init({
  env: '填写自己的开发者账号中的环境id'
})
其中 环境id是点击devtools云开发按钮以后生成的


登录腾讯地图开发者控制台获取信息 https://lbs.qq.com/console/user_info.html
修改腾讯地图的开发者账号：
client/lib/api.js 中的 QQ_MAP_KEY，

登录和风天气控制台获取信息 https://console.heweather.com/
修改和风天气 API 的开发者账号 
server/inline/utils 中的 KEY 和 USER_ID，

小程序授权信息 
server/inline/utils 中的 WECHAT_APPID 和 WECHAT_APP_SECRET，

3. 添加插件
小程序后台 添加极点日历 calendar

4. 运行 

可能需要管理员身份
npm run server
npm run dev
npm run watch
# npm run cloud
```

