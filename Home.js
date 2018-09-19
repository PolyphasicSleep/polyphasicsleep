function setCookie(name, value, exDays){
    let d = new Date();
    d.setTime(d.getTime()+exDays*86400000);
    document.cookie = name+"="+value+";expires="+d.toUTCString()+";path=/";
}

function getCookie(name){
    let cookie = document.cookie;
    let decodedCookie = decodeURIComponent(cookie);
    let cook = decodedCookie.split(";");
    let length = cook.length;
    for(let i=0;i<length;i++){
        let testElement = cook[i];
        while (testElement.charAt(0)===" "){
            testElement=testElement.substring(1, testElement.length);
        }
        if(testElement.indexOf(name)===0){
            return testElement.substring(name.length+1, testElement.length);
        }
    }
}

function deleteCookie(name){
    document.cookie = name+"=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
}

function checkCookie(name){
    let value = getCookie(name);
    if(value !== "" && value !== null){
        return true;
    } else {
        return false;
    }
}

function displaymorenav(){
    let rles = document.querySelectorAll(".navbartop>li>a:not(.active):not(.activeclickable):not(.more)");
    length = rles.length;
    let x;
    if(rles[0].style.display !== "block"){
        for (x = 0; x< length; x++){
           rles[x].style.display = "block";
        }
    } else {
        for (x = 0; x< length; x++){
            rles[x].style.display = "none";
        }
    }
}

function displaysubmenu(node){
    let parent = node.parentNode;
    let relmenu = (parent.getElementsByTagName("ul"))[0];
    if(relmenu.style.display !== "block"){
        relmenu.style.display = "block";
        parent.querySelector("a.phoneplus").innerHTML = "&#x25B2";
    } else {
        relmenu.style.display = "none";
        parent.querySelector("a.phoneplus").innerHTML = "&#x25BC";
    }
}

function hidesubmenus(){
    let submenus = document.querySelectorAll("ul.patternmenu>li>ul");
    let length = submenus.length;
    let x;
    for(x = 0; x < length; x++){
        if (submenus[x].style.display === "block"){
            displaysubmenu(submenus[x]);
        }
    }
}

function displaymenu(node, affectcallingelement){
    let relmenu = node;
    if(node.innerHTML === "Collapse"){
        node.innerHTML = "Expand";
    } else if (node.innerHTML === "Expand"){
        node.innerHTML = "Collapse";
    }
    while (relmenu.tagName !== "UL") {
        relmenu = relmenu.parentNode;
    }
    if (affectcallingelement){
        relmenu.style.display = "none"
    } else {
        let menuitems = relmenu.children;
        let length = menuitems.length;
        let x;
        for(x = 0; x < length; x++) {
            let item = menuitems[x];

            /* colors active menu items */
            let activeElements = document.querySelectorAll(".active:not(.title):not(.menutitle),.activeclickable:not(.title):not(.menutitle)");
            let actlength = activeElements.length;
            let y;
            for (y = 0; y < actlength; y++) {
                let act = activeElements[y];
                if (item.contains(act)) {
                    item.style.backgroundColor = "darkblue";
                    let text = item.querySelectorAll("a"); //get <a> elements inside menu item
                    let textcnt = text.length;
                    let z;
                    for(z = 0; z < textcnt; z++){
                        if(text[z].parentNode.contains(act))
                        text[z].style.color = "white";              //color text white
                    }
                }
            }

            // shows / hides menu items
            if (item.contains(node)){

            } else {
                if (item.style.display === "block"){
                    item.style.display = "none";
                } else {
                    item.style.display = "block";
                }

            }
        }
    }

}

/*
function outsideListener(){
    if($(event.target).closest("ul.patternmenu>li").length === 0){
        //hidesubmenus();
        document.removeEventListener("click", outsideListener);
    } else {
        let target = $(event.target)[0];
        let parent = target.parentNode;
        let phoneplus = parent.getElementsByClassName("phoneplus");
        if (phoneplus.length !== 1){
            hidesubmenus();
            document.removeEventListener("click", outsideListener);
        } else if(phoneplus[0] === target){
            let opencan = parent.getElementsByTagName("UL")[0];
            let open = opencan.style.display ==="block";
            if(!open){
                hidesubmenus();
                document.removeEventListener("click", outsideListener);
            }
        }

    }
}
*/

window.onload = function (){
    let navbar = document.getElementsByClassName("navbartop")[0];
    let cans = navbar.getElementsByTagName("A");
    let length = cans.length;
    let i = 0;
    while(cans[i] !== undefined){
        if(cans[i].innerHTML === "Statistics" || cans[i].innerHTML === "E-Book"){
            cans[i].parentNode.removeChild(cans[i]);
        }
        else {
            i++;
        }
    }
}