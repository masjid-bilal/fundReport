function calculateTotal(){

let amounts = document.querySelectorAll(".amount");

let total = 0;

amounts.forEach(function(a){

total += parseFloat(a.innerText);

});

document.getElementById("totalAmount").innerText = total;

}

calculateTotal();
