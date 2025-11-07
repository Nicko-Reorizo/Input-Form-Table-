function Method() {
    //converting id into variables
    var fullname = document.getElementById('txtCompleteName').value;
    var address = document.getElementById('txtCompleteAddress').value;
    var amount = document.getElementById('dtAmount').value;
    var date = document.getElementById('Date').value;
    var term = document.getElementById('selTerm').value;

    //giving value to the checkboxes and radio buttons
    var option = "";
    if ($("#radCash").is(":checked") == true)
        option = "Cash"
    else if ($("#radBank").is(":checked") == true)
        option = "Bank Account"

    var agree = "";
    if ($("#chkAgreement").is(":checked") == true)
        agree = "Agree"

    //making a new row and inserting new cells into the table
    var Row = document.getElementById('table').insertRow();
    var row1 = Row.insertCell(0);
    var row2 = Row.insertCell(1);
    var row3 = Row.insertCell(2);
    var row4 = Row.insertCell(3);
    var row5 = Row.insertCell(4);
    var row6 = Row.insertCell(5);
    var row7 = Row.insertCell(6);

    //displaying the data's into the table cell
    row1.innerHTML = fullname;
    row2.innerHTML = address;
    row3.innerHTML = amount;
    row4.innerHTML = date;
    row5.innerHTML = term;
    row6.innerHTML = agree;
    row7.innerHTML = option;

    $('#myForm')[0].reset();
}