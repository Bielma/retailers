import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import api from '../../services/api'
import Pagination from '../Pagination'

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

  const [params, setParams] = useState({
    search: '',
    filter: '',
    orderBy: ''
  })
  const [page, setPage] = useState(0)

  const [paginationData, setPaginationData] = useState({
    page: 1,
    total: 10000000,
    rowsPerPage: 10
  })

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
  }, [params.filter, params.orderBy, paginationData.page])

  const fetchData = async () => {
    const response = await api.stores.getStores(params, page + 1);
    if (response.succcess) {
      setRetailers(response.data || [])
    }
  }
  const handleChange = (event) => {
    //setSearch(event.target.value)
    const _params = {
      ...params,
      [event.target.name]: event.target.value
    }


    setParams(_params)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  }
  const handlePageChange = (page) => {

    const _paginationData = {
      ...paginationData,
      page: page
    }
    setPaginationData(_paginationData)
  }
  return (
    <>
      <div>

      </div>
      <h1>Comercios</h1>
      <div className="stores">
        <div className='stores__search'>
          <form onSubmit={handleSubmit}>
            <input
              className='search--input'
              name='search'
              type='search'
              value={params.search}

              onChange={handleChange} />
          </form>



        </div>
        <div className='stores__filters'>
          <select name="filter" value={params.filter} onChange={handleChange}>
            <option value="">Estatus</option>
            <option value="1" >Activo</option>
            <option value="0">Inactivo</option>
          </select>
          <select name="orderBy" value={params.orderBy} onChange={handleChange}>
            <option value="">Ordenar Por</option>
            <option value="cuit" >CUIT</option>
            <option value="stores">Comercio</option>
          </select>
        </div>

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
        <div className='stores__pagination'>
          <Pagination
            currentPage={paginationData.page}
            totalCount={paginationData.total}
            pageSize={paginationData.rowsPerPage}
            onPageChange={handlePageChange}
          />
        </div>

      </div>


      <p className="read-the-docs">

      </p>
    </>
  )
}

export default App
