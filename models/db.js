var settings = require('../settings');
  Db = require('mongodb').Db,
  Connection = require('mongodb').Connection,
  Server = require('mongodb').Server;

module.exports = new Db( 'shizhan_blog', new Server( 'ds064748.mlab.com', '64748'), {safe: true});
