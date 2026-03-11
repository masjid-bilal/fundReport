function downloadPDF(){

const element = document.getElementById("tableArea");

html2pdf().from(element).save("Masjid_Bilal_Report.pdf");

}
