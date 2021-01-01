import React, { useRef, useState } from '../../web_modules/react.js';
import { PayPalScriptProvider, PayPalButtons } from '../../web_modules/@paypal/react-paypal-js.js';
import Content from '../components/content.js';
const liveID = "ARM7wuyXZDsYeOSHhBu4AJfYdxnOmTOtrjHdMt9vSStnVX_i0orymRMZ0b0wuIQCVV3CDP88U-GHqoxI";
const sandID = "AdoN--g-vTh8H9TkEUWLVwu2OZeKHiZ6JCjbzItvVC0nzwzvIBdQjMx5_OaplZafA4AJZAQqn7v4pYVP";

const PaymentPage = () => {
  const [isPaid, setIsPaid] = useState(false);
  const [details, setDetails] = useState({});
  return /*#__PURE__*/React.createElement(PayPalScriptProvider, {
    options: {
      "client-id": "AdoN--g-vTh8H9TkEUWLVwu2OZeKHiZ6JCjbzItvVC0nzwzvIBdQjMx5_OaplZafA4AJZAQqn7v4pYVP"
    }
  }, isPaid ? /*#__PURE__*/React.createElement(AfterPayment, {
    details: details
  }) : /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement("h1", null, "Pay CircuitRunners Dues"), /*#__PURE__*/React.createElement("p", null, "On this webpage you can pay your $150 September dues. These dues go towards getting your club merchandise package (club shirt, hoodie, hat. etc), purchasing/maintaining tools, registering the competition teams, and getting robot materials. An additional $3.68 is added as a service fee for paying dues this way. Dues can also be paid by submitting a check made out to \"CircuitRunners Robotics, Inc.\" with your student's name in the memo. Checks are only able to be collected at the front office of Wheeler High School."), /*#__PURE__*/React.createElement("h3", null, "$150.00 dues + $3.68 PayPal fee"), /*#__PURE__*/React.createElement(PaymentForm, {
    paymentAmount: 153.68,
    buttonShape: "rect",
    buttonColor: "blue",
    isPaid: isPaid,
    setIsPaid: setIsPaid,
    details: details,
    setDetails: setDetails
  })));
};

const PaymentForm = props => {
  const nameFieldRef = useRef();
  const nameErrorRef = useRef();
  const [name, setName] = useState("");
  const [err, setErr] = useState("");

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [{
        amount: {
          currency_code: "USD",
          value: props.paymentAmount
        },
        description: "CircuitRunners Dues",
        soft_descriptor: "CircuitRunners Dues",
        custom_id: name
      }],
      application_context: {
        brand_name: 'CircuitRunners Robotics Inc.',
        shipping_preference: 'NO_SHIPPING'
      }
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      props.setIsPaid(true);
      props.setDetails(details);
    });
  };

  const validateInput = () => {
    if (name.length == 0) {
      setErr("You must include a name!");
      return false;
    } else if (name.length !== 0) {
      setErr("");
      return true;
    }
  };

  const changeName = ({
    target: {
      value
    }
  }) => {
    setName(value);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, err.length == 0 && /*#__PURE__*/React.createElement("label", {
    id: "nameErrorMessage",
    ref: nameErrorRef
  }, err), /*#__PURE__*/React.createElement("span", {
    id: "nameLine"
  }, /*#__PURE__*/React.createElement("label", null, "Name of Student "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    ref: nameFieldRef,
    required: true,
    onChange: changeName
  })), /*#__PURE__*/React.createElement(PayPalButtons, {
    style: {
      shape: props.buttonShape,
      color: props.buttonColor,
      layout: "vertical",
      label: "pay"
    },
    createOrder: createOrder,
    onApprove: onApprove,
    onClick: validateInput
  }));
};

