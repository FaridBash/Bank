import './Customer.css'
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";
// import { useNavigate } from "react-router-dom";



export default function Customer(props){

    // const navigate = useNavigate();

    return <div id="customer-container">
        <h3>Customer:</h3>
        <h3><span>{props.name}</span></h3>
        <p>passport : <span>{props.passport}</span></p>
        <p>Cash in Acc: <span> {props.cash} </span> </p>
        <p>Acc Credit: <span> {props.credit} </span> </p>
        <div id='account-control'>
        
            <ul>

            <NavLink className='myLinks' to={'/Deposit'} state={props.pass} >Deposit</NavLink>
            
            {props.cash > 0 ? (
         <NavLink className='myLinks' to={'/Withdrawl'} state={props.pass} >Withdraw</NavLink>
        ) : (
          <p className='myLinks'>Withdraw</p>
        )}
            {props.cash > 0 ? (
          <NavLink className='myLinks' to={'/Transfer'} state={props.pass} >Transfer</NavLink>
        ) : (
          <p className='myLinks'>Transfer</p>
        )}
           
            
            </ul>
        
            
           
            
        </div>
    </div>
}