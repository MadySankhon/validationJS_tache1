let dateSaisie = " ", dateConvertie ;
let para = document.getElementById("sortie");
    function SaissirDate() {
        dateSaisie = prompt("Entrez une année sous forme YYYY:");
        dateConvertie = Number(dateSaisie);
    };
(function repeter() {
    SaissirDate();
    if ((dateSaisie.length == 4) && (dateConvertie)) {
        (function estBissextille(){
            if(dateConvertie % 4 === 0){
                para.innerHTML = `L'année ${dateSaisie} est une année bissextile`;
                para.className = "text-success" ;
                // alert("Année bissextile")
            }
            else{
                // alert("Année non bissextile")  
                para.innerHTML = `L'année ${dateSaisie} n'est pas une année bissextile`;
                para.className = "text-danger";
            }
        })();
        
    }
    else{
        alert(`${dateSaisie} n'est pas une année. \nVeuillez saisire la date sur le format YYYY. \nExemple: 1665`);
        repeter();
    }
})();
