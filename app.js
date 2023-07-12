const hodnota = document.getElementById("vec");
const pridaj = document.getElementById("pridajVec");
const pridaneVeci = document.getElementById("pridane");

pridaj.onclick = function() {
    const hodnotaValue = hodnota.value;
    const hodnotaValue2 = ' ';

    if (hodnotaValue && hodnotaValue2) {
        localStorage.setItem(hodnotaValue, hodnotaValue2);
        location.reload();
    }
};

for (let a = 0; a < localStorage.length; a++) {
    const hodnotaValue = localStorage.key(a);
    pridaneVeci.innerHTML += `<div class= 'text'> <div id="${a}">${hodnotaValue}</div> <div> 
                            <i onclick='check("${hodnotaValue}", ${a})' class="fas fa-check"></i><i 
                            onclick='odstran("${hodnotaValue}")' class="fas fa-trash-alt"></i> 
                            </div></div> <br>`;

}

function check(hodnotaValue, id) {
    const elem = document.getElementById(id);
    elem.classList.add("fajka");
  }

function odstran(hodnotaValue) {
    localStorage.removeItem(hodnotaValue);
    location.reload();
}

function vymazVsetko() {
    localStorage.clear();
    location.reload();
}



