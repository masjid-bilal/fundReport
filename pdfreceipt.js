function downloadPDF(){

const element = document.querySelector(".receipt");

const opt = {
  margin:10,
  filename:'Fund_receipt.pdf',
  image:{ type:'jpeg', quality:1 },
  html2canvas:{ scale:3 },
  jsPDF:{ unit:'mm', format:'a4', orientation:'portrait' }
};

html2pdf().set(opt).from(element).save();

}
