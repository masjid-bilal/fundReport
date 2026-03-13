<script>

const params = new URLSearchParams(window.location.search);

let name = params.get("name");
let desc = params.get("desc");
let amount = params.get("amount");
let mode = params.get("mode");

document.getElementById("name").innerText = name;
document.getElementById("desc").innerText = desc;
document.getElementById("amount").innerText = "₹"+amount;
document.getElementById("mode").innerText = mode;
document.getElementById("total").innerText = amount;

</script>
