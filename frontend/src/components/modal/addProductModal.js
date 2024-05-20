import React, { useState } from "react";
import axios from "axios";
function AddProductModal() {
  const [productData, setProductData] = useState({
    productName: "",
    price: "",
    quantity: "",
    packaging: "--- Please Choose an option ---",
    units: "",
  });

  const [error, setError] = useState("");
  const [showAlert,setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const triggerError = (error) => {
    setError(error);
    showAlert(true);
  };

  const handleSubmit = async (e) =>{
try{
  const response = await axios.post('http://localhost:8080/registerProduct', productData);
  if(productData.packaging === "--- Please Choose an option ---" || productData.price === "" || productData.productName === "" || productData.quantity === "" || productData.units === ""){
    alert("some areas are not fill-up!!")
  }else{
    if(response.data.success === true){
      alert(response.data.message);
    }else{
      alert("something went wrong");
    }
  }
}catch(error){
  console.error("Error Adding product:", error);
}
   
  }



  const clear = () => {
    setProductData(
      Object.fromEntries(Object.keys(productData).map((key) => [key, ""]))
    );
  };

  return (
    <>
      {/* Button trigger modal */}
      <div className="modal fade" id="modal-default">
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
            {showAlert && (
                <div className="alert alert-danger alert-dismissible">
                  <button
                    type="button"
                    className="close"
                    onClick={() => setShowAlert(false)}
                    aria-hidden="true"
                  >
                    ×
                  </button>
                  <h5>
                    <i className="icon fas fa-ban" /> Alert!
                  </h5>
                  {error}
                </div>
              )}
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label for="product">Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="EX. Datu Puti (soy)"
                      name="productName"
                      value={productData.productName}
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
                      name="price"
                      value={productData.price}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <div className="form-group">
                    <label for="Quantity">Quantity in Stocks</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="EX.25"
                      name="quantity"
                      value={productData.quantity}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-4">
                  <div className="form-group">
                    <label for="Quantity">Units per Pack</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="EX.25"
                      name="units"
                      value={productData.units}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-7">
                  <div className="form-group">
                    <label for="Packaging">Packaging Type</label>
                    <select className="custom-select" onChange={handleChange} name="packaging" value={productData.packaging}>
                      <option  selected value="">
                        --- Please Choose an option ---
                      </option>
                      <option value="Box">Box</option>
                      <option value="Sachet">Sachet</option>
                      <option value="">Individual</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button type="button" className="btn btn-default" onClick={clear}>
                clear
              </button>
              <button type="submit" className="btn btn-primary">
                Save
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
  );
}

export default AddProductModal;
