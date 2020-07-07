exports.disabled = false // Set to true to disable this command temporarily
// exports.plugin = '' // Set this for importing plugin config
exports.command = 'post <title>'
exports.desc = 'post'
// exports.aliases = ''
// exports.middleware = (argv) => {}

exports.builder = function (yargs) {
  // yargs.option('option', { default, describe, alias })
  // yargs.commandDir('post')
}

exports.handler = async function (argv) {
  const { Utils } = argv.$semo
  const postDir = Utils.config('postDir')
  const content = [`# ${argv.title}`]

  content.push(`vipzhicheng 发布于 ${Utils.day().format('YYYY年MM月DD日 HH:mm')}`)

  const fileName = (argv.title) + '.md'
  const filePath = `${postDir}/${fileName}`

  Utils.fs.writeFileSync(filePath, content.join('\n\n'))
  Utils.info(`${fileName} created!`)
}
