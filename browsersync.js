'use strict'

const serve = require('browser-sync')
const bundler = require('./bundler')
// browser sync settings
serve({
  port: 3000,
  open: false,
  server: {
    baseDir: './'
  },
  middleware: [
    bundler.middleware()
  ]
})