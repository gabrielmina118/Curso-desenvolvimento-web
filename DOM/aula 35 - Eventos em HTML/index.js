document.getElementById("myButton").onclick = function () {
    alert("Button clicked!");
};

document.getElementById("mySelect").onchange = function () {
    alert("Selected value: " + this.value);
};

document.getElementById("hoverDiv").onmouseover = function () {
    this.style.backgroundColor = "lightgreen";
};

document.getElementById("hoverOutDiv").onmouseout = function () {
    this.style.backgroundColor = "lightcoral";
};

var hoverDivCombo = document.getElementById("hoverDivCombo");
hoverDivCombo.onmouseover = function () {
    this.style.backgroundColor = "lightgreen";
};
hoverDivCombo.onmouseout = function () {
    this.style.backgroundColor = "lightblue";
};