const AfterPayment = props => {
  const date = new Date(Date.parse(props.details.create_time));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "Payment Complete!"), /*#__PURE__*/React.createElement("p", {
    className: "desc"
  }, "You have successfully paid CircuitRunners dues!"), /*#__PURE__*/React.createElement("h3", {
    className: "tag"
  }, "Payment Confirmation"), /*#__PURE__*/React.createElement("table", {
    className: "paymentDetails"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", {
    className: "pmtID"
  }, /*#__PURE__*/React.createElement("td", {
    className: "table-label"
  }, /*#__PURE__*/React.createElement("strong", null, "Payment ID")), /*#__PURE__*/React.createElement("td", {
    className: "table-value"
  }, props.details.id)), /*#__PURE__*/React.createElement("tr", {
    className: "pmtID"
  }, /*#__PURE__*/React.createElement("td", {
    className: "table-label"
  }, /*#__PURE__*/React.createElement("strong", null, "Date of Payment")), /*#__PURE__*/React.createElement("td", {
    className: "table-value"
  }, date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay())), /*#__PURE__*/React.createElement("tr", {
    className: "pmtID"
  }, /*#__PURE__*/React.createElement("td", {
    className: "table-label"
  }, /*#__PURE__*/React.createElement("strong", null, "Time of Payment")), /*#__PURE__*/React.createElement("td", {
    className: "table-value"
  }, date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "table-label"
  }, /*#__PURE__*/React.createElement("strong", null, "Payment Description")), /*#__PURE__*/React.createElement("td", {
    className: "table-value"
  }, props.details.purchase_units[0].description)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "table-label"
  }, /*#__PURE__*/React.createElement("strong", null, "Student Name")), /*#__PURE__*/React.createElement("td", {
    className: "table-value"
  }, props.details.purchase_units[0].custom_id)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "table-label"
  }, /*#__PURE__*/React.createElement("strong", null, "Customer Name")), /*#__PURE__*/React.createElement("td", {
    className: "table-value"
  }, props.details.payer.name.surname + ', ' + props.details.payer.name.given_name)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "table-label"
  }, /*#__PURE__*/React.createElement("strong", null, "Customer Email")), /*#__PURE__*/React.createElement("td", {
    className: "table-value"
  }, props.details.payer.email_address)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "table-label"
  }, /*#__PURE__*/React.createElement("strong", null, "Amount Paid")), /*#__PURE__*/React.createElement("td", {
    className: "table-value"
  }, props.details.purchase_units[0].amount.currency_code == 'USD' ? '$' + props.details.purchase_units[0].amount.value : props.details.purchase_units[0].amount.value + props.details.purchase_units[0].amount.currency_code)))));
};

export default PaymentPage; // // ARM7wuyXZDsYeOSHhBu4AJfYdxnOmTOtrjHdMt9vSStnVX_i0orymRMZ0b0wuIQCVV3CDP88U-GHqoxI LIVE
// // AdoN--g-vTh8H9TkEUWLVwu2OZeKHiZ6JCjbzItvVC0nzwzvIBdQjMx5_OaplZafA4AJZAQqn7v4pYVP SANDBOX
// function updateDetails(details) {
//     paymentID = document.getElementById('paymentID');
//     paymentDate = document.getElementById('paymentDate');
//     paymentTime = document.getElementById('paymentTime');
//     paymentDesc = document.getElementById('paymentDesc');
//     studentName = document.getElementById('studentName');
//     custName = document.getElementById('custName');
//     custEmail = document.getElementById('custEmail');
//     amountPaid = document.getElementById('amountPaid');
//     parsedName = details.payer.name.surname + ', ' + details.payer.name.given_name;
//     paymentID.innerHTML = details.id;
//     date = new Date(Date.parse(details.create_time))
//     parsedDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();
//     parsedTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
//     paymentDate.innerHTML = parsedDate;
//     paymentTime.innerHTML = parsedTime;
//     paymentDesc.innerHTML = details.purchase_units[0].description;
//     studentName.innerHTML = details.purchase_units[0].custom_id;
//     custEmail.innerHTML = details.payer.email_address;
//     custName.innerHTML = parsedName;
//     currPaid = details.purchase_units[0].amount.value;
//     currency = details.purchase_units[0].amount.currency_code;
//     var out = () => {
//         if (props.details.purchase_units[0].amount.currency_code == 'USD') {
//             return('$' + props.details.purchase_units[0].amount.value);
//         } else {
//             return(props.details.purchase_units[0].amount.value + props.details.purchase_units[0].amount.currency_code);
//         };
//     }
//     amountPaid.innerHTML = totalPaid();
// }