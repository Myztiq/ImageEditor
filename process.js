const Jimp = require('jimp')
const fs = require('fs')
const Promise = require('bluebird')

Promise.fromCallback((cb) => {
  fs.readdir('./images', cb)
})
  .map((lineItem) => {
    return Promise.fromCallback((cb) => {
      Jimp.read('./images/' + lineItem, cb)
    })
      .then((lenna) => {
        return Promise.fromCallback((cb) => {
          lenna
            .opacity(0.8)
            .write('./processed/' + lineItem, cb)
        })
      })
  })
