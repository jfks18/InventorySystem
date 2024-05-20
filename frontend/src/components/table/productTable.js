import React, { useState,useEffect,useRef } from 'react';
import $ from 'jquery';
import 'admin-lte/dist/js/adminlte.min.js';
import 'admin-lte/dist/css/adminlte.min.css'; // AdminLTE CSS
import StockInModal from '../modal/stockInModal';

const ProductTable = () => {

  const [products, setProducts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const tableRef = useRef(null);
  const [modalData, setModalData] = useState({
    productName: '',
    price: '',
    quantity: '',
    units: '',
    packaging: ''
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setDataLoaded(true); // Set dataLoaded to true after data is fetched
      } catch (error) {
        console.error(error);
      }
    };

    if (dataLoaded && !$.fn.DataTable.isDataTable(tableRef.current)) {
      $(tableRef.current).DataTable({
        dom: 'lBfrtip', // Specify the layout with buttons
        buttons: ['csv', 'print', {
          text: 'Add Product',
          action: function (e, dt, node, config) {
            $('#modal-default').modal('show'); // Show the modal when the button is clicked
          }
        }],
        paging: true,
        searching: true,
        responsive: true,
        lengthChange: false,
        autoWidth: false,
        data: products, // Pass the products data to DataTables
        columns: [
          { data: 'productName' },
          { data: 'Price' },
          { data: 'QuantityInStock' },
          { data: 'PackagingType' },
          { data: 'UnitsPerPack' },
          { data: null,
            render: function (data, type, row) {
              return `<button class="btn btn-success stock-in-btn">Stock-In</button> <button class="btn btn-warning stock-out-btn">Stock-Out</button>`;
            },},
        ]
      });
    }

    $(tableRef.current).on('click', '.stock-in-btn', function () {
      const data = $(tableRef.current).DataTable().row($(this).parents('tr')).data();
      setModalData({
        productName: data.productName,
        price: data.Price,
        quantity: data.QuantityInStock,
        units: data.UnitsPerPack,
        packaging: data.PackagingType
      });
      console.log('click');
      $('#stockIn').modal('show'); // Show the modal
    });

    fetchProducts();

  }, [dataLoaded, products]);

  return (

   <>
    <StockInModal modalData={modalData} setModalData={setModalData}/>
   
    <table ref={tableRef} class=" table table-bordered table-hover">
    <thead>
    <tr>
      <th>Product Name</th>
      <th>Price</th>
      <th>Quantity in Stock</th>
      <th>Packaging Type</th>
      <th>Units per Pack</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
      {products.map(product =>(
        <tr key={product.id}>
        <td>{product.productName}</td>
        <td>{product.Price}</td>
        <td>{product.QuantityInStock}</td>
        <td>{product.PackagingType}</td>
        <td>{product.UnitsPerPack}</td>
        <td><button className='btn btn-success stock-in-btn'>Stock-In</button> <button className='btn btn-warning stock-in-btn'>Stock-out</button></td>
      </tr>
      ))}
    
    </tbody>
    <tfoot>
    <tr>
      <th>Product Name</th>
      <th>Price</th>
      <th>Quantity in Stock</th>
      <th>Packaging Type</th>
      <th>Units per Pack</th>
      <th>Action</th>
    </tr>
    </tfoot>
  </table>
   </>


  );
};

export default ProductTable;
