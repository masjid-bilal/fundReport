function downloadReceipt(btn){

let row = btn.parentNode.parentNode;

let name = row.cells[0].innerText;
let desc = row.cells[1].innerText;
let amount = row.cells[2].innerText;
let mode = row.cells[3].innerText;

document.getElementById("r_name").innerText = name;
document.getElementById("r_desc").innerText = desc;
document.getElementById("r_amount").innerText = "₹"+amount;
document.getElementById("r_mode").innerText = mode;
document.getElementById("r_total").innerText = amount;

let element = document.getElementById("container");

html2pdf().from(element).save("receipt.pdf");

}
