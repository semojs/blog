# 简单说说 Semo 开发过程中的 Debug

有时候开发的过程中需要做一些调试，除了暴力调试之外，比较推荐的是用 IDE 集成的 Debug 功能进行断点调试。对于 Semo 来说，比较特殊的一点是命令和插件是通过动态扫描而不是静态引入的。这对断点调试来说不够友好。

这里想分享的是一个不太完美的调试方案，能够做到对于入口和核心对 Typescript 打断点，命令对编译后的  Javascript 打断点。

## 配置

tasks.json，定义任务，让启动脚本引用。

```json
{
	"version": "2.0.0",
	"tasks": [
		{
			"type": "npm",
			"script": "build",
			"path": "packages/cli/",
			"group": "build",
			"problemMatcher": [],
			"label": "npm: build - packages/cli",
			"detail": "tsc"
		}
	]
}
```

launch.json

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    
    {
      "env": {
        "SEMO_PLUGIN_DIR": ".."
      },
      "cwd": "${workspaceFolder}/packages/cli",
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/packages/cli/src/bin.ts",
      "args": ["repl"],
      "preLaunchTask": "npm: build - packages/cli",
      "outFiles": ["${workspaceFolder}/packages/cli/lib/**/*.js"]
    }
  ]
}
```

这是核心目前的调试配置，不够完美，但是能用。后面还需要看看插件开发时是否能配出断点调试的效果。
