import './Customer.css'
import { Link } from "react-router-dom";

export default function Customer(props){


    return <div id="customer-container">
        <h3>Customer:</h3>
        <h3><span>{props.name}</span></h3>
        <p>passport : <span>{props.passport}</span></p>
        <p>Cash in Acc: <span> {props.cash} </span> </p>
        <p>Acc Credit: <span> {props.credit} </span> </p>
        <div id='account-control'>
            <button>Deposit</button> 
            <button>Withdraw</button> 
            <button>Transfer</button> 
            
        </div>
    </div>
}