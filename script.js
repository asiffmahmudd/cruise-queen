function ticketNumber(isIncrease, id){
    let x = getValue(id,false);
    if(isIncrease){
        setValue(id, x+1, false);
    }
    else if(!isIncrease && x > 0){
        setValue(id, x-1, false)
    }
    calculateTotal();
}

function getValue(id, isText){
    let value = 0;
    if(isText){
        value = document.getElementById(id).innerText;
    }
    else{
        value = document.getElementById(id).value;
    }
    if(value[0] == "$")
        value = value.substring(1,);

    return parseInt(value);
}

function setValue(id, value, isText){
    if(isText){
        document.getElementById(id).innerText = value;
    }else{
        document.getElementById(id).value = value;
    }    
}

function calculateTotal(){
    let first_class_cost = getValue('first-class',false) * 150;
    let economy_class_cost = getValue('economy-class',false) * 100;

    let subTotal = first_class_cost + economy_class_cost;
    let vat = Math.round(subTotal * 0.1);
    let total = subTotal + vat;

    setValue("sub-total", "$"+ subTotal, true);
    setValue("vat", "$"+ vat, true);
    setValue("total", "$"+ total, true);
}