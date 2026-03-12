function downloadPDF(){

const element = document.getElementById("tableArea");

const opt = {
margin:[40,20,20,20],
filename:"masjid-bilal-fund.pdf",
html2canvas:{scale:2},
jsPDF:{
unit:"mm",
format:"a4",
orientation:"portrait"
}
};

html2pdf().set(opt).from(element).save();

}
