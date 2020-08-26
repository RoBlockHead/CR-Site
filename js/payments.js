// ARM7wuyXZDsYeOSHhBu4AJfYdxnOmTOtrjHdMt9vSStnVX_i0orymRMZ0b0wuIQCVV3CDP88U-GHqoxI LIVE
// AdoN--g-vTh8H9TkEUWLVwu2OZeKHiZ6JCjbzItvVC0nzwzvIBdQjMx5_OaplZafA4AJZAQqn7v4pYVP SANDBOX

nameField = document.getElementById("nameField");
nameErrMessage = document.getElementById("nameErrorMessage");
paypal.Buttons({
    onClick: function(data, actions) {
        if (nameField.value.length == 0) {
            nameErrMessage.innerHTML = "You must include a name!";
            nameErrMessage.hidden = false;
            return false;
        } else if (nameField.value.length !== 0) {
            nameErrMessage.hidden = true;
            return true;
        }
    },
    style: {
        shape: 'pill',
        color: 'blue',
        layout: 'vertical',
        label: 'pay',

    },
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    currency_code: "USD",
                    value: '153.60'
                },
                description: "CircuitRunners Dues",
                soft_descriptor: "CircuitRunners Dues",
                custom_id: nameField.value
            }],
            application_context: {
                brand_name: 'CircuitRunners Robotics Inc.',
                shipping_preference: 'NO_SHIPPING'
            }
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            console.log(details);
            // alert('Transaction completed by ' + details.payer.name.given_name + '!');

            document.getElementById("before-payment").hidden = true;
            updateDetails(details);
            document.getElementById("after-payment").hidden = false;

        });
    }
}).render('#paypal-button-container');

function updateDetails(details) {
    paymentID = document.getElementById('paymentID');
    paymentDate = document.getElementById('paymentDate');
    paymentTime = document.getElementById('paymentTime');
    paymentDesc = document.getElementById('paymentDesc');
    studentName = document.getElementById('studentName');
    custName = document.getElementById('custName');
    custEmail = document.getElementById('custEmail');
    amountPaid = document.getElementById('amountPaid');

    parsedName = details.payer.name.surname + ', ' + details.payer.name.given_name;

    paymentID.innerHTML = details.id;
    date = new Date(Date.parse(details.create_time))
    parsedDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();

    parsedTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    paymentDate.innerHTML = parsedDate;
    paymentTime.innerHTML = parsedTime;

    paymentDesc.innerHTML = details.purchase_units[0].description;

    studentName.innerHTML = details.purchase_units[0].custom_id;

    custEmail.innerHTML = details.payer.email_address;

    custName.innerHTML = parsedName;

    currPaid = details.purchase_units[0].amount.value;
    currency = details.purchase_units[0].amount.currency_code;

    function totalPaid() {
        out = ""
        if (currency == 'USD') {
            out = '$' + currPaid;
        } else {
            out = currPaid + currency;
        }
        return (out);
    }

    amountPaid.innerHTML = totalPaid();

}
