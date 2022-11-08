
const bill = document.getElementById("bill")
const person = document.getElementById("person")

const perPerson = document.getElementById("per-amt")
const total = document.getElementById("total")

function handleClick(elm){
    // elm.preventDefault();
    var tip;
    if(!validate()){
        return;
    }
    if(elm.id == "custom"){
        tip = prompt("Enter Tip in Percent");
        if(isNaN(tip)){
            alert("Enter digits only");
            return;
        }
    }else{
        tip = elm.id
    }
    let bilPerPerson = bill.value/person.value;
    let totTip = tip/100 * bill.value;
    let tipPerPerson = totTip/person.value;
    console.log(totTip);
    perPerson.innerHTML = "$"+tipPerPerson.toFixed(2);
    let totBillPerPerson = bilPerPerson+tipPerPerson;
    total.innerHTML = "$"+totBillPerPerson.toFixed(2);
}
function handleReset(){
    total.innerHTML = "$ 0.00";
    perPerson.innerHTML = "$ 0.00";
    bill.value="";
    person.value="";
}
function validate(){
    if(bill.value==""){
        alert("Enter bill amount");
        return false;
    }else if(person.value==""){
        alert("Enter total person");
        return false;
    }else{
        return true;
    }
}
