import React from 'react';
import Constants  from '../../config/Constants'
const appName = Constants.APP_NAME
const appTag = Constants.APP_TAG
class OrderList extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
                <div className="row">
                {/* Left col */}
                <div className="col-md-12">
                {/* TABLE: LATEST ORDERS */}
                <div className="box box-info">
                <div className="box-header with-border">
                <h3 className="box-title">Latest Event Booking Orders</h3>
                <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                </div>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                <div className="table-responsive">
                <table className="table no-margin">
                    <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Item</th>
                        <th>Status</th>
                        <th>Popularity</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><a href="pages/examples/invoice.html">OR9842</a></td>
                        <td>Call of Duty IV</td>
                        <td><span className="label label-success">Shipped</span></td>
                        <td>
                        <div className="sparkbar" data-color="#00a65a" data-height={20}>90,80,90,-70,61,-83,63</div>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="pages/examples/invoice.html">OR1848</a></td>
                        <td>Samsung Smart TV</td>
                        <td><span className="label label-warning">Pending</span></td>
                        <td>
                        <div className="sparkbar" data-color="#f39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="pages/examples/invoice.html">OR7429</a></td>
                        <td>iPhone 6 Plus</td>
                        <td><span className="label label-danger">Delivered</span></td>
                        <td>
                        <div className="sparkbar" data-color="#f56954" data-height={20}>90,-80,90,70,-61,83,63</div>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="pages/examples/invoice.html">OR7429</a></td>
                        <td>Samsung Smart TV</td>
                        <td><span className="label label-info">Processing</span></td>
                        <td>
                        <div className="sparkbar" data-color="#00c0ef" data-height={20}>90,80,-90,70,-61,83,63</div>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="pages/examples/invoice.html">OR1848</a></td>
                        <td>Samsung Smart TV</td>
                        <td><span className="label label-warning">Pending</span></td>
                        <td>
                        <div className="sparkbar" data-color="#f39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="pages/examples/invoice.html">OR7429</a></td>
                        <td>iPhone 6 Plus</td>
                        <td><span className="label label-danger">Delivered</span></td>
                        <td>
                        <div className="sparkbar" data-color="#f56954" data-height={20}>90,-80,90,70,-61,83,63</div>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="pages/examples/invoice.html">OR9842</a></td>
                        <td>Call of Duty IV</td>
                        <td><span className="label label-success">Shipped</span></td>
                        <td>
                        <div className="sparkbar" data-color="#00a65a" data-height={20}>90,80,90,-70,61,-83,63</div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
                {/* /.table-responsive */}
                </div>
                {/* /.box-body */}
                <div className="box-footer clearfix">
                <a href="javascript:void(0)" className="btn btn-sm btn-info btn-flat pull-left">Place New Order</a>
                <a href="javascript:void(0)" className="btn btn-sm btn-default btn-flat pull-right">View All Orders</a>
                </div>
                {/* /.box-footer */}
                </div>
                {/* /.box */}


                </div>
                {/* /.col */}

                </div>
      );
    };
}
export default OrderList;
