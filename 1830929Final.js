function calculateincentive(){
    const name= 
    document.getElementById("nameField").value ;

    const age = 
    document.getElementById("ageField").value ;

    const monthlybill = 
    document.getElementById("monthlybillField").value ;

    const maintainancefees = 
    document.getElementById("maintainancefeesField").value ;

    const monthlybill = maintainancefees/12.0;

    let value;

    if (age>50 && maintainancefees>20000){
    value = monthlybill* 1.20;
    }
    else if (age > 30 && monthlybill > 250 {
    value = maintainancefees * 1.15;
    } else {
    value = maintainancefees;
    }
    value = "Dear ${name}, your government inventive is".concat(value)
}