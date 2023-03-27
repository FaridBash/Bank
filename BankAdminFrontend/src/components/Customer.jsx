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
        {/* <Router> */}
            <ul>
            <NavLink className='myLinks' to={props.passport ? {pathname:'/Deposit', state: { passportID: props.passport }} : null}>Deposit</NavLink>
            {/* <NavLink className='myLinks' to='/'>Withdraw</NavLink>
            <NavLink className='myLinks' to='/D'>Transfer</NavLink> */}
            </ul>
        {/* </Router> */}
            
           
            
        </div>
    </div>
}