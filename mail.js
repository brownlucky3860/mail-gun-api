
const mailgun = require("mailgun-js");
const DOMAIN = 'YOUR_DOMAIN_NAME';
const mg = mailgun({apiKey: 'xxxxxxxxYOUR_API_KEYxxxxxxxx', domain: 'xxxxxxxxYOUR_DOMAINxxxxxxxx'});
const data = {
	from: 'abc@gmail.com'//the sender's email address, //make sure that you authorize this recipient 
	to: '123@gmail.com'//the reciever's email address,
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});
