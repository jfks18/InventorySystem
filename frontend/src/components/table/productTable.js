import React, { useEffect } from 'react';
import $ from 'jquery';
import 'admin-lte/dist/js/adminlte.min.js';
import 'admin-lte/dist/css/adminlte.min.css'; // AdminLTE CSS

const ProductTable = () => {

  return (

      <table id="example1" className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product 1</td>
            <td>$10</td>
            <td>Category A</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Product 2</td>
            <td>$20</td>
            <td>Category B</td>
            <td>150</td>
          </tr>
          <tr>
            <td>Product 3</td>
            <td>$15</td>
            <td>Category A</td>
            <td>120</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
  );
};

export default ProductTable;
