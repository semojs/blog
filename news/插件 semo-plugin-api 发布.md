# 插件 semo-plugin-api 发布

插件 `semo-plugin-api` 的功能是发起 http 请求访问 restful api，类似于 curl。

## 安装

```
npm i -g @semo/cli semo-plugin-api
```

## 用法

```
semo api https://jsonplaceholder.typicode.com/posts/1
semo api -X POST https://jsonplaceholder.typicode.com/posts --data.title=foo --data.body=bar --userId=1
semo api -X put https://jsonplaceholder.typicode.com/posts/1 --data.title=foo --data.body=bar --userId=1 --id=1  
semo api -X put https://jsonplaceholder.typicode.com/posts/1 --data.title=foo --data.body=bar --userId=1 --id=1  
semo api -X delete https://jsonplaceholder.typicode.com/posts/1 
...
```

# 其他

使用文件数据

```
semo api --file api.js
semo api --file api.json
```

使用代理

```
semo api http://myip.ipip.net --ss
semo api http://myip.ipip.net --socks-proxy=socks://127.0.0.1:1080
```