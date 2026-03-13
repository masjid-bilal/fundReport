function downloadPDF(){

const element = document.querySelector(".receipt");

if(!element){
alert("Receipt not found");
return;
}

html2pdf().from(element).save("donation_receipt.pdf");

}
