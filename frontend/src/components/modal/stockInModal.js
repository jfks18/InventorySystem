import React from 'react'
import $ from 'jquery';

function StockInModal({modalData, setModalData}) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setModalData({ ...modalData, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(modalData);
        $('#stockIn').modal('hide'); 
       
      };
  return (
    <>
     {/* Button trigger modal */}
     <div className="modal fade" id="stockIn">
     <div className="modal-dialog">
       <div className="modal-content">
         <div className="modal-header">
           <h4 className="modal-title">Adding Product</h4>
           <button
             type="button"
             className="close"
             data-dismiss="modal"
             aria-label="Close"
           >
             <span aria-hidden="true">×</span>
           </button>
         </div>
         <form onSubmit={handleSubmit}>

         <div className="modal-body">
           <div className="row">
             <div className="col-6">
               <div className="form-group">
                 <label for="product">Product Name</label>
                 <input
                   type="text"
                   className="form-control"
                   placeholder="EX. Datu Puti (soy)"
                   name ="productName"
                   value = {modalData.productName}
                   onChange={handleChange}
                 ></input>
               </div>
             </div>
             <div className="col-5">
               <div className="form-group">
                 <label for="product">Price</label>
                 <input
                   type="text"
                   className="form-control"
                   placeholder="500"
                   name ="price"
                   value = {modalData.price}
                   onChange={handleChange}
                 ></input>
               </div>
             </div>
           </div>

           <div className="row">
               <div className="col-4">
                 <div className="form-group">
                   <label for="Quantity">Quantity in Stocks</label>
                   <input type="number" className="form-control"
                    name ="quantity"
                    value = {modalData.quantity}
                    onChange={handleChange} placeholder="EX.25"/>
                 </div>
               </div>
               
               <div className="col-4">
                 <div className="form-group">
                   <label for="Quantity">Units per Pack</label>
                   <input type="number" className="form-control"
                    name ="units"
                    value = {modalData.units}
                    onChange={handleChange} placeholder="EX.25"/>
                 </div>
               </div>
           </div>

           <div className="row">
           <div className="col-7">
                 <div className="form-group">
                   <label for="Packaging">Packaging Type</label>
                   <select name ="packaging"
                   value = {modalData.packaging}
                   onChange={handleChange}
                    className="custom-select">
                     <option selected value="">--- Please Choose an option ---</option>
                     <option value="Box">Box</option>
                     <option value="Sachet">Sachet</option>
                     <option value="">Individual</option>
                   </select>
                 </div>
               </div>
           </div>

         </div>
         <div className="modal-footer justify-content-between">
           <button
             type="button"
             className="btn btn-default"
             data-dismiss="modal"
           >
             Close
           </button>
           <button type="submit" className="btn btn-primary">
             Save changes
           </button>
         </div>
         </form>
       </div>
       {/* /.modal-content */}
     </div>
     {/* /.modal-dialog */}
   </div>
   {/* /.modal */}
    </>
  )
}

export default StockInModal
