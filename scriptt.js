function visit(proj){

    if(proj == "MC"){
        window.location.href = "https://math-companion.vercel.app/";
    } else if (proj == "SKY"){
        window.location.href = "https://github.com/vrgl-cmc14/SkyDyReservation";
    } else if (proj == "3G"){
        window.location.href = "https://github.com/vrgl-cmc14/g3wheels";
    } else if (proj == "AMB"){
        window.location.href = "https://drive.google.com/drive/folders/1rmfe6_qiRMWc9nCVbw0KqTfSAw0JlA6d?usp=sharing";
    } else if (proj == "THF"){
        window.location.href = "https://drive.google.com/drive/folders/1rmfe6_qiRMWc9nCVbw0KqTfSAw0JlA6d?usp=sharing";
    } else if (proj == "HO"){
        window.location.href = "https://www.roblox.com/games/8015611165/Happy-Obby";
    }
}

function info(proj){
    if(proj == "MC"){
        window.location.href = "info/mathcompanion.html";
    } else if (proj == "SKY"){
        window.location.href = "https://github.com/vrgl-cmc14/SkyDyReservation";
    } else if (proj == "3G"){
        window.location.href = "https://github.com/vrgl-cmc14/g3wheels";
    } else if (proj == "AMB"){
        window.location.href = "https://drive.google.com/drive/folders/1rmfe6_qiRMWc9nCVbw0KqTfSAw0JlA6d?usp=sharing";
    } else if (proj == "THF"){
        window.location.href = "https://drive.google.com/drive/folders/1rmfe6_qiRMWc9nCVbw0KqTfSAw0JlA6d?usp=sharing";
    } else if (proj == "HO"){
        window.location.href = "https://www.roblox.com/games/8015611165/Happy-Obby";
    }
}

