function makeReceipt(btn){

let row = btn.parentNode.parentNode;

let sr = row.cells[0].innerText;
let name = row.cells[1].innerText;
let desc = row.cells[2].innerText;
let mode = row.cells[3].innerText;
let amount = row.cells[4].innerText;

let url = "receipt.html?"
+"sr="+encodeURIComponent(sr)
+"&name="+encodeURIComponent(name)
+"&desc="+encodeURIComponent(desc)
+"&mode="+encodeURIComponent(mode)
+"&amount="+encodeURIComponent(amount);

window.open(url,"_blank");

}
