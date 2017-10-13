'use strict'
const config = require('../config')
const download = require('download-git-repo');

module.exports = (folder) => {
  download(config.webpack, folder, function (err) {
  console.log(err ? 'create webpack demo failed'.red : 'create webpack Aliplayer demo successfully'.green)
  })
}