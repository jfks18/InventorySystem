
import React, {useEffect,useRef} from 'react'


import TopNavbar from '../components/topNavbar';
import SideNavbar from '../components/sideNavbar';
import AddProductModal from '../components/modal/addProductModal';
import ProductPage from './AdminPage/productPage';
// Import CSS
import 'admin-lte/dist/css/adminlte.min.css'; // AdminLTE CSS
import 'admin-lte/plugins/fontawesome-free/css/all.min.css'; // Font Awesome CSS
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css'; // DataTables Bootstrap 4 CSS
import 'datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css'; // DataTables Responsive Bootstrap 4 CSS

// Import JS
import 'admin-lte/dist/js/adminlte.min.js'; // AdminLTE JS
import 'datatables.net/js/jquery.dataTables.min.js'; // DataTables jQuery plugin
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js'; // DataTables Bootstrap 4 JS
import 'datatables.net-buttons/js/dataTables.buttons.min.js'; // DataTables Buttons JS
import 'datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js'; // DataTables Buttons Bootstrap 4 JS
import 'datatables.net-buttons/js/buttons.html5.min.js'; // HTML5 export buttons
import 'datatables.net-buttons/js/buttons.print.min.js'; // Print button


import $ from 'jquery';
import ProductTable from '../components/table/productTable';


const StaffPage = () => {
 

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
  {/* /.card-header*/}
  <div className="card-body">

   <ProductTable/>
 
  </div>

  </div>
  {/* /.card-body */}
</div>

      </div>
    </div>
    </div>

  


  
  )
}

export default StaffPage