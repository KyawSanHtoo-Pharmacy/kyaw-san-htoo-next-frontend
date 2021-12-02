import myanmarNumbers from 'myanmar-numbers'

export const changeMyanNum = num => myanmarNumbers(num, 'my')

export const getEmailTemplate = data => {
  const { medicines, name, phone, address, delivery_method, payment_method } = data

  let medicineListHTML = ''
  for (let medicine of medicines) {
    const { image, name, price, quantity } = medicine
    medicineListHTML += `
            <tr>
              <td>
                <img src=${image} alt=${name} />
              </td>
              <td>${name}</td>
              <td>${price}</td>
              <td>${quantity}</td>
              <td>${quantity * price}</td>
            </tr>
          `
  }

  const medicinesTableHTML = `
    <table>
        <thead>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Amount</th>
        </thead>
      ${medicineListHTML}
   </table>
  `

  const customerInfoTableHTML = `
  <table>
      <thead>
        <th>Name</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Delivery Method</th>
        <th>Payment Method</th>
      </thead>
      <tbody>
        <tr>
          <td>${name}</td>
          <td>${phone}</td>
          <td>${address}</td>
          <td>${delivery_method}</td>
          <td>${payment_method}</td>
        </tr>
      </tbody>
  </table>
  `

  const emailTemplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
        text-align: center;
        margin-bottom: 24px;
      }

      table td,
      table th {
        border: 1px solid #ddd;
        padding: 8px;
      }

      table tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      table tr:hover {
        background-color: #ddd;
      }

      table th,
      tfoot td {
        padding-top: 12px;
        padding-bottom: 12px;
        background-color: #04aa6d;
        color: white;
      }
    </style>
  </head>
  <body>
    ${customerInfoTableHTML}
    ${medicinesTableHTML}
  </body> 
</html>
`
  return emailTemplate
}
