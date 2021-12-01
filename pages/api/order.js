const nodemailer = require('nodemailer')

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, address, delivery_method, payment_method } = req.body

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
      subject: `KyawSanHtoo Website: An Order Received from ${name}`,
      text: 'Sent by: ' + req.body.name,
      html: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <style>
            h1 {
              background-color: red;
            }
          </style>
        </head>
        <body>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>${name}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>${phone}</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>${address}</td>
              </tr>
              <tr>
                <td>Delivery Method:</td>
                <td>${delivery_method}</td>
              </tr>
              <tr>
                <td>Payment Method:</td>
                <td>${payment_method}</td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>      
      `,
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
