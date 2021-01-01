import React, {useRef, useState, useEffect} from 'react';
import {PayPalScriptProvider, PayPalButtons} from '@paypal/react-paypal-js';
import Content from '../components/content';

const liveID = "ARM7wuyXZDsYeOSHhBu4AJfYdxnOmTOtrjHdMt9vSStnVX_i0orymRMZ0b0wuIQCVV3CDP88U-GHqoxI";
const sandID = "AdoN--g-vTh8H9TkEUWLVwu2OZeKHiZ6JCjbzItvVC0nzwzvIBdQjMx5_OaplZafA4AJZAQqn7v4pYVP";
const PaymentPage:React.FC = () => {
    const [isPaid, setIsPaid] = useState(false);
    const [details, setDetails] = useState({});

    return(
        <PayPalScriptProvider options={{"client-id": "AdoN--g-vTh8H9TkEUWLVwu2OZeKHiZ6JCjbzItvVC0nzwzvIBdQjMx5_OaplZafA4AJZAQqn7v4pYVP"}}>
            {isPaid ? 
                <AfterPayment details={details}/> 
            : 
                <Content>
                <h1>Pay CircuitRunners Dues</h1>
                <p>On this webpage you can pay your $150 September dues. These dues go towards getting your club merchandise package (club shirt, hoodie, hat. etc), purchasing/maintaining tools, registering the competition teams, and getting robot materials. An
                additional $3.68 is added as a service fee for paying dues this way. Dues can also be paid by submitting a check made out to "CircuitRunners Robotics, Inc." with your student's name in the memo. Checks are only able to be collected at the
                front office of Wheeler High School.</p>
                <h3>$150.00 dues + $3.68 PayPal fee</h3>
                <PaymentForm 
                paymentAmount={153.68} 
                buttonShape="rect" 
                buttonColor="blue" 
                isPaid={isPaid}
                setIsPaid={setIsPaid}
                details={details}
                setDetails={setDetails} 
                />
                </Content>
            }
        </PayPalScriptProvider>
    )
}

interface PaymentFormProps {
    paymentAmount: Number;
    buttonShape?: 'rect' | 'pill';
    buttonColor?: 'gold' | 'blue' | 'silver' | 'white' | 'black';
    isPaid: boolean;
    setIsPaid: Function;
    details: Object;
    setDetails: Function;
}
const PaymentForm: React.FC<PaymentFormProps> = (props: PaymentFormProps) => {
    const nameFieldRef: React.MutableRefObject = useRef();
    const nameErrorRef: React.MutableRefObject = useRef();
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
        })
    }
    
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function(details) {
            props.setIsPaid(true);
            props.setDetails(details);

        });
    }
    const validateInput = () => {
        if (name.length == 0) {
            setErr("You must include a name!");
            return false;
        } else if (name.length !== 0) {
            setErr("");
            return true;
        }

    }

    const changeName = ({target:{value}}) => {
        setName(value);
    }
    return(
        <>
            {err.length == 0 &&<label id="nameErrorMessage" ref={nameErrorRef}>{err}</label>}
            <span id="nameLine">
                <label>Name of Student </label>
                <input type="text"ref={nameFieldRef} required onChange={changeName}/>
            </span>
            <PayPalButtons 
            style={{ shape: props.buttonShape, color: props.buttonColor, layout: "vertical", label: "pay" }} 
            createOrder={createOrder} 
            onApprove={onApprove} 
            onClick={validateInput}
            />
        </>   
    )

}

interface AfterPaymentProps {
    details: {
        id: string;
        create_time: string;
        purchase_units: [{
            description:string;
            custom_id: string;
            amount: {
                value: string;
                currency_code: string;
            }
        }];
        payer: {
            name: {
                given_name: string;
                surname: string;
            };
            email_address: string;
        }
    };
}
const AfterPayment: React.FC<AfterPaymentProps> = (props: AfterPaymentProps) => {
    const date = new Date(Date.parse(props.details.create_time))
    return(
        <>
            <h1 className="title">Payment Complete!</h1>
            <p className="desc">You have successfully paid CircuitRunners dues!</p>
            <h3 className="tag">Payment Confirmation</h3>
            <table className="paymentDetails">
                <tbody>
                    <tr className="pmtID">
                        <td className="table-label"><strong>Payment ID</strong></td>
                        <td className="table-value">{props.details.id}</td>
                    </tr>
                    <tr className="pmtID">
                        <td className="table-label"><strong>Date of Payment</strong></td>
                        <td className="table-value">{date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay()}</td>
                    </tr>
                    <tr className="pmtID">
                        <td className="table-label"><strong>Time of Payment</strong></td>
                        <td className="table-value">{date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()}</td>
                    </tr>
                    <tr>
                        <td className="table-label"><strong>Payment Description</strong></td>
                        <td className="table-value">{props.details.purchase_units[0].description}</td>
                    </tr>

                    <tr>
                        <td className="table-label"><strong>Student Name</strong></td>
                        <td className="table-value">{props.details.purchase_units[0].custom_id}</td>
                    </tr>
                    <tr>
                        <td className="table-label"><strong>Customer Name</strong></td>
                        <td className="table-value">{props.details.payer.name.surname + ', ' + props.details.payer.name.given_name}</td>
                    </tr>
                    <tr>
                        <td className="table-label"><strong>Customer Email</strong></td>
                        <td className="table-value">{props.details.payer.email_address}</td>
                    </tr>
                    <tr>
                        <td className="table-label"><strong>Amount Paid</strong></td>
                        <td className="table-value">
                            {props.details.purchase_units[0].amount.currency_code == 'USD' ?
                                '$' + props.details.purchase_units[0].amount.value
                            :
                                props.details.purchase_units[0].amount.value + props.details.purchase_units[0].amount.currency_code                   
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}


export default PaymentPage;
// // ARM7wuyXZDsYeOSHhBu4AJfYdxnOmTOtrjHdMt9vSStnVX_i0orymRMZ0b0wuIQCVV3CDP88U-GHqoxI LIVE
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