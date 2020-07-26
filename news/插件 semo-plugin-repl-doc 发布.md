# 插件 semo-plugin-repl-doc 发布

插件的创意源源不断呐，今天给大家带来的是一个 Semo 核心 repl 命令的扩展插件。提供了命令行版的查看 `Javascript` 文档的功能。

## 安装和适用

```
npm i -g @semo/cli semo-plugin-repl-doc
semo r
>>> .doc help
>>> .doc string.trim
>>> .doc string.trim --lang=en_US
>>> .doc string.trim --lang=zh_CN
>>> .doc string.trim --type=global_object
>>> .doc 运算符
```

## 支持的类型

* category: 查分类概述，支持 `global_objects`, `operators`, `statements`, `data_structures`, `strict_mode`, `lexical_grammar`
* statement: 查语句，例如：`break`, `continue`, `const`, `var` 等等。
* function: 查函数，只支持几个，`arguments`, `rest_parameters`, `default_parameters`, `arrow_functions`
* operator: 查操作符，例如：`new`, `typeof`, `in` 等等。
* global_object: 查对象和对象方法，太多就不一一列举了。
* search: 关键字搜索，只会给出第一页搜索结果和链接。

## 注意事项

* 数据来自于著名的 MDN，分析的页面结构。
* `--lang` 参数可以指定文档的语言，如果文档没有对应的翻译，会自动采用英文版本，语言配置也可以在 `.semorc.yml` 里配置 `$plugin.repl-doc.lang`，如果没有设置，默认会采用系统语言。还有几个简称，例如：`en`, `cn`。
* `--type` 如果不指定，会根据关键字匹配猜测结果，如果指定了，只会在这个类型里查询。虽然不常用，但是 `--type=search` 可以查询任意关键字