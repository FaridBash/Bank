
import {useLocation} from 'react-router-dom'

export default function Deposite(props){

    let location = useLocation();
    // const location = useLocation()
    const passportID = location.state.passportID;
    console.log(passportID);
    return <div>
        <p>Adding Deposite for</p>
        <p>{props.name}</p>
        <p>{props.passport}</p>
        <input type="number"  />
        <button>Submit</button>
    </div>
}