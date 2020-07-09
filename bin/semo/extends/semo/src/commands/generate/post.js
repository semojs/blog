const path = require('path');
const fs = require('fs')

exports.disabled = false // Set to true to disable this command temporarily
// exports.plugin = '' // Set this for importing plugin config
exports.command = 'post <title>'
exports.desc = 'post'
// exports.aliases = ''
// exports.middleware = (argv) => {}

exports.builder = function (yargs) {
  yargs.option('category', { default: 'releases', describe: 'blog category', alias: 'C' })
  // yargs.commandDir('post')
}

exports.handler = async function (argv) {
  const { Utils } = argv.$semo
  const postDir = path.resolve(argv.category)


  if (!fs.existsSync(postDir)) {
    Utils.error('Category directory not exist')
    return
  }

  const content = [`# ${argv.title}`]

  const fileName = (argv.title) + '.md'
  const filePath = `${postDir}/${fileName}`

  Utils.fs.writeFileSync(filePath, content.join('\n\n'))
  Utils.info(`${filePath} created!`)
}
