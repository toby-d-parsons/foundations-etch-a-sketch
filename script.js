const body = document.body;
const button = document.querySelector("#button-prompt");
const divCont = document.createElement("div");
divCont.setAttribute("class", "grid-container");
body.appendChild(divCont);

function createGrid(dimension) {
    divCont.textContent = "";
    for (let i = 0; i < (dimension*dimension); i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "grid-item")
        divCont.appendChild(div);
        //div.textContent = i+1;
        div.style.cssText = `flex-basis: ${1 / dimension * 100}%`;
        div.addEventListener("mouseover", function() {
            // div.classList.add("hover-item");
            div.style.backgroundColor = "green";
        });
    }
}


createGrid(16);

button.addEventListener("click", () => {
    let numOfDivs;
    do {
        numOfDivs = prompt("How many squares per side?", "16");
    } while (((numOfDivs > 0) && (numOfDivs < 101) && (Number.isInteger(Number(numOfDivs)))) != true);
    console.log(numOfDivs);
    createGrid(numOfDivs);
});