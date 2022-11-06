const $ = (id) => document.querySelector(id);


const tipAmount = $("#tipAmount");
const billAmount = $("#billAmount");


const calcTipAmount = (amount, percentage) => parseInt(amount) * (parseInt(percentage)/100);
const calcBillAmount = (tip, amount) => parseInt(tip) + parseInt(amount);


let updateDom = () => {
    let initAmount = $("#initialAmount").value;
    let tipPercent = $("#tipPercent").value;
    
    if(initAmount != "" && tipPercent != ""){
        tipAmount.innerHTML = calcTipAmount(initAmount, tipPercent).toFixed(2)
        billAmount.innerHTML = calcBillAmount(calcTipAmount(initAmount, tipPercent),initAmount).toFixed(2)
    }
    
    }

$("#initialAmount").addEventListener("keyup", ()=> updateDom());
$("#tipPercent").addEventListener("keyup", ()=> updateDom());








