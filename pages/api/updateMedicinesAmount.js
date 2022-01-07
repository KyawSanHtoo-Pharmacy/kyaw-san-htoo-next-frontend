import { API_URL } from '@/ksh-config/index'

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const authResp = await fetch(`${API_URL}/auth/local`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        identifier: process.env.AUTH_MAIL,
        password: process.env.AUTH_PSWD,
      }),
    })

    if (authResp.ok) {
      const authData = await authResp.json()
      const updateAmountResp = await Promise.all(
        JSON.parse(req.body).map(medicine =>
          fetch(`${API_URL}/medicines/${medicine.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authData.jwt}`,
            },
            body: JSON.stringify({
              product_quantity: medicine.product_quantity - medicine.quantity,
            }),
          })
        )
      )
      if (updateAmountResp[0].ok) {
        res.status(201).json({ message: 'Amount updated successfully!', isSuccess: true })
      } else {
        res.status(405).json({ message: updateAmountResp[0].statusText })
      }
    } else {
      res.status(405).json({ message: authResp.statusText })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `${req.method} method is not allowed.` })
  }
}
