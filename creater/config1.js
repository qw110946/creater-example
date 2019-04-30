const {helper} = require('creater-cli');

module.exports = {
  config: {
    dir: 'src/example1'
  },
  files: [
    {
      path: 'newFile.js',
      content: 'i am new file'
    },
    {
      path: 'css/newFile.css',
      content: 'i am new css file in css folder'
    },
    {
      path: 'myCopyFile1.js',
      content: '@path:../temp.js'
    },
    {
      path: 'myCopyFile2.js',
      content: helper.withPath('../temp.js') // Equate to '@path:temp.js'
    },
    {
      path: 'myCopyFile3.js',
      format: (prevContent, content) => content + '\ni am copy from temp.js',
      content: helper.withPath('../temp.js')
    },
    {
      path: 'myUpdateFile.js',
      format: (prevContent, content) => prevContent + '\n' + content + '\n' + 'update some thing',
      content: helper.withPath('../temp.js')
    }
  ]
};
