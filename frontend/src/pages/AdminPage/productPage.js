import React from 'react'

import TopNavbar from '../../components/topNavbar'
import SideNavbar from '../../components/sideNavbar'
import AddProductModal from '../../components/modal/addProductModal'

const ProductPage = () => {
  return (
    <div>
    <TopNavbar/>
    <SideNavbar/>
    <AddProductModal/>

    <div className='content-wrapper'>
      <div className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1 className='mb-0'>Product</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='content'>
      <div className='container-fluid'>
      <div className="card">
  <div className="card-header">
    <h3 className="card-title">DataTable with default features</h3>
  </div>
  {/* /.card-header */}
  <div className="card-body">

  <div>
   <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modal-default">
    Launch Default Modal
    </button>
 
  </div>




  <table id="example1" className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity in Stocks</th>
          <th>Price</th>
          <th>Packaging Type</th>
          <th>Units per pack</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* Table body content */}
      </tbody>
      <tfoot>
        <tr>
          <th>Product Name</th>
          <th>Quantity in Stocks</th>
          <th>Price</th>
          <th>Packaging Type</th>
          <th>Units per pack</th>
          <th>Action</th>
        </tr>
      </tfoot>
    </table>
  </div>
  {/* /.card-body */}
</div>

      </div>
    </div>
    </div>

  

    </div>

  

  )
}

export default ProductPage