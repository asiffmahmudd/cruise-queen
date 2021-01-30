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

document.getElementById("booking-btn").addEventListener("click", function(e){
    if(document.getElementById("sub-total").textContent === "$0"){
        alert("You have to buy at least one ticket");
        e.stopPropagation();
        return;
    }
    let from, to, subTotal, total, vat, firstClass, economy;
    from = document.getElementById("input-from").value;
    if(from === "")
        from =  document.getElementById("input-from").placeholder;
    
    to = document.getElementById("input-to").value;
    if(to === "")
        to =  document.getElementById("input-to").placeholder;
    
    firstClass = document.getElementById("first-class").value;  
    economy = document.getElementById("economy-class").value;    
    subTotal = document.getElementById("sub-total").innerText;
    vat = document.getElementById("vat").innerText;
    total = document.getElementById("total").innerText;

    document.getElementById("fly-from").innerText = from;
    document.getElementById("fly-to").innerText = to;
    document.getElementById("first-class-ticket").innerText = firstClass;
    document.getElementById("economy-class-ticket").innerText = economy;
    document.getElementById("subtotal-cost").innerText = subTotal;
    document.getElementById("vat-cost").innerText = vat;
    document.getElementById("total-cost").innerText = total;
});

function modalView(e){
    console.log(e);
    
}