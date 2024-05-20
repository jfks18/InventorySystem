
import React, {useEffect,useRef} from 'react'


import TopNavbar from '../components/topNavbar';
import SideNavbar from '../components/sideNavbar';
import $ from 'jquery';
import 'admin-lte/dist/css/adminlte.min.css'; // AdminLTE CSS
import 'admin-lte/plugins/fontawesome-free/css/all.min.css'; // Font Awesome CSS
import 'admin-lte/dist/js/adminlte.min.js';
import AddProductModal from '../components/modal/addProductModal';
import ProductPage from './AdminPage/productPage';

import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css'; // DataTables Bootstrap 4 CSS
import 'datatables.net/js/jquery.dataTables.min.js'; // DataTables jQuery plugin
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js'; // DataTables Bootstrap 4 JS
import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css'; // DataTables Buttons Bootstrap 4 CSS
import 'datatables.net-buttons/js/dataTables.buttons.min.js'; // DataTables Buttons JS
import 'datatables.net-buttons/js/buttons.html5.min.js'; // HTML5 export buttons
import 'datatables.net-buttons/js/buttons.print.min.js'; // Print button


const StaffPage = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current && !$.fn.DataTable.isDataTable(tableRef.current)) {
      $(tableRef.current).DataTable({
        dom: 'Bfrtip',
        buttons: ['copy', 'colvis', 'pdf', 'print']
      });
    }
  }, []);

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

  <div>
   <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modal-default">
    Launch Default Modal
    </button>
 
  </div>

  <table ref={tableRef} className="table table-striped table-bordered" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            {/* Add more column headers as needed */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            {/* Add more rows of data as needed */}
          </tr>
        </tbody>
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

export default StaffPage