function change(){

    document.body.classList.toggle("light");

    var mode = document.getElementById("mode");
    var body = document.getElementsByTagName("body")[0];
    var nav = document.getElementsByTagName("nav")[0];
    var starsDark = document.getElementsByClassName("stars-dw")[0];
    var starsLight = document.getElementsByClassName("stars-wm")[0];
    var bar = document.getElementById("progress-bar");
    var home = document.getElementsByClassName("home-con")[0];

    var p = document.getElementsByTagName("p");
    var a = document.getElementsByTagName("a");
    var h1 = document.getElementsByTagName("h1");
    var h2 = document.getElementsByTagName("h2");
    var h5 = document.getElementsByTagName("h5");
    var skill = document.getElementsByClassName("skill");
    var rowp = document.getElementsByClassName("row-p");
    var educ = document.getElementsByClassName("educ-tile");
    var cont = document.getElementsByClassName("cont-tile");
    var btn = document.querySelectorAll(".p-buts button");
    var dark = document.getElementsByClassName("dark-pic");
    var light = document.getElementsByClassName("light-pic");
    var logoD = document.getElementById("logo-d");
    var logoL = document.getElementById("logo-l");

    if (mode.textContent == "☀︎"){

        // LIGHT MODE
        body.style.backgroundColor = "#eceef2";
        nav.style.backgroundColor = "#dde1e8";
        bar.style.background = "#1a1a1a";
        home.style.backgroundColor = "transparent";
        logoD.style.display = "none";
        logoL.style.display = "block";
        

        starsDark.style.display = "none";
        starsLight.style.display = "block";

        for(var i = 0; i < p.length; i++){
            p[i].style.color = "#1a1a1a";
        }
        for(var i = 0; i < a.length; i++){
            a[i].style.color = "#1a1a1a";
        }
        for(var i = 0; i < h1.length; i++){
            h1[i].style.color = "#1a1a1a";
        }
        for(var i = 0; i < h2.length; i++){
            h2[i].style.color = "#1a1a1a";
        }
        for(var i = 0; i < h5.length; i++){
            h5[i].style.color = "#1a1a1a";
        }
        for(var i = 0; i < skill.length; i++){
            skill[i].style.backgroundColor = "#dde1e8";
            skill[i].style.borderColor = "#1a1a1a";
        }
        for(var i = 0; i < rowp.length; i++){
            rowp[i].style.backgroundColor = "#dde1e8";
            rowp[i].style.borderColor = "#1a1a1a";
        }
        for(var i = 0; i < educ.length; i++){
            educ[i].style.backgroundColor = "#dde1e8";
            educ[i].style.borderColor = "#1a1a1a";
        }
        for(var i = 0; i < cont.length; i++){
            cont[i].style.backgroundColor = "#dde1e8";
            cont[i].style.borderColor = "#1a1a1a";
        }
        for(var i = 0; i < btn.length; i++){
            btn[i].style.backgroundColor = "#1a1a1a";
            btn[i].style.color = "#eaecf0";
            btn[i].style.borderColor = "#eaecf0";
        }
        for(var i = 0; i < dark.length; i++){
            dark[i].style.display = "none";
        }
        for(var i = 0; i < light.length; i++){
            light[i].style.display = "block";
        }

        mode.style.color = "#1a1a1a";
        mode.textContent = "⏾";
    }

    else{
        body.style.backgroundColor = "";
        nav.style.backgroundColor = "";
        bar.style.background = "";
        home.style.backgroundColor = "";
        logoD.style.display = "";
        logoL.style.display = "";

        starsDark.style.display = "";
        starsLight.style.display = "";

        for(var i = 0; i < p.length; i++){
            p[i].style.color = "";
        }
        for(var i = 0; i < a.length; i++){
            a[i].style.color = "";
        }
        for(var i = 0; i < h1.length; i++){
            h1[i].style.color = "";
        }
        for(var i = 0; i < h2.length; i++){
            h2[i].style.color = "";
        }
        for(var i = 0; i < h5.length; i++){
            h5[i].style.color = "";
        }
        for(var i = 0; i < skill.length; i++){
            skill[i].style.backgroundColor = "";
            skill[i].style.borderColor = "";
        }
        for(var i = 0; i < rowp.length; i++){
            rowp[i].style.backgroundColor = "";
            rowp[i].style.borderColor = "";
        }
        for(var i = 0; i < educ.length; i++){
            educ[i].style.backgroundColor = "";
            educ[i].style.borderColor = "";
        }
        for(var i = 0; i < cont.length; i++){
            cont[i].style.backgroundColor = "";
            cont[i].style.borderColor = "";
        }
        for(var i = 0; i < btn.length; i++){
            btn[i].style.backgroundColor = "";
            btn[i].style.color = "";
            btn[i].style.borderColor = "";
        }
        for(var i = 0; i < dark.length; i++){
            dark[i].style.display = "";
        }
        for(var i = 0; i < light.length; i++){
            light[i].style.display = "";
        }

        mode.style.color = "";
        mode.textContent = "☀︎";
    }
}

function desc(){
    var mabuhay = document.getElementsByClassName("me")[0];

    mabuhay.classList.toggle("show");
}

function contact(platform){

    if (platform == "mail"){
        window.location.href = "mailto:virgiliolumbo14@gmail.com";
    } else if (platform == "facebook"){
        window.location.href = "https://www.facebook.com/14virgilio";
    } else if (platform == "github"){
        window.location.href = "https://github.com/vrgl-cmc14";
    } else if (platform == "linkedin"){
        window.location.href = "https://www.linkedin.com/in/lumbo-virgilio-ii-028a193b4";
    } else if (platform == "discord"){
        window.location.href = "https://discord.com/users/854023281320919080";
    } else if (platform == "viber"){

    }
}

function expand(){
    var menu = document.getElementById("but");
    var icon = document.querySelector(".hamburger p");

    menu.classList.toggle("open");
    icon.textContent = menu.classList.contains("open") ? "△" : "▽";
}

var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".educ-tile, .skill, .row-p, .cont-tile").forEach(function(tile){
    tile.classList.add("reveal");
    observer.observe(tile);
});

document.querySelectorAll(".but a").forEach(function(link){
    link.addEventListener("click", function(){

        document.getElementById("but").classList.remove("open");
        document.querySelector(".hamburger p").textContent = "▽";

        var section = document.querySelector(link.getAttribute("href"));
        section.querySelectorAll(".reveal").forEach(function(tile){
            tile.classList.remove("show");
            setTimeout(function(){ tile.classList.add("show"); }, 600);
        });
    });
});