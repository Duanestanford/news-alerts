const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendEmail = ((recipients, subject, body) => {

    recipients.forEach((recipient) => {
        sgMail.send({
            to: recipient,
            from: 'dstanford@beverage-digest.com',
            subject: `${subject}`,
            text: `${body}`
        })
    })




})

module.exports = {
    sendEmail
}