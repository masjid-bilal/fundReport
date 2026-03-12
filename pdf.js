function downloadPDF(){

const element = document.getElementById("tableArea");

const opt = {
  margin: [40, 10, 10, 10], 
  filename: 'Masjid-Bilal-Report.pdf',
  image: { type: 'jpeg', quality: 1 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: 'px', format: 'a4', orientation: 'portrait' }
};

html2pdf().set(opt).from(element).save();

}
