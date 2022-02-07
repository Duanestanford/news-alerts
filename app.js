var imaps = require('imap-simple');
const simpleParser = require('mailparser').simpleParser;
const _ = require('lodash');
const { sendEmail } = require('./send.js')

var config = {
    imap: {
        user: 'send@bd-mail-forwarding.com',
        password: `${process.env.EMAIL_PASSWORD}`,
        host: 'giowm1172.siteground.biz',
        port: 993,
        tls: true,
        authTimeout: 3000
    }
};

imaps.connect(config)
.then((connection) => { return connection.openBox('INBOX')
.then(() => {

        var searchCriteria = ['UNSEEN'];

        var fetchOptions = {
            bodies: ['HEADER', 'TEXT', ''],
            markSeen: false
        };
        
return connection.search(searchCriteria, fetchOptions)
.then((messages) => { messages.forEach((message) => {
                var all = _.find(message.parts, { "which": "" })
                var id = message.attributes.uid;
                var idHeader = "Imap-Id: "+id+"\r\n";
                simpleParser(idHeader+all.body, (err, mail) => {
                    // access to the whole mail object
                    const subject = mail.subject
                    const body = mail.text
                    sendEmail(subject, body)
                });
            });
        });
    });
});