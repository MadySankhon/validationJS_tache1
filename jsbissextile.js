let dateSaisie = " ", dateConvertie ;
    function SaissirDate() {
        dateSaisie = prompt("Entrez une année sous forme YYYY:");
        dateConvertie = Number(dateSaisie);
    };
(function repeter() {
    SaissirDate();
    if ((dateSaisie.length == 4) && (dateConvertie)) {
        if(dateConvertie % 4 === 0){
            alert("Année bissectile")
        }
        else{
            alert("Année non bissectile")  
        }
    }
    else{
        alert("veuillez saisire la date sur le format YYYY \nExemple: 1665");
        repeter();
    }
})();