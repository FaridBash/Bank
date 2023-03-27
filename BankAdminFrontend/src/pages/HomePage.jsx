
import './HomePage.css'
import { useEffect, useState } from "react";
import Customer from '../components/Customer';
import { useNavigate } from "react-router-dom";
export default function Home(){
  const navigate = useNavigate();
    const [customers, setCustomers] = useState(undefined);

    useEffect(() => {
      const cust = getCustomers();
      setCustomers(cust);
    }, []);
  
    useEffect(() => {
      if (customers != null) {
        console.log("customers", customers);
      }
    }, [customers]);
  
    async function getCustomers() {
      const headers = new Headers();
      headers.append("content-type", "application/json");
      await fetch(`http://localhost:7878/api/customers`)
        .then((res) => res.json())
        .then((res) => {
          setCustomers(res);
          console.log("res", res);
        });
    }
  
    return (
      <div className="App">
        
        <h1>Bank</h1>
        <div id='control'>
          <button onClick={()=>{navigate('/NewCustomer')}}>New Customer</button>
        </div>
        <div id="accounts-container">
        { Array.isArray(customers) &&
          customers.map((c) => {
            console.log(c)
            return (
              <Customer
              key={c.id}
              name={c.customerName}
              passport={c.passportID}
              cash={c.cash}
              credit={c.credit}
              pass={c}
              />
              );
            })}
            </div>
            {/* <DepositPopup/> */}
            
      </div>
    );


}