let list = document.querySelector('.list-group');

let val;

// childNodes [Nodelistin ushaqlarini getirir text ile beraber]
val = list.childNodes;

// nodeName [Nodenin adini gosterir]
val = list.childNodes[0].nodeName;

// nodeType [Nodenin typeni gosterir][element = 1, attribute = 2, comment = 8]
val = list.childNodes[0].nodeType;

// children [HTMLCollection ushaqlarini getirir]
val = list.children;

// children [n] 
val = list.children[1].textContent = "Edit";

// children[n].children
val = list.children[2].children;

// firstChild / lastChild
val = list.firstChild;

// firstElementChild / lastElementChild
val = list.lastElementChild;

// childElementCount [nece elementden ibaret oldugu yazilir]
val = list.lastElementChild.childElementCount;


// parentNode, parentElement [valideyn]
val = list.parentElement;


//nextSibling / nextElementSibling
val = list.children[0].nextElementSibling;



// for ile butun childleri .children ile cekme
for (let i = 0; i < list.children.length; i++) {
    console.log(list.children[i]);
}

// for ile butun childleri .childNodes ile cekme [text xaric edildi]
for (let i = 0; i < list.childNodes.length; i++) {
    if (list.childNodes[i].nodeType === 1) {
        console.log(list.childNodes[i]);
    }
}