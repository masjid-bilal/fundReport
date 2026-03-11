function downloadPDF(){

const element = document.getElementById("tableArea");

html2pdf().from(element).save("table-data.pdf");

}
