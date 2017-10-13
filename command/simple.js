'use strict'
const config = require('../config')
const download = require('download-git-repo');
const colors = require('colors');

module.exports = (folder) => {
  download(config.simple, folder, function (err) {
  console.log(err ? 'create simple demo failed'.red : 'create simple Aliplayer demo successfully'.green)
  })
}