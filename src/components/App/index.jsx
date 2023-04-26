import { useState } from 'react'

import './App.css'

function App() {
  const [retailers, setRetailers] = useState([
    {
      id: 1,
      retailer: 'Oxxo :v',
      cuit: 'ASDA',
      concept1: 'concept1',
      concept2: 'concept2',
      concept3: 'concept3',
      concept4: 'concept4',
      concept5: 'concept5',
      concept6: 'concept6',
      balance: 0,
      active: true,
      lastSale: '22/02/1997'

    },
    {
      id: 2,
      retailer: 'Oxxo :v',
      cuit: 'ASDA',
      concept1: 'concept1',
      concept2: 'concept2',
      concept3: 'concept3',
      concept4: 'concept4',
      concept5: 'concept5',
      concept6: 'concept6',
      balance: 0,
      active: true,
      lastSale: '22/02/1997'

    }
  ])
  const headers = [
    "ID",
    "Comercio",
    "CUIT",
    "Concepto 1",
    "Concepto 2",
    "Concepto 3",
    "Concepto 4",
    "Concepto 5",
    "Concepto 6",
    "Balance actual",
    "Activo",
    "Ultima Venta",
  ]

  return (
    <>
      <div>

      </div>
      <h1>Comercios</h1>
      <div className="card">

        <table style={{ overflowX: "auto" }}>
          <tr>
            {headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
          {
            retailers.map(retailer => (
              <tr key={retailer.id}>
                <td>{retailer.id}</td>
                <td>{retailer.retailer}</td>
                <td>{retailer.cuit}</td>
                <td>{retailer.concept1}</td>
                <td>{retailer.concept2}</td>
                <td>{retailer.concept3}</td>
                <td>{retailer.concept4}</td>
                <td>{retailer.concept5}</td>
                <td>{retailer.concept6}</td>
                <td>{retailer.balance}</td>
                <td>{retailer.active ? 'Si' : 'No'}</td>
                <td>{retailer.lastSale}</td>

              </tr>
            ))
          }

        </table>
      </div>


      <p className="read-the-docs">

      </p>
    </>
  )
}

export default App
