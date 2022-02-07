const { sendEmail } = require('./send.js')
const fs = require('fs')

const subject = "Test!"
const body = fs.readFileSync("./newsalert.txt", "utf8")
sendEmail(subject, body)

