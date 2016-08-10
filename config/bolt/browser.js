configure({
  configs: [
    './test.js',
    './prod.js'
  ],
  sources: [
    source('amd', 'ephox.boulder', 'http://localhost/me/work/van/boulder/src/main/js', mapper.hierarchical, { absolute: true })
  ]
});