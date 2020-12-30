# Semo 1.6 发布

## Features

* 优化内部缓存
* 优化配置文件结构，支持子命令配置
* 新增在配置文件中为 `create` 命令设置自定义项目模板
* 新增 `-v` 和 version 子命令
* 新增了 `dotenv` 支持，可以识别当前目录的 `.env` 文件，移除了 `$semo.env` 的配置
* 优化 `utils.invokeHook` 去除了不必要的逻辑
* 为 `repl` 命令新增了 `--require` 机制，可以注入一些 lib 到 repl，也在 `repl` 内部添加了 `.require/.import` 命令，以及全局配置来做到同样的事情。
* 添加了直接用 `semo` 解析一个命令文件的能力，基本可以代替 `script` 插件
* 更新文档，添加了对于直接执行 ts 命令的例子
* 修改了 `create` 命令项目模板的定义格式
* 给 `help` 命令添加了 `Examples:` 内容

## Fix

* 修复 `status` 命令的 location 位置错误
* 修复 `shell` 命令自动退出的问题