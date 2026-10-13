function visit(proj){

    if(proj == "MC"){
        window.location.href = "https://math-companion.vercel.app/", "_self";
    } else if (proj == "SKY"){
        window.location.href = "https://github.com/vrgl-cmc14/SkyDyReservation", "_self";
    } else if (proj == "3G"){
        window.location.href = "https://github.com/vrgl-cmc14/g3wheels", "_self";
    } else if (proj == "AMB"){
        window.location.href = "https://drive.google.com/drive/folders/1rmfe6_qiRMWc9nCVbw0KqTfSAw0JlA6d?usp=sharing", "_self";
    } else if (proj == "THF"){
        window.location.href = "https://drive.google.com/drive/folders/1rmfe6_qiRMWc9nCVbw0KqTfSAw0JlA6d?usp=sharing", "_self";
    } else if (proj == "HO"){
        window.location.href = "https://www.roblox.com/games/8015611165/Happy-Obby", "_self";
    }
}

function info(proj){
    if(proj == "MC"){
        window.location.href = "info/mathcompanion.html", "_self";
    } else if (proj == "SKY"){
        window.location.href = "https://github.com/vrgl-cmc14/SkyDyReservation", "_self";
    } else if (proj == "3G"){
        window.location.href = "https://github.com/vrgl-cmc14/g3wheels", "_self";
    } else if (proj == "AMB"){
        window.location.href = "https://drive.google.com/drive/folders/1rmfe6_qiRMWc9nCVbw0KqTfSAw0JlA6d?usp=sharing", "_self";
    } else if (proj == "THF"){
        window.location.href = "https://drive.google.com/drive/folders/1rmfe6_qiRMWc9nCVbw0KqTfSAw0JlA6d?usp=sharing", "_self";
    } else if (proj == "HO"){
        window.location.href = "https://www.roblox.com/games/8015611165/Happy-Obby", "_self";
    }
}

function change(){

    var mode = document.getElementById("mode");

    if (mode.textContent == "Light"){
        var body = document.getElementsByTagName("body")[0]
        var p = document.getElementsByTagName("p");

        body.style.backgroundColor = "#fff";

        for(i = 0; i < p.length; i++){
            p[i].style.color = "#000";
        }

        mode.textContent = "Dark"
    }

    else{
        var body = document.getElementsByTagName("body")[0]
        var p = document.getElementsByTagName("p");

        body.style.backgroundColor = "#000";

        for(i = 0; i < p.length; i++){
            p[i].style.color = "#fff";
        }

        mode.textContent = "Light"
    } 
    
}