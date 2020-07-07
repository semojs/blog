const path = require('path')
let rootPath

exports.disabled = false // Set to true to disable this command temporarily
// exports.plugin = '' // Set this for importing plugin config
exports.command = 'readme'
exports.desc = 'readme'
// exports.aliases = ''
// exports.middleware = (argv) => {}

exports.builder = function (yargs) {
  // yargs.option('option', { default, describe, alias })
  // yargs.commandDir('readme')
}

exports.handler = async function (argv) {
  const { Utils } = argv.$semo
  const appConfig = Utils.getApplicationConfig()

  rootPath = appConfig.applicationDir
  day = Utils.day


  let md = '# Semo 更新日志\n\n'

  const posts = []

  Utils.glob
      .sync('posts/**/*.md', {
        // noext:true,
        cwd: path.resolve(rootPath || process.cwd()),
      })
      .map(function(file) {
        posts.push(file)
      })

  for (let post of posts) {
    md += `* [${path.basename(post, '.md')}](${encodeURI(post)}) \n\n`
  }

  Utils.fs.writeFileSync('./README.md', md)

  Utils.success('README.md generated successfully!~')


  
}
