
const ImapClient = require('emailjs-imap-client').default

const client = new ImapClient('giowm1172.siteground.biz', 993, {
    auth: {
        user: 'send@bd-mail-forwarding.com',
        pass: process.env.MAIL_PASSWORD
    }
});


client.connect().then(() => { console.log("huh??? it worked!");});

client.listMailboxes().then((mailboxes) => { console.log(mailboxes);})

client.close().then(() => { console.log("terminated");});