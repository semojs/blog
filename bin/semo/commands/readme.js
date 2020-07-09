const path = require('path')
const fs = require('fs')

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

  let md = ''

  md += '## Releases\n\n' + renderDir('releases', Utils)
  md += '## News\n\n' + renderDir('news', Utils)
  md += '## Tips\n\n' + renderDir('tips', Utils)

  Utils.fs.writeFileSync('./README.md', md)

  Utils.success('README.md generated successfully!~')

}


const renderDir = (dir, Utils) => {
  let md = ''
  const posts = []

  Utils.glob
      .sync(`${dir}/**/*.md`, {
        // noext:true,
        stat: true,
        cwd: path.resolve(rootPath || process.cwd()),
      })
      .map(function(file) {
        const stats = fs.statSync(file)
        posts.push({file, birthtime: stats.birthtime})
      })

  posts.sort((a, b) => b.birthtime - a.birthtime)

  for (let post of posts) {
    md += `* [${path.basename(post.file, '.md')}](${encodeURI(post.file)}) (${Utils.day(post.birthtime).format('YYYY-MM-DD HH:mm:ss')})\n\n`
  }

  return md
}