// Get the display
const display = document.getElementById("display");


// ---------- Add Value to Display ----------

function appendValue(value) {
    display.value += value;
}


// ---------- Clear Display ----------

function clearDisplay() {
    display.value = "";
}


// ---------- Delete Last Character ----------

function deleteLast() {
    display.value = display.value.slice(0, -1);
}


// ---------- Calculate Result ----------

function calculate() {

    try {

        if (display.value === "") {
            return;
        }

        let expression = display.value;

        // Convert percentage
        expression = expression.replace(
            /(\d+(\.\d+)?)%/g,
            "($1/100)"
        );

        // Calculate the expression
        let result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        // Show result
        display.value = result;

    } catch (error) {

        display.value = "Error";

    }

}
