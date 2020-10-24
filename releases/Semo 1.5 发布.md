# Semo 1.5 发布

好久没发版了，发一个，说一下跟上一版相比的一些变化，欢迎大家测试。

## Features

* 核心依赖包的哈希依赖从 `node-object-hash` 换成了 `object-hash`。
* 远程插件列表的数据源从 npmjs.com 换成了 npms.io。
* 核心 API 函数添加 `Utils.clearConsole`。
* 核心 API 函数添加 `Utils.consoleReader`。
* REPL 模式添加 .shell 命令。
* 优化钩子的定义和调用。
* 优化了 `semo run` 命令，现在更加灵活了。
* 更新各个子包的依赖包到最新版本。
* 最低 `Node` 版本声明到 `>= 10.0`

