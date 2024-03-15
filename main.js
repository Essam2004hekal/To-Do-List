let input = document.getElementById("input")
let button = document.getElementById("btn")
let list = document.getElementById('list');

let myCloseList = document.getElementsByTagName("LI");

for (i = 0; i < myCloseList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myCloseList[i].appendChild(span);
}


let close = document.getElementsByClassName("close");

for (k = 0; k < close.length; k++) {
close[k].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
}
}


list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
}
}, false);




function newTask() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("input").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("list").appendChild(li);
    }
    input.value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
    div.style.display = "none";
    }
    }
}