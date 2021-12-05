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

    const mailData = {
      from: 'kshpharmacy.order@gmail.com',
      to: 'kyawsanhtoopharmacy@gmail.com',
      subject: `KyawSanHtoo Website: An Order Received from ${req.body.name}`,
      attachments: [
        {
          filename: `${req.body.name}'s Kpay Screenshot'`,
          path: `${req.body.kpay_screenshot}`,
          cid: 'kpay_screenshot',
        },
      ],
      text: 'Sent by: ' + req.body.name,
      html: getEmailTemplate(req.body),
    }

    transporter.sendMail(mailData).then((err, info) => {
      if (err) {
        res.status(405).json({ message: err })
      } else {
        res.status(200).json(info)
      }
    })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `${req.method} method is not allowed.` })
  }
}
