const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendEmail = (subject, body) => {

    const recipients = ['duane@surfrockvideo.com', 'dstanford@beverage-digest.com', 'lstanford@beverage-digest.com']

    recipients.forEach((recipient) => {
        sgMail.send({
            to: recipient,
            from: 'dstanford@beverage-digest.com',
            subject: `${subject}`,
            text: `${body}`
        })
    })

    return ("Success!")

}

module.exports = { sendEmail }