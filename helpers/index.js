import myanmarNumbers from 'myanmar-numbers'

export const changeMyanNum = num => myanmarNumbers(num, 'my')

export const getEmailTemplate = data => {
  const { medicines, name, phone, address, delivery_method, payment_method } = data

  const totalCost = medicines.reduce((acc, medicine) => acc + medicine.price * medicine.quantity, 0)

  let medicineListHTML = ''
  for (let medicine of medicines) {
    const { image, name, price, quantity } = medicine
    medicineListHTML += `
    <tr style="height: 24px"></tr>
    <tr>
      <td style="width: 20%">
        <img
          src=${image}
          alt=""
          class="product-image"
        />
      </td>
      <td style="width: 20%">${name}</td>
      <td style="width: 20%">${price}</td>
      <td style="width: 20%">${quantity}</td>
      <td style="width: 20%">${price * quantity}</td>
    </tr> 
          `
  }

  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Template</title>
    <link rel="stylesheet" href="./email-template.css" />
    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      body {
        background-color: #f9f9f9;
        padding: 40px;
      }
      @media screen and (max-width: 465px) {
        body {
          padding: 16px;
        }
      }
      h1 {
        color: #5abeae;
        font-size: 24px;
        text-align: center;
      }
      h2 {
        color: #7c91b6;
        font-size: 12px;
        font-weight: normal;
      }
      @media screen and (max-width: 465px) {
        h1 {
          font-size: 20px;
        }
        h2 {
          font-size: 10px;
        }
      }
      p,
      td {
        color: #3a4a67;
        font-size: 12px;
      }
      @media screen and (max-width: 465px) {
        p,
        td {
          font-size: 10px;
        }
      }
      table {
        width: 100%;
      }
      .product-image {
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 12px;
      }
      @media screen and (max-width: 465px) {
        .product-image {
          width: 32px;
          height: 32px;
          border-radius: 6px;
        }
      }
      .notice {
        max-width: 240px;
        margin: 24px auto 0 auto;
        text-align: center;
      }
      @media screen and (max-width: 465px) {
        .notice {
          max-width: 200px;
        }
      }
      .kpay-screenshot {
        max-width: 360px;
        margin: 0 auto;
        border-radius: 4px;
      }
      @media screen and (max-width: 465px) {
        .kpay-screenshot {
          max-width: 100%;
        }
      }
    </style>
  </head>
  <body>
    <table>
      <tbody>
        <tr>
          <td colspan="3" style="text-align: center">
            <img
              src="https://res.cloudinary.com/kyawsanhtoo-pharmacy/image/upload/v1638889000/Main_Logo_Landscape_c3fa172b30.png"
              alt="Kyaw San Htoo Logo"
            />
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <h1 style="margin: 40px 0 24px 0">မှာယူသူရဲ့ အချက်အလက်များ</h1>
          </td>
        </tr>
        <tr>
          <td style="width: 25%">
            <div style="margin-bottom: 24px">
              <h2 style="margin-bottom: 8px">မှာယူသူ အမည်</h2>
              <p>${name}</p>
            </div>
          </td>
          <td style="width: 31%">
            <div style="margin-bottom: 24px">
              <h2 style="margin-bottom: 8px">ပို့ဆောင်ပေးမည့် နည်းလမ်း</h2>
              <p>${delivery_method}</p>
            </div>
          </td>
          <td style="width: 33%">
            <div style="margin-bottom: 24px">
              <h2 style="margin-bottom: 8px">လိပ်စာ</h2>
              <p>${address}</p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <h2 style="margin-bottom: 8px">ဖုန်းနံပါတ်</h2>
              <p>${phone}</p>
            </div>
          </td>
          <td>
            <div>
              <h2 style="margin-bottom: 8px">ငွေပေးချေမည့် နည်းလမ်း</h2>
              <p>${payment_method}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <table style="margin-top: 40px">
      <tbody>
        <tr>
          <td colspan="5">
            <h1 style="margin-bottom: 24px">ကုန်ကျငွေ စာရင်း</h1>
          </td>
        </tr>
        <tr>
          <td style="width: 20%">ဆေးပုံ</td>
          <td style="width: 20%">ဝယ်မယ့်ဆေး</td>
          <td style="width: 20%">ဈေးနှုန်း</td>
          <td style="width: 20%">ပမာဏ</td>
          <td style="width: 20%">ကျသင့်ငွေ<br />(ကျပ်)</td>
        </tr>
        <tr style="height: 16px"></tr>
      </tbody>
    </table>
    <div style="height: 1px; background-color: #b6e2db"></div>
    <table>
      <tbody>
       ${medicineListHTML}
        <tr style="height: 24px"></tr>
      </tbody>
    </table>
    <table align="right" style="width: 60%; border-collapse: collapse">
      <tbody>
        <tr style="height: 32px"></tr>
        <tr>
          <td colspan="2">စုစုပေါင်း ဆေးတန်ဖိုး</td>
          <td style="width: 20%">၆၄၅၀</td>
        </tr>
        <tr style="height: 24px"></tr>
        <tr style="border-bottom: 1pt solid #b6e2db">
          <td colspan="2">
            <p style="margin-bottom: 24px">စုစုပေါင်း ဆေးတန်ဖိုး</p>
          </td>
          <td style="width: 20%"><p style="margin-bottom: 24px">၆၄၅၀</p></td>
        </tr>
        <tr style="height: 16px"></tr>
      </tbody>
    </table>
    <div style="height: 1px; background-color: #b6e2db"></div>
    <table align="right" style="width: 60%; border-collapse: collapse">
      <tbody>
        <tr>
          <td colspan="2" style="font-weight: bold">စုစုပေါင်း ကုန်ကျငွေ</td>
          <td style="width: 20%; font-weight: bold; font-size: 18px; color: #5abeae">${totalCost}</td>
        </tr>
      </tbody>
    </table>
    <table>
      <tbody>
        <tr>
          <td colspan="5">
            <h1 style="margin-bottom: 24px; margin-top: 40px">Ngwe Phyet Pine</h1>
          </td>
        </tr>
        <tr>
          <td style="text-align: center">
            <img
            src='cid:kpay_screenshot' alt='Kpay Screenshot'
              class="kpay-screenshot"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <tbody>
        <tr>
          <td>
            <p class="notice">အချက်အလက် တစ်စုံတစ်ရာမှားယွင်းမှုများရှိပါက ၀၉ ၁၂၃ ၄၅၆ ၇၈၉ ကို ဆက်သွယ်နိုင်ပါတယ်။</p>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>

  `
}

// export const getEmailTemplate = data => {
//   const { medicines, name, phone, address, delivery_method, payment_method } = data

//   let medicineListHTML = ''
//   for (let medicine of medicines) {
//     const { image, name, price, quantity } = medicine
//     medicineListHTML += `
//             <tr>
//               <td>
//                 <img src=${image} alt=${name} />
//               </td>
//               <td>${name}</td>
//               <td>${price}</td>
//               <td>${quantity}</td>
//               <td>${quantity * price}</td>
//             </tr>
//           `
//   }

//   const medicinesTableHTML = `
//     <table>
//         <thead>
//           <th>Image</th>
//           <th>Name</th>
//           <th>Price</th>
//           <th>Quantity</th>
//           <th>Amount</th>
//         </thead>
//       ${medicineListHTML}
//    </table>
//   `

//   const customerInfoTableHTML = `
//   <table>
//       <thead>
//         <th>Name</th>
//         <th>Phone</th>
//         <th>Address</th>
//         <th>Delivery Method</th>
//         <th>Payment Method</th>
//       </thead>
//       <tbody>
//         <tr>
//           <td>${name}</td>
//           <td>${phone}</td>
//           <td>${address}</td>
//           <td>${delivery_method}</td>
//           <td>${payment_method}</td>
//         </tr>
//       </tbody>
//   </table>
//   `

//   const emailTemplate = `
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <style>
//       table {
//         font-family: Arial, Helvetica, sans-serif;
//         border-collapse: collapse;
//         width: 100%;
//         text-align: center;
//         margin-bottom: 24px;
//       }

//       table td,
//       table th {
//         border: 1px solid #ddd;
//         padding: 8px;
//       }

//       table tr:nth-child(even) {
//         background-color: #f2f2f2;
//       }

//       table tr:hover {
//         background-color: #ddd;
//       }

//       table th,
//       tfoot td {
//         padding-top: 12px;
//         padding-bottom: 12px;
//         background-color: #04aa6d;
//         color: white;
//       }
//     </style>
//   </head>
//   <body>
//     <img src='cid:kpay_screenshot' alt='Kpay Screenshot' style="width: 200px;" />
//     ${customerInfoTableHTML}
//     ${medicinesTableHTML}
//   </body>
// </html>
// `
//   return emailTemplate
// }
