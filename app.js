const { sendEmail } = require("./send")



recipients = ['duane@surfrockvideo.com', 'stanfordduane@gmail.com']

sendEmail(recipients, "SendGrid Test!", "It Worked!")