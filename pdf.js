function downloadPDF(){

const element = document.getElementById("tableArea");

html2pdf().from(element).save("Masjid-Bilal-Report.pdf");

}
