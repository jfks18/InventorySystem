import React from 'react'

function AddProductModal() {
  return (
    <>

  {/* Button trigger modal */}
  <div className="modal fade" id="modal-default">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Default Modal</h4>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
         <div className="row">
          <div className='col-6'>
            <div className='form-group'>
              <label for="product">Product Name</label>
              <input type="text" className="form-control" placeholder="EX. Datu Puti (soy)"></input>
            </div>
          </div>
          <div className='col-5'>
          <div className='form-group'>
              <label for="product">Price</label>
              <input type="text" className="form-control" placeholder="500"></input>
            </div>
          </div>
         </div>
        </div>
        <div className="modal-footer justify-content-between">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
      {/* /.modal-content */}
    </div>
    {/* /.modal-dialog */}
  </div>
  {/* /.modal */}

    </>
  )
}

export default AddProductModal