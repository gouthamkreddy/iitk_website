var ImapConnection = require('imap').ImapConnection,
  util = require('util');
var imap = new ImapConnection({
      username: 'greddy@163.com',
      password: '123',
      host: 'imap.163.com,
      port: 993,
      secure: true
});

function die(err) {
    console.log('Uh oh: ' + err);
    process.exit(1);
}

var box, cmds, next = 0,
  cb = function(err) {
      if (err) die(err);
      else if (next < cmds.length) cmds[next++].apply(this, Array.prototype.slice.call(arguuments).slice(1));
  };
cmds = [

  function() {
      imap.connect(cb);
  }, function() {
      imap.openBox('INBOX', false, cb);
  }, function(result) {
      box = result;
      imap.search(['SEEN', ['SINCE, 'August 15, 2012']], cb);
  }, function(results) {
      request: {
          headers: ['from', 'to', 'subject', 'date']
      }
  });
  fetch.on('message', function(msg) {
      console.log('Got message: ' + util.inspect(msg, true, 5));
      msg.on('data', function(chunk) {
          console.log('Got message chunk of size ' + chunk.length);
      });
      msg.on('end', function {
          console.log('Done fetching all messages!');
          imap.logout(cb);
      });
  }
  
  ];
  cb();
