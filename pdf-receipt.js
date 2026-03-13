<script>

function downloadPDF(){

const element = document.querySelector(".receipt");

html2pdf().from(element).save("cash_receipt.pdf");

}

</script>
