import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Transfer() {

  const navigate = useNavigate();
  let location = useLocation();

  const cust = location.state;
  const TransAmountRef = useRef(null);
  const passportToRef = useRef(null);

  async function TransMoney(amount, toPassport, id) {
    console.log("TransMoney called", amount, " ", toPassport);
    const data = {
      cash: amount,
      passportID: toPassport,
    };
    try {
      const response = await fetch(
        `http://localhost:7878/api/customers/${id}/trans`,
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
      <p>Transfer from</p>
      <p>{cust.customerName}</p>
      <p>{cust.passportID}</p>
      <p>Transfer To </p>
      <input type="text" ref={passportToRef} placeholder={'Passport #'} />
      <input type="number" ref={TransAmountRef} placeholder={'Cash Amount'} />
      <button
        onClick={() => {
          TransMoney(TransAmountRef.current.value, passportToRef.current.value, cust._id);
        }}
      >
        Submit
      </button>
    </div>
  );
}
