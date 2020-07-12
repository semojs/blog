# Semo 1.1 发布

## Features

* 在 `semo repl` 中添加 `Semo.run`，可以方便的获取 Promise 的结果对象里的部分数据。
* 重构的 Hook 实现方式，推荐基于 `new Semo.Hook()` 的方式实现钩子，如果不想依赖 `@semo/core`，可以把钩子文件实现成一个函数，这样可以接收到 `Semo` 的 `Utils` 对象。

## Fix

* 修复 `semo run` 命令输出两个空行的 BUG，给命令行添加了一个 noblank 的属性
* 优化 `semo run` 命令，采用 Shell 调用的方式调度，`--` 后的参数可以原样传递到远程命令
* 优化 动态加载 `Utils.inquirer`