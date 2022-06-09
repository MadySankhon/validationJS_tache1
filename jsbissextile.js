let dateSaisie = " ", dateConvertie, validation ;
    function SaissirDate() {
        dateSaisie = prompt("Entrez une année sous forme YYYY:");
        dateConvertie = parseInt(dateSaisie);
        validation = /[0-9]/;
    };
(function repeter() {
    SaissirDate();
    if (validation.test(dateSaisie)) {
        alert("merci");
    }
    else{
        alert("veuillez saisire la date sur le format YYYY \nExemple: 1665");
        repeter();
    }
})();