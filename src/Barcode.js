import React, { Component } from 'react';
import BarcodeReader from 'react-barcode-reader';
import { API_BASE_URL } from './config';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const columns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Order Number',
    selector: 'order_number',
    sortable: true,
    right: true,
  },
  {
    name: 'Item Barcode',
    selector: 'item_barcode',
    sortable: true,
    right: true,
  },
  {
    name: 'Item',
    selector: 'item',
    sortable: true,
    right: true,
  },

];

class Barcode extends Component {

  constructor(props){
    super(props)
    this.state = {
      orders: [],
      data: []
    }
   
    //this.handleScan = this.handleScan.bind(this);

  }
  
     
    componentDidMount(){
    axios.get(API_BASE_URL + '/getorders',{
       headers: {
          'content-type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin':'*'
        }
    })
      .then(res => {
        const orders = res.data.orders;
        console.log(res.data.orders);
        this.setState({ orders });
      });

  };
    render() {
       let notfound = 'Not Found';
        return <div>
       <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) { this.state.data = result.text;  }
          else { const data = 'Not Found'; this.setState({data}) }
        }}
      />
      <ul>
        { this.state.orders.map((order, i) =>{
          if(order.item_barcode==this.state.data){
            return <li>{order.item_barcode}</li>
          }else{
            if (i == 1) {
            return <li> { this.state.data } </li>
          }
          }
          
        })}
      </ul>
    </>
        <DataTable
        title="Orders"
        columns={columns}
        data={this.state.orders}
      />
      
      </div>
        

    }
}

export default Barcode