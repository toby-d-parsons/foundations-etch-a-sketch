const body = document.body;
const button = document.querySelector("#button-prompt");
const divCont = document.createElement("div");
const darkenBtn = document.querySelector("#darken-button");
const colorBtn = document.querySelector("#color-button");
const clearBtn = document.querySelector("#clear-button");
darkenBtn.className = "button-selected";
divCont.setAttribute("class", "grid-container");
body.appendChild(divCont);
let hoverType = 'darken';
let numOfDivs = 16;

function createGrid(dimension, hoverType) {
    divCont.textContent = "";
    for (let i = 0; i < (dimension*dimension); i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "grid-item")
        divCont.appendChild(div);
        //div.textContent = i+1;
        div.style.cssText = `flex-basis: ${1 / dimension * 100}%`;
        let hoverCount = 0;
        div.addEventListener("mouseover", function() {
            if (hoverType == 'darken') {
                while (hoverCount < 10) {
                    hoverCount++;
                    div.style.backgroundColor = `${darkenColor(hoverCount)}`;
                    break;
                }
            } else {
                div.style.backgroundColor = randomColor();
            }
            
        });
    }
}

function randomColor() {
    let color = '#';
    while (color.length < 7) {
        color += Math.floor(Math.random() * 16).toString(16);
    } return color;
}

function darkenColor(hoverCount) {
    let rgb = 255 - (25.5 * hoverCount); // Darkens by 10% each time
    return 'rgb(' + rgb + ', ' + rgb + ', ' + rgb + ')';
}

createGrid(numOfDivs, hoverType);

button.addEventListener("click", () => {
    do {
        numOfDivs = prompt("How many squares per side?", "16");
    } while (((numOfDivs > 0) && (numOfDivs < 101) && (Number.isInteger(Number(numOfDivs)))) != true);
    createGrid(numOfDivs, hoverType);
});

colorBtn.addEventListener("click", () => {
    if (!colorBtn.classList.contains("button-selected")) {
        hoverType = 'color';
        colorBtn.classList = "button-selected";
        darkenBtn.classList.remove("button-selected");
        createGrid(numOfDivs, hoverType);
    }
})

darkenBtn.addEventListener("click", () => {
    if (!darkenBtn.classList.contains("button-selected")) {
        hoverType = 'darken';
        darkenBtn.classList = "button-selected";
        colorBtn.classList.remove("button-selected");
        createGrid(numOfDivs, hoverType);
    }
})

clearBtn.addEventListener("click", () => {
    createGrid(numOfDivs, hoverType);
})