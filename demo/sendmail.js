var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport("SMTP", {
      host: "smtp.163.com",
      port: 25,
      auth: {
            user: "greddy@163.com",
            pass: "123"
      }
});

console.log('SMTP configured');

var message = {
      from: "greddy <greddy@163.com>",
      to: "asd <asd@163.com>",
      subject: "Hello nodemail!",
      headers: {
            'X-Laziness-level': 1000
      },
      text: 'Hello nodemail!',
      html: '<p><b>Hello nodemail！</b></p><img width="100" src="cid:inspectocat@node"/>',
      attachments: [
      {
            fileName: 'string.txt',
		        contents: 'Some notes about this e-mail',
		        contentType: 'text/plain'
		  },
		  {
		        fileName: 'notes.txt',
		        filePath: __dirname + '/attachments/notes.txt',
	    },
	    {
		        fileName: 'image.png',
		        contents: new Buffer('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' + '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' + 'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC', 'base64'),
		        cid: 'note@node' // should be as unique as possible
	    },
	    {
		        fileName: 'inspectocat.jpg',
		        filePath: __dirname + '/attachments/inspectocat.jpg',
		        cid: 'inspectocat@node' // should be as unique as possible
	    }]
};

console.log('Sending Mail');

transport.sendMail(message, function(error) {
	if (error) {
		console.log('Error occured');
		console.log(error.message);
		return;
	}
	console.log('Message sent succesfully!');
	
	transport.close();
})
