<script>

function downloadPDF(){

const element = document.querySelector(".receipt");

const opt = {
margin:0.5,
filename:'cash_receipt.pdf',
image:{ type:'jpeg', quality:0.98 },
html2canvas:{ scale:2 },
jsPDF:{ unit:'in', format:'letter', orientation:'portrait'}
};

html2pdf().set(opt).from(element).save();

}

</script>
