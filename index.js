var request = require('request')
var trumpet = require('trumpet')
var concat = require('concat-stream')
var readonly = require('read-only-stream')
var ent = require('ent')
var Through = require('stream').PassThrough

module.exports = function (url) {
  var stream = new Through({objectMode: true})
  var tr = trumpet()
  tr.selectAll('ul.table-list-issues li a.issue-title-link', function (issue) {
    issue.getAttribute('href', function (href) {
      issue.createReadStream()
        .pipe(concat({encoding:'string'}, function (title) {
          stream.write({url: 'https://github.com' + href, title: ent.decode(title.trim())})
        }))
    })  
  })

  request(url).pipe(tr)
  
  tr.on('end', function () {
    stream.end()
  })
  
  return readonly(stream)
}
