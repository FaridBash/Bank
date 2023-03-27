import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Withdraw(props) {
    const navigate = useNavigate();
  let location = useLocation();
  // const location = useLocation()
  const cust = location.state;
  console.log("passportID", cust);
  const depoAmountRef = useRef(null);

  async function updateData(depo, passport) {
    console.log('updateData called', depo, ' ', passport);
    const data = {
      cash: depo,
      passportID: passport,
    };
    try {
      const response = await fetch(
        "http://localhost:7878/api/customers/withdrawl",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();

      console.log(responseData);
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <p>Withdrawing for</p>
      <p>{cust.customerName}</p>
      <p>{cust.passportID}</p>
      <input type="number" ref={depoAmountRef} />
      <button onClick={()=>{updateData(depoAmountRef.current.value, cust.passportID)}}>Submit</button>
    </div>
  );
}
