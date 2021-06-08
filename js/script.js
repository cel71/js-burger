alert("inserisci il nome del tuo Burger");
var calculateButton = document.getElementById("button");
var finalPrice = document.getElementsByClassName("prezzo-finale")[0];
calculateButton.addEventListener("click", function() {
    var risultato = 0;
    var prezzoBase = 50;
    var check = document.getElementsByClassName("somma");
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
            risultato += parseInt(check[i].value);
            var risultatoFinale = risultato + prezzoBase;
        }
    }
    finalPrice.innerHTML = "$ " + risultatoFinale;
    var applicaSconto = prompt("Inserisci il codice coupon per lo sconto, premi ok o annulla senza inserire il coupon per il prezzo non scontato");
    var coupon = "12354ABCDEF";
    if (applicaSconto === coupon) {
        var risultatoFinaleScontato = risultatoFinale * 10 / 100;
        var risultatoFinaleNetto = risultatoFinale - risultatoFinaleScontato;
        finalPrice.innerHTML = "$ " + risultatoFinaleNetto.toFixed(2);
    } else if (applicaSconto.length > 0 && applicaSconto.length === 0 && applicaSconto.length !== coupon) {
        finalPrice.innerHTML = "$ " + risultatoFinale;
    }
});





