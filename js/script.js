var calculateButton = document.getElementById("button");
var finalPrice = document.getElementsByClassName("prezzo-finale")[0];
calculateButton.addEventListener("click", function() {
    var risultato = 0;
    var check = document.getElementsByClassName("somma");
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
            risultato += parseInt(check[i].value);
            var risultatoFinale = risultato + 50;
        }
    }
    finalPrice.innerHTML = "$ " + risultatoFinale;
    var applicaSconto = prompt("Inserisci il codice coupon per lo sconto, premi ok o annulla senza inserire il coupon per il prezzo non scontato");
    var coupon = "12354ABCDEF";
    if (applicaSconto === coupon) {
        var risultatoFinaleScontato = risultatoFinale * 10 / 100;
        var risultatoFinaleNetto = risultatoFinale - risultatoFinaleScontato;
        finalPrice.innerHTML = "$ " + risultatoFinaleNetto;
    } else {
        finalPrice.innerHTML = "$ " + risultatoFinale;
    }
});





