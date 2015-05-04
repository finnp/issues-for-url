var issues = require('./')

issues('https://github.com/nodeschool/discussions/issues?q=is%3Aissue+no%3Alabel+is%3Aclosed')
  .on('data', function (data) {
    console.log(data)
  })
  .on('end', function () {
    console.log('done')
  })