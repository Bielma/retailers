import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'
import api from '../../services/api'
function App() {
  const [retailers, setRetailers] = useState([
    {
      id: 1,
      retailer: 'Oxxo',
      cuit: '30-50000661-3',
      concept1: 19.99,
      concept2: 245.12,
      concept3: 1234.00,
      concept4: 123123.00,
      concept5: 875.90,
      concept6: 12356.00,
      balance: 100000,
      active: true,
      lastSale: '22/02/1997'

    },

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
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await api.stores.getStores();
    if (response.succcess) {
      setRetailers(response.data || [])
    }
  }
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
