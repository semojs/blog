# 插件 semo-plugin-dingtalk 发布

这几天又写了一个插件，这个插件封装了 钉钉的消息机器人，其实这种封装很简单，重点是成品可以用命令行的方式调度。

## 安装

```
$ npm i -g @semo/cli semo-plugin-dingtalk
$ semo dingtalk help

semo dingtalk

Send message to Dingtalk

命令：
  semo dingtalk action-card [text]                Send ActionCard type bot message                     [aliases: action]
  semo dingtalk feed-card                         Send FeedCard type bot message                         [aliases: feed]
  semo dingtalk link <title> <text> <messageUrl>  Send link type bot message
  semo dingtalk markdown [text]                   Send markdown type bot message                           [aliases: md]
  semo dingtalk text <content>                    Send text type bot message

选项：
  --token     Set Dingtalk token
  --secret    Set Dingtalk secret
  --dry-run   Dry run, not sent to DingTalk
```

## 使用

支持钉钉的五种消息类型，每一种的参数略有不同，需要去查看各自命令的帮助，当然第一步是要声明 token，假设我们全局声明，尤其对于运维来说，是以机器为单位来通知的。

```
semo config set -g $plugin.dingtalk.token XXXX
```

在钉钉里创建机器人时一般还要求填写验证方式，如果选择的是关键字或者 IP 验证就无需设置别的，如果选择的是签名验证，则还需要配置密钥

```
semo config set -g $plugin.dingtalk.secret SECYYYY
```

然后发送就是看各个命令的参数了，以最简单的 text 类型为例

```
semo ding text hello
```

这时钉钉群里就会有收到通知了。

## 二次开发

如果不想使用命令行的方式，也可以考虑用 node 包的方式引用，会导出一个类

```
import { DingBot } from 'semo-plugin-dingtalk'
```

or

```
import { Utils } from '@semo/core'
const { dingbot } = await Utils.invokeHook('semo:component')
```