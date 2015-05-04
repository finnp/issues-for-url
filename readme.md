# issues-for-url
[![NPM](https://nodei.co/npm/issues-for-url.png)](https://nodei.co/npm/issues-for-url/)

This module scrapes a GitHub issue link for issues (title, link). It does not do paging.

```js
var issues = require('issues-for-url')

issues('https://github.com/nodeschool/discussions/issues?q=is%3Aissue+no%3Alabel+is%3Aclosed')
  .on('data', function (data) {
    console.log(data) // {url: ..., title...}
  })
```