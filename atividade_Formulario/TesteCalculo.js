function soma() {
                var num1 = Number(document.getElementById("num1").value)
                var num2 = Number(document.getElementById("num2").value)
                var resSoma = document.getElementById("resSoma");

                var somar = num1 + num2;

                resSoma.innerHTML = `A soma entre ${num1} e ${num2} é igual a ${somar}`;
}
function subtrair() {
                var nums = Number(document.getElementById("nums").value);
                var nums2 = Number(document.getElementById("nums2").value);
                var resSubt = document.getElementById("resSubt");

                var subitrair = nums - nums2;

                resSubt.innerHTML = `A Subtracao ${nums} e ${nums2} é igual a ${subitrair}`;


}

function dividir() {
                var numd = Number(document.getElementById("numd").value)
                var numd2 = Number(document.getElementById("numd2").value)
                var resDive = document.getElementById("resDive");

                var dividir = numd / numd2;

                resDive.innerHTML = `A Divisao ${numd} e ${numd2} é igual a ${dividir}`;


}

function Multiplicar() {
                var numm = Number(document.getElementById("numm").value);
                var numm2 = Number(document.getElementById("numm2").value);
                var resmult = document.getElementById("resMult")

                var multiplicar = numm * numm2;
                resmult.innerHTML = `A Multiplicacao ${numm} e ${numm2} é igual a ${multiplicar}`;
}

