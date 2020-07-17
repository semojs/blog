# Semo 1.3 发布

1.2 出了点小问题，被1.3覆盖啦，后面需要引入一些单元测试了...

## Features

* 新增让第三方插件可以扩展 REPL 命令的钩子 `hook_repl_command`
* 新增插件的主动注册机制，一旦使用，则自动扫描机制失效

```
$plugins:
  hello-world: true
```

注意：此机制在下个版本中会微调成 `$plugins.register`

## Bugs

* 修复 repl 命令执行时报错的问题

## Other

发现 `Typescript` 不会自动同步非 `ts` 相关文件，这导致 yml 配置文件过不去，也就是项目内部定义的插件会识别不了，需要借助 `copyfiles` 命令来解决，已更新文档。