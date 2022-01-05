import { API_URL } from '@/ksh-config/index'
const medicineToBuy = [
  {
    id: 1,
  },
  {
    id: 2,
  },
]

export default function handler(req, res) {
  if (req.method === 'PUT') {
    Promise.all(
      medicineToBuy.map(medicine =>
        fetch(`${API_URL}/medicines/${medicine.id}`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${process.env.OWNER_TOKEN}`,
          },
          body: JSON.stringify({
            product_quantity: 3,
            //product_quantity: medicine.product_quantity - medicine.quantity,
          }),
        })
      )
    )
      .then(resp => resp[0].json())
      .then(data => {
        res.status(200).json({ data })
        // console.log(data)
        // setOrderOnTheProcess(false)
        // dispatch({ type: 'CLEAR_CART' })
        // setShowOrderSuccessPopup(true)
        // setCartVisible(false)
      })
      .catch(err => {
        res.status(403).json({ error: err })
      })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `${req.method} method is not allowed.` })
  }
}
