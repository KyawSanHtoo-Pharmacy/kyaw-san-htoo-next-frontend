const nodemailer = require('nodemailer')
import { getEmailTemplate } from '@/ksh-helpers'

export default function handler(req, res) {
  if (req.method === 'POST') {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.KSH_MAIL_USERNAME,
        pass: process.env.KSH_MAIL_PSWD,
      },
      secure: true,
    })

    const emailTemplate = getEmailTemplate(req.body)

    const mailData = {
      from: 'kshpharmacy.order@gmail.com',
      to: 'kyawsanhtoopharmacy@gmail.com',
      subject: `KyawSanHtoo Website: An Order Received from ${req.body.name}`,
      text: 'Sent by: ' + req.body.name,
      html: emailTemplate,
    }

    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info)
        res.status(200).json(req.body)
      }
    })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `${req.method} method is not allowed.` })
  }
}
