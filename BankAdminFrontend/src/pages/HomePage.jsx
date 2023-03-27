
import './HomePage.css'
import { useEffect, useState } from "react";
import Customer from '../components/Customer';

export default function Home(){

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
              />
              );
            })}
            </div>
            {/* <DepositPopup/> */}
            
      </div>
    );


}