import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NewCustomer(props) {
  const navigate = useNavigate();
  let location = useLocation();
  // const location = useLocation()
//   const cust = location.state;
//   console.log("passportID", cust);
  const passportIdInputRef = useRef(null);
  const nameInputRef = useRef(null);

  async function AddCustomer(name, passport) {
    
    const data = {
        customerName: name,
      passportID: passport,
      cash: 0,
      credit: 0
    };
    try {
      const response = await fetch(
        "http://localhost:7878/api/customers",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();

      console.log('new customer: ', responseData);
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <p>Add New Customer</p>
      
      
      <input type="text" ref={nameInputRef} placeholder={'Customer Name'}/>
      <input type="text" ref={passportIdInputRef} placeholder={'Customer Passport'} />
      <button
        onClick={() => {
            AddCustomer(nameInputRef.current.value, passportIdInputRef.current.value);
        }}
      >
        Add
      </button>
    </div>
  );
}
