import React from 'react'

import TopNavbar from '../../components/topNavbar'
import SideNavbar from '../../components/sideNavbar'
import AddProductModal from '../../components/modal/addProductModal'

function InventoryPage() {
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
              <h1 className='mb-0'>Inventories</h1>
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




  <table id="example1" className="table table-bordered table-striped">
      <thead>
        <tr>
          <th></th>
          <th>Browser</th>
          <th>Platform(s)</th>
          <th>Engine version</th>
          <th>CSS grade</th>
        </tr>
      </thead>
      <tbody>
        {/* Table body content */}
      </tbody>
      <tfoot>
        <tr>
          <th>Rendering engine</th>
          <th>Browser</th>
          <th>Platform(s)</th>
          <th>Engine version</th>
          <th>CSS grade</th>
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

export default InventoryPage