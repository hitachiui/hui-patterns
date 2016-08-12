var through = require('through2');    // npm install --save through2

module.exports = function() {
  /**
   * @this {Transform}
   */
  var transform = function(file, encoding, callback) {
    file.content += 'HELLO WORLD';
    callback();
  };

  return through.obj(transform);
};